// ===== Mobile menu (full-screen, slides in from the left) =====
(function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  var isOpen = false;

  function setOpen(open) {
    isOpen = open;
    // CSS drives the animations: the bars morph to an X and the label
    // crossfades from Menu to Close.
    menu.classList.toggle('is-open', open);
    btn.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', function () { setOpen(!isOpen); });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.keyCode === 27) && isOpen) setOpen(false);
  });
})();

// ===== Header shadow on scroll =====
(function () {
  var header = document.getElementById('siteHeader');
  if (!header) return;
  var onScroll = function () {
    header.classList.toggle('shadow-lg', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ===== Scroll reveal =====
(function () {
  var els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// ===== Animated counters (hero) =====
(function () {
  var nodes = document.querySelectorAll('[data-count]');
  if (!nodes.length) return;
  var finals = [100, 0, 24]; // wireless %, monthly fees, app hours
  var started = false;

  function run() {
    if (started) return;
    started = true;
    nodes.forEach(function (node, i) {
      var end = finals[i] !== undefined ? finals[i] : parseInt(node.getAttribute('data-count'), 10) || 0;
      var suffix = node.getAttribute('data-suffix') || '';
      var dur = 1100, start = performance.now();
      function tick(now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(end * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  var hero = document.querySelector('[data-count]');
  if ('IntersectionObserver' in window && hero) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(hero.closest('section') || hero);
  } else {
    run();
  }
})();

// ===== Crime "city" tabs =====
(function () {
  var tabs = document.querySelectorAll('.city-tab');
  var panels = document.querySelectorAll('.city-panel');
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var id = tab.getAttribute('data-city');
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle('bg-brand', active);
        t.classList.toggle('text-white', active);
        t.classList.toggle('border-brand', active);
        t.classList.toggle('bg-white', !active);
        t.classList.toggle('text-ink/70', !active);
        t.classList.toggle('border-black/10', !active);
      });
      panels.forEach(function (p) {
        p.classList.toggle('hidden', p.getAttribute('data-panel') !== id);
      });
    });
  });
})();

// ===== Postcode checker =====
(function () {
  var form = document.getElementById('postcodeForm');
  var input = document.getElementById('postcodeInput');
  var result = document.getElementById('postcodeResult');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var pc = (input.value || '').trim().toUpperCase();
    if (!pc) return;
    result.classList.remove('hidden');
    result.innerHTML = 'Thanks. We cover <strong>' + pc + '</strong> and the surrounding area. Start your free quote and a local engineer will be in touch the same day.';
    setTimeout(function () { window.location.href = '/quote'; }, 1800);
  });
})();

// ===== Newsletter =====
(function () {
  var form = document.getElementById('newsletterForm');
  var input = document.getElementById('newsletterInput');
  var result = document.getElementById('newsletterResult');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!input.value) return;
    result.classList.remove('hidden');
    result.textContent = "You're subscribed. Thanks for signing up, keep an eye on your inbox.";
    input.value = '';
  });
})();

// ===== Cookie consent banner =====
(function () {
  var KEY = 'sutton-cookie-consent';
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  function show() { banner.classList.remove('hidden'); }
  function hide() { banner.classList.add('hidden'); }
  function store(choice) {
    try { localStorage.setItem(KEY, choice); } catch (e) { /* private browsing */ }
    hide();
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (!saved) show();

  var accept = document.getElementById('cookieAccept');
  var decline = document.getElementById('cookieDecline');
  if (accept) accept.addEventListener('click', function () { store('accepted'); });
  if (decline) decline.addEventListener('click', function () { store('declined'); });

  // "Cookie Preferences" in the footer reopens the banner
  document.querySelectorAll('[data-cookie-prefs]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      show();
      banner.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  });
})();

// ===== Quote wizard (multi-step) =====
(function () {
  var wizard = document.getElementById('quoteWizard');
  if (!wizard) return;

  var steps = Array.prototype.slice.call(wizard.querySelectorAll('.wizard-step'));
  var totalChoiceSteps = 5; // steps that count toward progress
  var current = 1;
  var answers = {};

  var backBtn = document.getElementById('backBtn');
  var nextBtn = document.getElementById('nextBtn');
  var nav = document.getElementById('wizardNav');
  var progressBar = document.getElementById('progressBar');
  var stepLabel = document.getElementById('stepLabel');
  var stepPercent = document.getElementById('stepPercent');

  function currentStepEl() {
    return wizard.querySelector('.wizard-step[data-step="' + current + '"]');
  }

  function stepComplete() {
    var el = currentStepEl();
    var group = el.querySelector('[data-group]');
    if (group) {
      return !!group.querySelector('.option-card.selected');
    }
    if (current === 5) {
      var name = document.getElementById('qName').value.trim();
      var phone = document.getElementById('qPhone').value.trim();
      var postcode = document.getElementById('qPostcode').value.trim();
      return name && phone && postcode;
    }
    return true;
  }

  function updateNav() {
    var pct = Math.round((Math.min(current, totalChoiceSteps) / totalChoiceSteps) * 100);
    progressBar.style.width = pct + '%';
    stepLabel.textContent = current <= totalChoiceSteps ? 'Step ' + current + ' of ' + totalChoiceSteps : 'Done';
    stepPercent.textContent = pct + '%';

    backBtn.classList.toggle('invisible', current === 1 || current > totalChoiceSteps);
    nav.classList.toggle('hidden', current > totalChoiceSteps);
    nextBtn.textContent = current === totalChoiceSteps ? 'Get My Free Quote' : 'Continue';

    var ok = stepComplete();
    nextBtn.classList.toggle('opacity-40', !ok);
    nextBtn.classList.toggle('pointer-events-none', !ok);
  }

  function show(step) {
    current = step;
    steps.forEach(function (s) {
      s.classList.toggle('active', parseInt(s.getAttribute('data-step'), 10) === step);
    });
    updateNav();
    // Only scroll if the top of the wizard is out of view, so the page
    // does not jump on every step
    var rect = wizard.getBoundingClientRect();
    if (rect.top < 0) {
      wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Option card selection
  wizard.querySelectorAll('[data-group]').forEach(function (group) {
    group.querySelectorAll('.option-card').forEach(function (card) {
      card.addEventListener('click', function () {
        group.querySelectorAll('.option-card').forEach(function (c) { c.classList.remove('selected'); });
        card.classList.add('selected');
        answers[group.getAttribute('data-group')] = card.getAttribute('data-value');
        updateNav();
        // Auto-advance after a beat, Verisure style
        setTimeout(function () {
          if (current < totalChoiceSteps) show(current + 1);
        }, 350);
      });
    });
  });

  // Contact fields enable the button live
  ['qName', 'qPhone', 'qEmail', 'qPostcode'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', updateNav);
  });

  nextBtn.addEventListener('click', function () {
    if (!stepComplete()) {
      if (current === 5) document.getElementById('contactError').classList.remove('hidden');
      return;
    }
    if (current === 5) {
      document.getElementById('contactError').classList.add('hidden');
      finish();
      return;
    }
    show(current + 1);
  });

  backBtn.addEventListener('click', function () {
    if (current > 1) show(current - 1);
  });

  function finish() {
    answers.name = document.getElementById('qName').value.trim();
    answers.phone = document.getElementById('qPhone').value.trim();
    answers.email = document.getElementById('qEmail').value.trim();
    answers.postcode = document.getElementById('qPostcode').value.trim().toUpperCase();

    document.getElementById('doneName').textContent = answers.name.split(' ')[0] || 'there';

    var summary = [
      ['Property', answers.property],
      ['Bedrooms', answers.bedrooms],
      ['Current alarm', answers.alarm],
      ['Timing', answers.timing],
      ['Postcode', answers.postcode],
      ['Phone', answers.phone]
    ];
    var box = document.getElementById('summaryBox');
    box.innerHTML = summary.map(function (row) {
      return '<div class="flex justify-between gap-4"><span class="text-slate-soft">' + row[0] + '</span><span class="font-semibold text-right">' + (row[1] || '-') + '</span></div>';
    }).join('');

    var lines = ['Hi Sutton Security Systems, I would like a free quote.', ''].concat(summary.map(function (row) {
      return row[0] + ': ' + (row[1] || '-');
    }));
    if (answers.email) lines.push('Email: ' + answers.email);
    var text = lines.join('\n');

    // WhatsApp: opens a chat to the business number with the quote prefilled
    document.getElementById('whatsappLink').href =
      'https://wa.me/447404636800?text=' + encodeURIComponent(text);

    // Email fallback
    document.getElementById('mailtoLink').href =
      'mailto:contact@suttonss.co.uk?subject=' + encodeURIComponent('Free quote request - ' + answers.postcode) +
      '&body=' + encodeURIComponent(text);

    show(6);
  }

  updateNav();
})();
