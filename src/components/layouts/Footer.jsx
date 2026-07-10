import { useState } from "react";
import "../../assets/style.css";

/* ============================================================
   أيقونات صغيرة (بدون أي مكتبة خارجية)
   ============================================================ */
function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
      <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
      <path
        d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
      <path
        d="M12 22s7-7.2 7-12.5A7 7 0 0 0 5 9.5C5 14.8 12 22 12 22z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" {...props}>
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconGoodreads(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
      <path
        d="M6 3h9.5A2.5 2.5 0 0 1 18 5.5v15L12 18l-6 2.5v-15A2.5 2.5 0 0 1 6 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   عمود روابط
   ============================================================ */
function FooterColumn({ title, links }) {
  return (
    <div className="fk-foot-col">
      <h4 className="fk-foot-heading">{title}</h4>
      <ul className="fk-foot-links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   الفوتر
   ============================================================ */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  };

  return (
    <footer className="fk-footer">
      <svg className="fk-foot-orbits" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <ellipse cx="1040" cy="90" rx="150" ry="70" />
        <ellipse cx="1040" cy="90" rx="150" ry="70" transform="rotate(55 1040 90)" />
        <ellipse cx="1040" cy="90" rx="150" ry="70" transform="rotate(-55 1040 90)" />
      </svg>

      <div className="fk-foot-inner">
        <div className="fk-foot-top">
          {/* براند */}
          <div className="fk-foot-brand">
            <div className="fk-foot-logo">
              <svg viewBox="0 0 40 40" width="26" height="26" aria-hidden="true">
                <circle cx="20" cy="20" r="7" fill="var(--gold-light)" />
                <ellipse cx="20" cy="20" rx="17" ry="8" fill="none" stroke="var(--gold-light)" strokeWidth="1.2" />
                <ellipse cx="20" cy="20" rx="17" ry="8" fill="none" stroke="var(--gold-light)" strokeWidth="1.2" transform="rotate(60 20 20)" />
                <ellipse cx="20" cy="20" rx="17" ry="8" fill="none" stroke="var(--gold-light)" strokeWidth="1.2" transform="rotate(120 20 20)" />
              </svg>
              <span>فلك</span>
            </div>
            <p className="fk-foot-tagline">
              دار نشر إماراتية تُصدر وتترجم الكتب بين العربية والإنجليزية — كل كتاب هنا كون صغير، وكل قارئ يستحق خريطة واضحة فيه.
            </p>
            <div className="fk-foot-social">
              <a href="#" aria-label="Instagram" className="fk-social-btn"><IconInstagram /></a>
              <a href="#" aria-label="X" className="fk-social-btn"><IconX /></a>
              <a href="#" aria-label="Goodreads" className="fk-social-btn"><IconGoodreads /></a>
            </div>
          </div>

          <FooterColumn
            title="عن الدار"
            links={[
              { label: "من نحن", href: "/about" },
              { label: "قصة فلك", href: "/story" },
              { label: "فريق العمل", href: "/team" },
            ]}
          />

          <FooterColumn
            title="استكشف"
            links={[
              { label: "كل الكتب", href: "/books" },
              { label: "إصدارات جديدة", href: "/books?filter=new" },
              { label: "قريبًا", href: "/books?filter=soon" },
            ]}
          />

          {/* تواصل معنا */}
          <div className="fk-foot-col">
            <h4 className="fk-foot-heading">تواصل معنا</h4>
            <ul className="fk-foot-contact">
              <li>
                <IconMail />
                <a href="mailto:hello@falak-books.com">hello@falak-books.com</a>
              </li>
              <li>
                <IconPhone />
                <a href="tel:+971000000000" dir="ltr">+971 00 000 0000</a>
              </li>
              <li>
                <IconPin />
                <span>دبي، الإمارات العربية المتحدة</span>
              </li>
            </ul>

            <form className="fk-newsletter" onSubmit={handleSubscribe}>
              <label htmlFor="fk-email" className="fk-newsletter-label">
                النشرة البريدية
              </label>
              <div className="fk-newsletter-row">
                <input
                  id="fk-email"
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">اشترك</button>
              </div>
              {sent && <span className="fk-newsletter-note">تم الاشتراك بنجاح، شكرًا لانضمامك.</span>}
            </form>
          </div>
        </div>

        <div className="fk-foot-divider" />

        <div className="fk-foot-bottom">
          <span>© {new Date().getFullYear()} دار فلك للنشر — جميع الحقوق محفوظة</span>
          <div className="fk-foot-legal">
            <a href="/privacy">سياسة الخصوصية</a>
            <a href="/terms">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
