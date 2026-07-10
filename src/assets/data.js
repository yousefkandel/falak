/* ============ FALAK — بيانات مشتركة لكل صفحات الموقع ============ */

const FALAK_CATEGORIES = [
  {id:"c1", name:"روايات عربية", icon:"book", count:64},
  {id:"c2", name:"كتب مترجمة", icon:"orbit", count:41},
  {id:"c3", name:"أدب الأطفال", icon:"star", count:23},
  {id:"c4", name:"التاريخ", icon:"scroll", count:19},
  {id:"c5", name:"العلوم", icon:"orbit", count:15},
  {id:"c6", name:"تطوير الذات", icon:"compass", count:28},
  {id:"c7", name:"الشعر", icon:"feather", count:17},
  {id:"c8", name:"كتب دينية", icon:"moon", count:12},
  {id:"c9", name:"الفن والتصميم", icon:"palette", count:9},
  {id:"c10", name:"سير ذاتية", icon:"book", count:14},
];

const FALAK_AUTHORS = [
  {id:"a1", name:"ليلى ناصر", role:"روائية", bio:"روائية إماراتية تكتب عن الذاكرة والمسافة والبيوت التي نتركها خلفنا.", bioLong:"بدأت ليلى ناصر الكتابة في أبوظبي قبل خمسة عشر عامًا، وتُعرف بأسلوبها الهادئ في تناول موضوعات الغياب والانتماء. صدر لها حتى الآن ست روايات، تُرجمت اثنتان منها إلى الإنجليزية، وحازت روايتها «المدار الصامت» على استحسان نقدي واسع.", books:6, photoTint:"purple"},
  {id:"a2", name:"عمر فتحي", role:"شاعر", bio:"شاعر إماراتي، ديوانه «أطلس الضوء» من أكثر الدواوين قراءة هذا العام.", bioLong:"يكتب عمر فتحي شعرًا يمزج بين المفردة الصوفية والصورة المعاصرة. نشر أربعة دواوين، ويُقيم ورش كتابة شعرية دورية بالتعاون مع دار فلك.", books:4, photoTint:"space"},
  {id:"a3", name:"يوسف كمال", role:"كاتب خيال علمي", bio:"يكتب خيالًا علميًا عربيًا يدور بين النجوم والمدن المستقبلية.", bioLong:"مهندس سابق تحوّل إلى الكتابة الروائية، يوسف كمال من الأصوات القليلة التي تكتب الخيال العلمي بالعربية بجدية بحثية، وتُرجمت روايته «رسائل إلى أندروميدا» إلى الإنجليزية.", books:3, photoTint:"midnight"},
  {id:"a4", name:"سلمى عادل", role:"كاتبة أطفال", bio:"تكتب قصصًا مصورة للأطفال عن الفضاء والاكتشاف.", bioLong:"سلمى عادل كاتبة ورسامة إماراتية، تصدر سلسلتها «خريطة السماء» للأطفال بنسختين عربية وإنجليزية في آن واحد.", books:5, photoTint:"purple"},
  {id:"a5", name:"كريم نجيب", role:"روائي", bio:"روايته «الكوكبة الأخيرة» صدرت هذا العام بنسختين عربية وإنجليزية.", bioLong:"كريم نجيب كاتب من جيل الروائيين الشباب في الإمارات، يهتم بموضوعات الهوية والانتماء في زمن التغير المناخي والسفر بين المدن.", books:3, photoTint:"space"},
];

const FALAK_TRANSLATORS = [
  {id:"t1", name:"نورهان سعيد", role:"مترجمة", bio:"تترجم الأدب العربي إلى الإنجليزية بعناية بالإيقاع والصوت الأصلي.", bioLong:"نورهان سعيد مترجمة أدبية مقيمة في دبي، عملت على ترجمة اثني عشر عملاً من العربية إلى الإنجليزية، أبرزها «The Silent Orbit» و«Letters to Andromeda».", books:12, photoTint:"purple"},
  {id:"t2", name:"ديفيد ويتفيلد", role:"مترجم", bio:"ينقل الشعر والنثر الإنجليزي إلى العربية دون أن يفقد إيقاعه.", bioLong:"مترجم بريطاني مقيم في أبوظبي منذ عشر سنوات، متخصص في ترجمة الشعر المعاصر والنصوص الأدبية القصيرة من الإنجليزية إلى العربية.", books:9, photoTint:"midnight"},
  {id:"t3", name:"رنا عدلي", role:"مترجمة", bio:"متخصصة في ترجمة كتب الأطفال والإصدارات المصورة في الاتجاهين.", bioLong:"رنا عدلي مترجمة إماراتية تعمل مع دار فلك منذ تأسيسها، وتشرف على تعريب وتعريب سلسلة «خريطة السماء» للأطفال بنسختيها.", books:15, photoTint:"purple"},
];

/*
  language: "عربي" | "إنجليزي" | "عربي/إنجليزي"  (تُستخدم كشارة على الغلاف)
  editions: إن وُجدت نسخة بلغتين لنفس الكتاب — عنوان ووصف كل نسخة، مع تحديد
  أيهما الأصل وأيهما الترجمة عبر originalLang.
*/
const FALAK_BOOKS = [
  {
    id:"b1", title:"المدار الصامت", author:"a1", translator:"t1",
    category:"c1", status:"published", language:"عربي/إنجليزي", originalLang:"عربي",
    rating:5, price:"95 د.إ", pages:312, isbn:"978-1-9998-4471-2", published:"2025",
    tint:"purple",
    editions:{
      ar:{title:"المدار الصامت", desc:"ترث راسمة خرائط النجوم الميتة مرصد جدتها، ومخطوطة تعيد كتابة نفسها في ضوء القمر. رواية هادئة موجعة عن الخرائط التي نرسمها لنجد طريقنا إلى البيت."},
      en:{title:"The Silent Orbit", desc:"A cartographer of dead stars inherits her grandmother's observatory — and a manuscript that rewrites itself by moonlight. A quiet novel about the maps we draw to find our way home."}
    }
  },
  {
    id:"b2", title:"أطلس الضوء", author:"a2", translator:null,
    category:"c7", status:"published", language:"عربي", originalLang:"عربي",
    rating:4, price:"70 د.إ", pages:140, isbn:"978-1-9998-4472-9", published:"2024",
    tint:"midnight",
    editions:{ ar:{title:"أطلس الضوء", desc:"ديوان يرسم خريطة صوفية للضوء، من فجر المدينة إلى عتمة الصحراء، بلغة مكثفة قريبة من الصمت."} }
  },
  {
    id:"b3", title:"رسائل إلى أندروميدا", author:"a3", translator:"t1",
    category:"c1", status:"published", language:"عربي/إنجليزي", originalLang:"عربي",
    rating:5, price:"105 د.إ", pages:288, isbn:"978-1-9998-4473-6", published:"2025",
    tint:"space",
    editions:{
      ar:{title:"رسائل إلى أندروميدا", desc:"رواية خيال علمي تدور أحداثها في محطة فضائية عربية مهجورة، حيث يكتشف طاقمها الأخير رسائل من مستقبل لم يحدث بعد."},
      en:{title:"Letters to Andromeda", desc:"A speculative novel set aboard an abandoned Arab space station, where the last crew discovers letters from a future that hasn't happened yet."}
    }
  },
  {
    id:"b4", title:"خريطة السماء", author:"a4", translator:"t3",
    category:"c3", status:"published", language:"عربي/إنجليزي", originalLang:"عربي",
    rating:4, price:"55 د.إ", pages:48, isbn:"978-1-9998-4474-3", published:"2025",
    tint:"purple",
    editions:{
      ar:{title:"خريطة السماء", desc:"قصة مصورة للأطفال عن فتاة صغيرة ترسم خريطة للنجوم لتجد طريق العودة إلى بيتها بعد رحلة مدرسية طويلة."},
      en:{title:"Sky Map", desc:"An illustrated children's story about a young girl who draws a map of the stars to find her way home after a long school trip."}
    }
  },
  {
    id:"b5", title:"الكوكبة الأخيرة", author:"a5", translator:"t2",
    category:"c1", status:"published", language:"عربي/إنجليزي", originalLang:"إنجليزي",
    rating:5, price:"98 د.إ", pages:264, isbn:"978-1-9998-4475-0", published:"2026",
    tint:"space",
    editions:{
      en:{title:"The Last Constellation", desc:"A novel about a family scattered across three cities, held together only by the star charts their grandfather once drew by hand."},
      ar:{title:"الكوكبة الأخيرة", desc:"رواية عن عائلة تتوزع بين ثلاث مدن، لا يجمعها سوى خرائط النجوم التي رسمها جدهم بيده يومًا."}
    }
  },
  {
    id:"b6", title:"مدارات الذاكرة", author:"a1", translator:null,
    category:"c1", status:"new", language:"عربي", originalLang:"عربي",
    rating:4, price:"80 د.إ", pages:210, isbn:"978-1-9998-4476-7", published:"يونيو 2026",
    tint:"midnight",
    editions:{ ar:{title:"مدارات الذاكرة", desc:"مجموعة قصصية عن اللحظات الصغيرة التي تبقى معنا أطول مما ينبغي."} }
  },
  {
    id:"b7", title:"بين سماءين", author:"a5", translator:"t2",
    category:"c1", status:"new", language:"عربي/إنجليزي", originalLang:"إنجليزي",
    rating:0, price:"88 د.إ", pages:198, isbn:"978-1-9998-4477-4", published:"مايو 2026",
    tint:"purple",
    editions:{
      en:{title:"Between Two Skies", desc:"A short novel about two brothers navigating grief across borders and time zones."},
      ar:{title:"بين سماءين", desc:"رواية قصيرة عن أخوين يتقاسمان الحزن عبر حدود وتوقيتات مختلفة."}
    }
  },
  {
    id:"b8", title:"سديم من ورق", author:"a2", translator:null,
    category:"c7", status:"new", language:"عربي", originalLang:"عربي",
    rating:0, price:"65 د.إ", pages:120, isbn:"978-1-9998-4478-1", published:"مايو 2026",
    tint:"space",
    editions:{ ar:{title:"سديم من ورق", desc:"ديوان شعري عن المدن التي نحملها في حقائبنا أينما ذهبنا."} }
  },
  {
    id:"b9", title:"المذنّب الهادئ", author:"a1", translator:"t1",
    category:"c1", status:"soon", language:"عربي/إنجليزي", originalLang:"عربي",
    rating:0, price:"—", pages:0, isbn:"—", published:"سبتمبر 2026",
    tint:"purple",
    editions:{ ar:{title:"المذنّب الهادئ", desc:"رواية قادمة لليلى ناصر عن مدينة ساحلية ينتظر أهلها مذنبًا لا يأتي أبدًا."} }
  },
  {
    id:"b10", title:"حبر وضوء النجوم", author:"a2", translator:null,
    category:"c7", status:"soon", language:"عربي", originalLang:"عربي",
    rating:0, price:"—", pages:0, isbn:"—", published:"أكتوبر 2026",
    tint:"midnight",
    editions:{ ar:{title:"حبر وضوء النجوم", desc:"ديوان قادم لعمر فتحي، امتداد لعالم «أطلس الضوء»."} }
  },
  {
    id:"b11", title:"سماء القارئ", author:"a4", translator:"t3",
    category:"c3", status:"soon", language:"عربي/إنجليزي", originalLang:"عربي",
    rating:0, price:"—", pages:0, isbn:"—", published:"نوفمبر 2026",
    tint:"space",
    editions:{ ar:{title:"سماء القارئ", desc:"الجزء الثاني من سلسلة «خريطة السماء» للأطفال."} }
  },
  {
    id:"b12", title:"ظل المكتبة", author:"a3", translator:null,
    category:"c4", status:"published", language:"عربي", originalLang:"عربي",
    rating:4, price:"60 د.إ", pages:176, isbn:"978-1-9998-4479-8", published:"2023",
    tint:"purple",
    editions:{ ar:{title:"ظل المكتبة", desc:"مقالات عن تاريخ المكتبات العربية القديمة وأثرها في تشكيل المعرفة."} }
  },
];

const FALAK_TESTIMONIALS = [
  {text:"ترجمات فلك تبدو وكأنها كُتبت بالعربية من البداية.", name:"منى ك."},
  {text:"أجمل الكتب طباعةً على رفّي بلا منازع.", name:"طارق س."},
  {text:"أكتشف مؤلفًا لم أكن لأجده لولا فلك، كل شهر.", name:"يارا م."},
];

const FALAK_QUOTE = {
  text:"الكتاب خريطة نجوم للعقل، تختار صفحة فتختار وجهة.",
  attr:"ليلى ناصر", sub:"من رواية «المدار الصامت»"
};

/* ---------- fهرس بحث ---------- */
const FALAK_SEARCH_INDEX = [
  ...FALAK_BOOKS.map(b=>({type:"كتاب", title:b.title, id:b.id, href:"book.html?id="+b.id})),
  ...FALAK_AUTHORS.map(a=>({type:"مؤلف", title:a.name, id:a.id, href:"author.html?id="+a.id})),
  ...FALAK_TRANSLATORS.map(t=>({type:"مترجم", title:t.name, id:t.id, href:"translator.html?id="+t.id})),
  ...FALAK_CATEGORIES.map(c=>({type:"تصنيف", title:c.name, id:c.id, href:"books.html?category="+c.id})),
];

function falakAuthorName(id){ const a = FALAK_AUTHORS.find(x=>x.id===id); return a ? a.name : ""; }
function falakTranslatorName(id){ const t = FALAK_TRANSLATORS.find(x=>x.id===id); return t ? t.name : ""; }
function falakCategoryName(id){ const c = FALAK_CATEGORIES.find(x=>x.id===id); return c ? c.name : ""; }
function falakTint(name){
  const map = {purple:"linear-gradient(160deg,#4B3F72,#0B1F3A)", midnight:"linear-gradient(160deg,#13294B,#4B3F72)", space:"linear-gradient(160deg,#0B1F3A,#13294B)"};
  return map[name] || map.purple;
}
