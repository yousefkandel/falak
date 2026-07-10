import { useState, useEffect } from "react";
import "../../assets/style.css";

const NAV_ITEMS = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/books", ar: "الكتب", en: "Books" },
  { href: "/authors", ar: "المؤلفون", en: "Authors" },
  { href: "/translators", ar: "المترجمون", en: "Translators" },
  { href: "/categories", ar: "التصنيفات", en: "Categories" },
  { href: "/about", ar: "من نحن", en: "About Us" },
  { href: "/contact", ar: "تواصل معنا", en: "Contact Us" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="12" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="13" cy="6" r="2" fill="#E8C66A" />
    </svg>
  );
}

export default function Navbar({ activePath = "/" }) {
  const [lang, setLang] = useState("ar");
  const [mobileOpen, setMobileOpen] = useState(false);

  // يحدّث اتجاه ولغة المستند بالكامل عند تبديل اللغة
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (item) => (lang === "ar" ? item.ar : item.en);
  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"));

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="/" className="logo">
          <LogoMark />
          <span>{lang === "ar" ? "فلك" : "FALAK"}</span>
        </a>

        <nav className="links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activePath === item.href ? "active" : ""}
            >
              {t(item)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="بحث">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="المفضلة">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-4.6-9.5-9C.7 8.4 2.6 4.6 6.2 4c2-.3 3.9.6 5 2.2C12.3 4.6 14.2 3.7 16.2 4c3.6.6 5.5 4.4 3.7 8-2.5 4.4-9.5 9-9.5 9z" />
            </svg>
          </button>

          <button className="lang-switch" onClick={toggleLang}>
            {lang === "ar" ? <>EN <span>🇬🇧</span></> : <>AR <span>🇦🇪</span></>}
          </button>

          <a href="/login" className="btn-ghost-nav">
            {lang === "ar" ? "دخول" : "Login"}
          </a>
          <a href="/register" className="ribbon-btn">
            {lang === "ar" ? "تسجيل" : "Register"}
          </a>

          <button
            className="burger"
            aria-label="القائمة"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href}>
            {t(item)}
          </a>
        ))}
        <a href="/login">{lang === "ar" ? "دخول" : "Login"}</a>
        <a href="/register">{lang === "ar" ? "تسجيل حساب جديد" : "Create account"}</a>
      </div>
    </header>
  );
}
