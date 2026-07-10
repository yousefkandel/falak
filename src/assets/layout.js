/* ============ FALAK — الهيدر والفوتر وطبقة البحث المشتركة ============ */

const FALAK_ICONS = {
  book:'<path d="M4 4h8a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-8a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h9z"/>',
  star:'<path d="M12 2l2.9 6.6L22 9.6l-5 4.9 1.2 7-6.2-3.6L5.8 21.5 7 14.5 2 9.6l7.1-1z"/>',
  scroll:'<path d="M6 4h12v4H6z"/><path d="M6 8v10a2 2 0 0 0 2 2h8V8"/><path d="M6 12h8"/>',
  orbit:'<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5l-2 5-5 2 2-5z"/>',
  feather:'<path d="M20 4c-6 0-14 6-14 14v2h2c8 0 14-8 14-14z"/><path d="M8 16l8-8"/>',
  moon:'<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
  palette:'<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1.2"/><circle cx="12" cy="8" r="1.2"/><circle cx="16" cy="10" r="1.2"/><path d="M12 12a3 3 0 0 0 3 3h1a2 2 0 0 1 0 4h-4a7 7 0 1 1 0-14"/>'
};
function falakIcon(name){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${FALAK_ICONS[name]||FALAK_ICONS.book}</svg>`; }
function falakStars(n){ let s=''; for(let i=0;i<5;i++) s += i<n ? '★' : '☆'; return s; }
function falakInitials(name){ return name.split(' ').slice(0,2).map(w=>w[0]).join(''); }

const FALAK_NAV = [
  {href:"index.html", ar:"الرئيسية", en:"Home"},
  {href:"books.html", ar:"الكتب", en:"Books"},
  {href:"authors.html", ar:"المؤلفون", en:"Authors"},
  {href:"translators.html", ar:"المترجمون", en:"Translators"},
  {href:"categories.html", ar:"التصنيفات", en:"Categories"},
  {href:"about.html", ar:"من نحن", en:"About Us"},
  {href:"contact.html", ar:"تواصل معنا", en:"Contact Us"},
];

let falakCurrentLang = 'ar';
function falakSetLang(lang){
  falakCurrentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  document.body.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('[data-ar][data-en]').forEach(el=>{
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ar;
  });
  document.querySelectorAll('[data-ar-ph][data-en-ph]').forEach(el=>{
    el.placeholder = lang === 'en' ? el.dataset.enPh : el.dataset.arPh;
  });
  const btn = document.getElementById('langSwitch');
  if(btn) btn.innerHTML = lang === 'ar' ? 'EN <span>🇬🇧</span>' : 'AR <span>🇦🇪</span>';
}

function falakLogoSVG(){
  return `<svg viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="12" stroke="#D4AF37" stroke-width="1" stroke-dasharray="2 3"/><circle cx="13" cy="6" r="2" fill="#E8C66A"/></svg>`;
}

function renderHeader(activeHref){
  const el = document.getElementById('site-header');
  if(!el) return;
  el.innerHTML = `
  <div class="nav-inner">
    <a href="index.html" class="logo">${falakLogoSVG()}<span data-ar="فلك" data-en="FALAK">فلك</span></a>
    <nav class="links">
      ${FALAK_NAV.map(n=>`<a href="${n.href}" class="${activeHref===n.href.split('#')[0] ? 'active':''}" data-ar="${n.ar}" data-en="${n.en}">${n.ar}</a>`).join('')}
    </nav>
    <div class="nav-actions">
      <button class="icon-btn" id="searchBtn" aria-label="بحث">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      </button>
      <button class="icon-btn" aria-label="المفضلة">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.6-9.5-9C.7 8.4 2.6 4.6 6.2 4c2-.3 3.9.6 5 2.2C12.3 4.6 14.2 3.7 16.2 4c3.6.6 5.5 4.4 3.7 8-2.5 4.4-9.5 9-9.5 9z"/></svg>
      </button>
      <button class="lang-switch" id="langSwitch">EN <span>🇬🇧</span></button>
      <a href="login.html" class="btn-ghost-nav" data-ar="دخول" data-en="Login">دخول</a>
      <a href="register.html" class="ribbon-btn" style="position:relative; top:-2px;" data-ar="تسجيل" data-en="Register">تسجيل</a>
      <button class="burger" id="burgerBtn" aria-label="القائمة">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>
  <div class="mobile-panel" id="mobilePanel">
    ${FALAK_NAV.map(n=>`<a href="${n.href}" data-ar="${n.ar}" data-en="${n.en}">${n.ar}</a>`).join('')}
    <a href="login.html" data-ar="دخول" data-en="Login">دخول</a>
    <a href="register.html" data-ar="تسجيل حساب جديد" data-en="Create account">تسجيل حساب جديد</a>
  </div>`;

  document.getElementById('burgerBtn').addEventListener('click', ()=>{
    document.getElementById('mobilePanel').classList.toggle('open');
  });
  document.getElementById('langSwitch').addEventListener('click', ()=>{
    falakSetLang(falakCurrentLang === 'ar' ? 'en' : 'ar');
  });
}

function renderFooter(){
  const el = document.getElementById('site-footer');
  if(!el) return;
  el.innerHTML = `
  <div class="wrap" style="text-align:center; padding-bottom:36px; border-bottom:1px solid rgba(255,255,255,.08); margin-bottom:36px;">
    <div style="font-family:var(--font); font-weight:800; font-size:18px; margin-bottom:10px;" data-ar="خلّينا نكون أصدقاء" data-en="Let's be friends">خلّينا نكون أصدقاء</div>
    <div class="footer-news">
      <input type="email" class="latin" placeholder="you@example.com">
      <button class="btn-primary btn-sm" style="white-space:nowrap;" data-ar="اشترك" data-en="Subscribe">اشترك</button>
    </div>
  </div>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="logo" style="color:var(--cream); margin-bottom:14px;">${falakLogoSVG()}<span data-ar="فلك" data-en="FALAK">فلك</span></div>
        <p data-ar="دار نشر إماراتية تصل القارئ بعوالم جديدة، كتابًا تلو الآخر — تأليفًا وترجمة، بالعربية والإنجليزية." data-en="An Emirati publishing house connecting readers to new worlds, one book at a time — original works and translations, in Arabic and English.">دار نشر إماراتية تصل القارئ بعوالم جديدة، كتابًا تلو الآخر — تأليفًا وترجمة، بالعربية والإنجليزية.</p>
      </div>
      <div>
        <h4 data-ar="روابط سريعة" data-en="Quick Links">روابط سريعة</h4>
        <ul>
          <li><a href="books.html" data-ar="الكتب" data-en="Books">الكتب</a></li>
          <li><a href="authors.html" data-ar="المؤلفون" data-en="Authors">المؤلفون</a></li>
          <li><a href="translators.html" data-ar="المترجمون" data-en="Translators">المترجمون</a></li>
          <li><a href="about.html" data-ar="من نحن" data-en="About Us">من نحن</a></li>
          <li><a href="contact.html" data-ar="تواصل معنا" data-en="Contact Us">تواصل معنا</a></li>
        </ul>
      </div>
      <div>
        <h4 data-ar="تواصل" data-en="Contact">تواصل</h4>
        <ul>
          <li data-ar="أبوظبي، الإمارات العربية المتحدة" data-en="Abu Dhabi, United Arab Emirates">أبوظبي، الإمارات العربية المتحدة</li>
          <li class="latin">hello@falak-books.ae</li>
          <li class="latin">+971 2 123 4567</li>
        </ul>
      </div>
      <div>
        <h4 data-ar="تابعنا" data-en="Follow Us">تابعنا</h4>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">X</a></li>
          <li><a href="#">Goodreads</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span data-ar="© 2026 دار فلك للنشر. جميع الحقوق محفوظة." data-en="© 2026 Falak Publishing House. All rights reserved.">© 2026 دار فلك للنشر. جميع الحقوق محفوظة.</span>
      <span data-ar="الخصوصية · الشروط" data-en="Privacy · Terms">الخصوصية · الشروط</span>
    </div>
  </div>`;
}

function renderSearchOverlay(){
  const body = document.body;
  const div = document.createElement('div');
  div.className = 'search-overlay';
  div.id = 'searchOverlay';
  div.innerHTML = `
    <button class="search-close" id="searchClose">&times;</button>
    <div class="search-box">
      <input id="searchInput" type="text" placeholder="ابحث عن كتاب، مؤلف، مترجم، تصنيف…" data-ar-ph="ابحث عن كتاب، مؤلف، مترجم، تصنيف…" data-en-ph="Search books, authors, translators, categories…">
      <div class="search-results" id="searchResults"></div>
    </div>`;
  body.appendChild(div);

  function renderResults(q){
    const query = q.trim();
    let matches = FALAK_SEARCH_INDEX;
    if(query) matches = FALAK_SEARCH_INDEX.filter(i => i.title.includes(query));
    const results = document.getElementById('searchResults');
    if(matches.length === 0){
      results.innerHTML = `<div class="search-empty">لا توجد نتائج، جرّب كلمة أخرى.</div>`;
      return;
    }
    results.innerHTML = matches.slice(0,8).map(m => `
      <a class="search-item" href="${m.href}">
        <div class="stype">${m.type[0]}</div>
        <div><div class="stitle">${m.title}</div><div class="ssub">${m.type}</div></div>
      </a>`).join('');
  }

  document.getElementById('searchBtn')?.addEventListener('click', ()=>{
    div.classList.add('open');
    document.getElementById('searchInput').focus();
    renderResults('');
  });
  document.getElementById('searchClose').addEventListener('click', ()=> div.classList.remove('open'));
  div.addEventListener('click', (e)=>{ if(e.target===div) div.classList.remove('open'); });
  document.getElementById('searchInput').addEventListener('input', (e)=> renderResults(e.target.value));
}

function falakInitPage(activeHref){
  renderHeader(activeHref);
  renderFooter();
  renderSearchOverlay();
}
