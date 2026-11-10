/* Derm.AI — protótipo navegável v2. Sem dependências. */
(() => {
  'use strict';

  const ICONS = {
    'arrow-left': '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'x': '<path d="M18 6 6 18M6 6l12 12"/>',
    'camera': '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    'image': '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    'zap': '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    'zap-off': '<path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773M16.273 16.273l-3.393 3.497a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 13 12H4a1 1 0 0 1-.78-1.63l4.507-4.643M2 2l20 20"/>',
    'send': '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    'user': '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    'stethoscope': '<path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
    'microscope': '<path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    'alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    'bulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/>',
    'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'bell': '<path d="M10.268 21a2 2 0 0 0 3.464 0M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    'help': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
    'lock': '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'scan': '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    'ruler': '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/>',
    'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8"/>',
    'sparkles': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
    'rotate': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    'edit': '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
    'focus': '<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>',
    'clipboard': '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 14l2 2 4-4"/>',
    'calendar': '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    'mars': '<path d="M16 3h5v5M21 3l-6.75 6.75"/><circle cx="10" cy="14" r="6"/>',
    'venus': '<path d="M12 15v7M9 19h6"/><circle cx="12" cy="9" r="6"/>',
    'eye-off': '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49M14.084 14.158a3 3 0 0 1-4.242-4.242M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143M2 2l20 20"/>',
    'circle-user': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>',
    'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    'activity': '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    'eye': '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    'smile': '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    'keyboard': '<path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'hand': '<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
  };
  const svg = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;
  const SB_ICONS =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 20.5 1.2 8.4A15.6 15.6 0 0 1 12 4.2a15.6 15.6 0 0 1 10.8 4.2z"/></svg>' +
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 2v20H2z"/></svg>' +
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="7" y="3.5" width="10" height="18.5" rx="2"/><rect x="10" y="1.5" width="4" height="2" rx=".5"/></svg>';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const device = $('.device');
  const home = document.body.dataset.home || 'boas-vindas';
  const RISKS = ['baixo', 'medio', 'alto'];
  const state = { risk: 'baixo', style: 'detalhado', stack: [], timers: [], scale: 1 };

  /* ---------- componentes gerados ---------- */
  $$('.statusbar').forEach((el) => { el.innerHTML = `<span>9:30</span><span class="sb-icons">${SB_ICONS}</span>`; });

  $$('.topbar').forEach((el) => {
    const action = el.dataset.action;
    const sheet = el.dataset.actionSheet;
    const ic = action === 'user' ? 'user' : 'help';
    el.innerHTML =
      `<button class="icon-btn" data-back aria-label="Voltar"><i data-icon="arrow-left"></i></button>` +
      `<span class="topbar-title">${el.dataset.title || ''}</span>` +
      (action ? `<button class="icon-btn" ${sheet ? `data-sheet="${sheet}"` : ''} aria-label="${action === 'user' ? 'Perfil' : 'Ajuda'}"><i data-icon="${ic}"></i></button>`
              : `<span class="icon-btn ghost" aria-hidden="true"></span>`);
  });

  $$('.stepper').forEach((el) => {
    const steps = el.dataset.steps.split('|');
    const cur = Number(el.dataset.current);
    el.setAttribute('aria-label', `Etapa ${cur} de ${steps.length}`);
    el.innerHTML = steps.map((label, i) => {
      const n = i + 1;
      const cls = n < cur ? 'done' : n === cur ? 'current' : 'next';
      const dot = n < cur ? `<i data-icon="check" class="i-16"></i>` : n;
      const line = n < steps.length ? `<span class="line ${n < cur ? 'done' : ''}"></span>` : '';
      return `<div class="step ${cls}"><span class="dot">${dot}</span><span>${label}</span></div>${line}`;
    }).join('');
  });

  $$('.chip').forEach((c) => c.insertAdjacentHTML('afterbegin', '<i data-icon="check" class="ck"></i>'));
  $$('.tone-opt').forEach((c) => c.insertAdjacentHTML('beforeend', '<span class="ck"><i data-icon="check"></i></span>'));
  $$('.screen').forEach((s) => { if (!$('.gesture', s)) s.insertAdjacentHTML('beforeend', '<div class="gesture" aria-hidden="true"></div>'); });
  $$('[data-icon]').forEach((el) => { el.innerHTML = svg(el.dataset.icon); });

  /* ---------- campo de idade ---------- */
  $$('.age-field input').forEach((inp) => {
    const field = inp.closest('.age-field');
    const msg = field.nextElementSibling;
    if (msg) msg.dataset.hint = msg.textContent;
    const size = () => { inp.style.width = `${Math.max(1, inp.value.length) + 0.3}ch`; };
    inp.addEventListener('input', () => {
      inp.value = inp.value.replace(/\D/g, '').slice(0, 3);
      const v = Number(inp.value);
      const bad = inp.value !== '' && v > 120;
      field.classList.toggle('invalid', bad);
      inp.setAttribute('aria-invalid', String(bad));
      if (msg) msg.textContent = bad ? 'Informe uma idade entre 0 e 120 anos.' : msg.dataset.hint;
      size();
    });
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') inp.blur(); });
    size();
  });

  /* ---------- mapa do corpo ---------- */
  function placePin(region) {
    const map = region.closest('.bm'); const pin = map && $('.bm-pin', map);
    if (!pin) return;
    const b = (region.children[0] || region).getBBox();
    pin.setAttribute('transform', `translate(${b.x + b.width / 2} ${b.y + b.height / 2})`);
  }

  /* ---------- navegação ---------- */
  const flow = $('#flow');
  if (flow) flow.innerHTML = $$('.screen').map((s) => `<li><button data-jump="${s.id}">${s.dataset.label || s.id}</button></li>`).join('');

  const clearTimers = () => { state.timers.forEach(clearTimeout); state.timers = []; };

  function go(id, { push = true } = {}) {
    const next = document.getElementById(id);
    const cur = $('.screen.active');
    if (!next || next === cur) return;
    clearTimers(); closeModals();
    if (cur && push) state.stack.push(cur.id);
    cur && cur.classList.remove('active');
    next.classList.add('active');
    $$('.sheet-scroll, .content, .welcome-sheet', next).forEach((s) => { s.scrollTop = 0; });
    history.replaceState(null, '', '#' + id);
    $$('#flow button').forEach((b) => b.classList.toggle('on', b.dataset.jump === id));
    onEnter(next);
  }
  const back = () => go(state.stack.pop() || home, { push: false });

  function countUp(el, to, ms = 1100) {
    const t0 = performance.now(); const suffix = el.dataset.suffix || '';
    const step = (t) => { const k = Math.min(1, (t - t0) / ms); const e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e) + suffix; if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }

  function onEnter(screen) {
    // barras
    $$('.mbar i', screen).forEach((b) => { b.style.width = '0'; });
    // medidor de risco
    $$('.gauge', screen).forEach((g) => {
      const v = +g.dataset.v; const prog = $('.g-prog', g); const needle = $('.needle', g);
      prog.style.strokeDashoffset = '314.16px'; needle.style.transform = 'rotate(-90deg)';
    });
    $$('.donut', screen).forEach((d) => d.style.setProperty('--p', 0));
    requestAnimationFrame(() => requestAnimationFrame(() => {
      $$('.mbar i', screen).forEach((b) => { b.style.width = b.dataset.w; });
      $$('.gauge', screen).forEach((g) => {
        const v = +g.dataset.v;
        $('.g-prog', g).style.strokeDashoffset = `${314.16 * (1 - v / 100)}px`;
        $('.needle', g).style.transform = `rotate(${-90 + v * 1.8}deg)`;
      });
      $$('.donut', screen).forEach((d) => d.style.setProperty('--p', d.dataset.v));
      $$('[data-count]', screen).forEach((el) => countUp(el, +el.dataset.count));
    }));
    // pin do mapa
    $$('.bm-r[aria-checked="true"]', screen).forEach(placePin);
    // análise automática
    if (screen.dataset.next) {
      const items = $$('.progress-list li', screen);
      items.forEach((li) => li.classList.remove('done'));
      const bar = $('.orb .bar', screen);
      if (bar) { bar.style.animation = 'none'; void bar.getBoundingClientRect(); bar.style.animation = ''; }
      const pct = $('.pct b', screen); if (pct) countUp(pct, 100, 3400);
      items.forEach((li, i) => state.timers.push(setTimeout(() => li.classList.add('done'), 700 + i * 1000)));
      const targets = (state.style === 'simples' && screen.dataset.nextSimple ? screen.dataset.nextSimple : screen.dataset.next).split('|');
      const target = targets[RISKS.indexOf(state.risk)] || targets[0];
      state.timers.push(setTimeout(() => go(target), 700 + items.length * 1000 + 600));
    }
  }

  /* ---------- modais e toast ---------- */
  function openModal(id) { const m = document.getElementById(id); if (m) { m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); $('.modal-card', m)?.focus(); } }
  function closeModals() { $$('.modal.open').forEach((m) => { m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); }); }
  let toastTimer;
  function toast(text) {
    const t = $('.toast'); if (!t) return;
    $('span', t).textContent = text; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ---------- seleção ---------- */
  function select(item) {
    const group = item.closest('[role="radiogroup"]');
    if (!group) return;
    $$('[role="radio"]', group).forEach((r) => {
      const on = r === item;
      r.setAttribute('aria-checked', String(on));
      if (r.dataset.reveal) {
        const t = document.getElementById(r.dataset.reveal);
        if (t) { t.hidden = !on; if (on) { t.classList.remove('reveal'); void t.offsetWidth; t.classList.add('reveal'); } }
      }
    });
    if (group.dataset.bind) $$(`[data-bind-target="${group.dataset.bind}"]`).forEach((t) => { t.textContent = item.dataset.value || item.textContent.trim(); });
    if (item.classList.contains('bm-r')) placePin(item);
  }

  document.addEventListener('click', (e) => {
    const t = e.target.closest('button, [role="radio"], [role="switch"], .modal');
    if (!t) return;
    if (t.classList.contains('modal')) { if (e.target === t) closeModals(); return; }
    if (t.matches('[role="radio"]')) { select(t); return; }
    if (t.matches('[role="switch"]')) {
      const on = t.getAttribute('aria-checked') !== 'true';
      t.setAttribute('aria-checked', String(on));
      if (t.dataset.toggles) document.getElementById(t.dataset.toggles)?.classList.toggle('off', !on);
      return;
    }
    if (t.dataset.bodyView) {
      const card = t.closest('.body-card'); const map = $('.bm', card); const torso = $('[data-torso]', map);
      $$('[data-body-view]', card).forEach((b) => b.setAttribute('aria-pressed', String(b === t)));
      const backView = t.dataset.bodyView === 'costas';
      map.classList.toggle('back', backView);
      torso.dataset.value = backView ? 'Costas' : 'Tronco';
      torso.setAttribute('aria-label', torso.dataset.value);
      if (torso.getAttribute('aria-checked') === 'true') select(torso);
      return;
    }
    if (t.hasAttribute('data-close')) closeModals();
    if (t.dataset.sheet) { openModal(t.dataset.sheet); return; }
    if (t.dataset.toast) toast(t.dataset.toast);
    if (t.hasAttribute('data-back')) { back(); return; }
    if (t.hasAttribute('data-shutter')) {
      const f = $('.flash', t.closest('.screen'));
      f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
      state.timers.push(setTimeout(() => go(t.dataset.go), 320));
      return;
    }
    if (t.hasAttribute('data-flash-toggle')) {
      const on = t.getAttribute('aria-pressed') !== 'true';
      t.setAttribute('aria-pressed', String(on)); t.innerHTML = svg(on ? 'zap' : 'zap-off');
      t.setAttribute('aria-label', on ? 'Flash ligado' : 'Flash desligado');
      return;
    }
    if (t.hasAttribute('data-reset')) { state.stack = []; go(t.dataset.go, { push: false }); return; }
    if (t.dataset.go) { go(t.dataset.go); return; }
    if (t.dataset.jump) { state.stack = []; go(t.dataset.jump, { push: false }); return; }
    if (t.dataset.style) {
      state.style = t.dataset.style;
      $$('[data-style]').forEach((b) => b.setAttribute('aria-pressed', String(b === t)));
      return;
    }
    if (t.dataset.risk) {
      state.risk = t.dataset.risk;
      $$('[data-risk]').forEach((b) => b.setAttribute('aria-pressed', String(b === t)));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[role="radio"]:not(button)')) { e.preventDefault(); select(e.target); }
  });

  /* ---------- encaixe do aparelho na janela ---------- */
  const wrap = $('.device-wrap');
  function fit() {
    if (window.innerWidth <= 520) { wrap.style.width = ''; wrap.style.height = ''; device.style.transform = ''; state.scale = 1; return; }
    const s = Math.min(1, (window.innerHeight - 56) / 917);
    state.scale = s;
    device.style.transform = `scale(${s})`;
    wrap.style.width = `${412 * s}px`; wrap.style.height = `${917 * s}px`;
  }
  window.addEventListener('resize', fit);
  fit();

  /* ---------- tela inicial ---------- */
  const start = location.hash.slice(1);
  const first = (start && document.getElementById(start)) ? start : home;
  document.getElementById(first).classList.add('active');
  $$('#flow button').forEach((b) => b.classList.toggle('on', b.dataset.jump === first));
  onEnter(document.getElementById(first));
})();
