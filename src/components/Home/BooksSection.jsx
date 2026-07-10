import { useState } from "react";
import "../../assets/style.css";
import heroImage from "../../assets/226381619.jpg";
import heroImage1 from "../../assets/images.jpg";

/* ============================================================
   بيانات الكتب — كل كتاب بنسختين: عربي وإنجليزي
   ============================================================ */
const BOOKS = [
  {
    id: "silent-orbit",
    variant: "grape",
    en: {
      eyebrow: "ENGLISH EDITION",
      title: "Days at the Torunka Café",
      cover: heroImage,
      author: "Layla Marzouk",
      translator: "Omar Nabil",
      category: "Literary Fiction",
      pages: "312",
      language: "English",
      description:
        "From the internationally bestselling author of the Morisaki Bookshop novels comes a charming and poignant story about a small café where strangers' broken lives quietly begin to mend.",
      soon: false,
    },
    ar: {
      eyebrow: "النسخة العربية",
      title: "أيام في مقهى تورونكا",
      cover: heroImage1,
      author: "ليلى مرزوق",
      translator: null,
      category: "أدب روائي",
      pages: "٣١٢",
      language: "العربية — النسخة الأصلية",
      description:
        "في زقاق هادئ من طوكيو، يقف هذا المقهى الصغير كملاذ لمن أثقلتهم الأيام. هنا تتقاطع مصائر غرباء يحمل كل منهم قصة لم تُروَ بعد: قلب مكسور، وداع لم يكتمل، أو حلم يرفض أن يموت.",
      soon: false,
    },
  },
  {
    id: "quiet-comet",
    variant: "orchid",
    en: {
      eyebrow: "ENGLISH EDITION",
      title: "The Quiet Comet",
      cover: null,
      author: "Ahmad Rashed",
      translator: "In progress",
      category: "Fiction",
      pages: "—",
      language: "English — translation underway",
      description: "Translation in progress — stay tuned.",
      soon: true,
    },
    ar: {
      eyebrow: "النسخة العربية",
      title: "المذنّب الهادئ",
      cover: null,
      author: "أحمد راشد",
      translator: null,
      category: "خيال",
      pages: "٢٨٠",
      language: "العربية — النسخة الأصلية",
      description:
        "رواية قادمة عن مدينة ساحلية ينتظر أهلها مذنبًا لا يأتي أبدًا.",
      soon: false,
    },
  },
];

const DESC_LIMIT = 100;

function truncate(text, limit = DESC_LIMIT) {
  if (!text) return "";
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + "…";
}

/* ============================================================
   غلاف الكتاب — ياخد مقاس الكارد بالظبط (object-fit: cover)
   ============================================================ */
function BookCover({ title, soon, cover }) {
  return (
    <div className={`fk-cover ${soon ? "fk-cover--soon" : ""}`}>
      {cover ? (
        <img src={cover} alt={title} className="fk-cover-image" />
      ) : (
        <div className="fk-cover-inner">
          <svg className="fk-cover-orbits" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice">
            <ellipse cx="100" cy="150" rx="70" ry="34" />
            <ellipse cx="100" cy="150" rx="70" ry="34" transform="rotate(55 100 150)" />
            <ellipse cx="100" cy="150" rx="70" ry="34" transform="rotate(-55 100 150)" />
          </svg>
          {soon ? (
            <span className="fk-cover-soon">SOON</span>
          ) : (
            <span className="fk-cover-title">{title}</span>
          )}
        </div>
      )}

      <span className="fk-cover-star" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}

/* ============================================================
   صف بيانات وصفية صغير (تصنيف / صفحات / لغة ...)
   ============================================================ */
function MetaRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="fk-meta-row">
      <span className="fk-meta-label">{label}</span>
      <span className="fk-meta-value">{value}</span>
    </div>
  );
}

/* ============================================================
   نصف الكتاب (عربي أو إنجليزي)
   ============================================================ */
function BookHalf({ data, lang, align, onOpen }) {
  const isAr = lang === "ar";
  const labels = isAr
    ? { author: "المؤلف", translator: "المترجم", category: "القسم", pages: "عدد الصفحات", language: "اللغة", more: "اقرأ المزيد" }
    : { author: "Author", translator: "Translator", category: "Category", pages: "Pages", language: "Language", more: "Read more" };

  const isLong = data.description && data.description.length > DESC_LIMIT;

  return (
    <div className={`fk-half fk-half--${align}`} dir={isAr ? "rtl" : "ltr"}>
      <BookCover title={data.title} soon={data.soon} cover={data.cover} />

      <div className="fk-details">
        <span className="fk-eyebrow">{data.eyebrow}</span>
        <h3 className="fk-title">{data.title}</h3>
        <p className="fk-desc">{truncate(data.description)}</p>

        {isLong && (
          <button type="button" className="fk-readmore" onClick={() => onOpen(data, isAr, labels)}>
            {labels.more}
          </button>
        )}

        {!data.soon && (
          <div className="fk-meta">
            <MetaRow label={labels.author} value={data.author} />
            <MetaRow label={labels.translator} value={data.translator} />
            <MetaRow label={labels.category} value={data.category} />
            <MetaRow label={labels.pages} value={data.pages} />
            <MetaRow label={labels.language} value={data.language} />
          </div>
        )}

        {data.soon && (
          <div className="fk-meta fk-meta--soon">
            <MetaRow label={labels.translator} value={data.translator} />
            <MetaRow label={labels.language} value={data.language} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   بطاقة كتاب كاملة (النسختين جنب بعض)
   ============================================================ */
function BookCard({ book, onOpen }) {
  return (
    <article className={`fk-card fk-card--${book.variant}`}>
      <div className="fk-card-row">
        <BookHalf data={book.en} lang="en" align="start" onOpen={onOpen} />
        <div className="fk-divider" aria-hidden="true" />
        <BookHalf data={book.ar} lang="ar" align="end" onOpen={onOpen} />
      </div>
    </article>
  );
}

/* ============================================================
   نافذة عرض النص كامل (صفحة العرض)
   ============================================================ */
function BookModal({ active, onClose }) {
  if (!active) return null;
  const { data, isAr, labels } = active;

  return (
    <div className="fk-modal-overlay" onClick={onClose}>
      <div className="fk-modal" dir={isAr ? "rtl" : "ltr"} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="fk-modal-close" onClick={onClose} aria-label="close">
          ×
        </button>

        {data.cover && (
          <div className="fk-modal-cover">
            <img src={data.cover} alt={data.title} />
          </div>
        )}

        <div className="fk-modal-body">
          <span className="fk-eyebrow">{data.eyebrow}</span>
          <h3 className="fk-title">{data.title}</h3>
          <p className="fk-desc fk-desc--full">{data.description}</p>

          {!data.soon && (
            <div className="fk-meta">
              <MetaRow label={labels.author} value={data.author} />
              <MetaRow label={labels.translator} value={data.translator} />
              <MetaRow label={labels.category} value={data.category} />
              <MetaRow label={labels.pages} value={data.pages} />
              <MetaRow label={labels.language} value={data.language} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   القسم الرئيسي
   ============================================================ */
export default function BooksSection() {
  const [active, setActive] = useState(null);

  const openModal = (data, isAr, labels) => setActive({ data, isAr, labels });
  const closeModal = () => setActive(null);

  return (
    <section className="fk-books">
      {BOOKS.map((book) => (
        <BookCard key={book.id} book={book} onOpen={openModal} />
      ))}

      <BookModal active={active} onClose={closeModal} />
    </section>
  );
}
