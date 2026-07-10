import "../../assets/style.css";
import heroImage from "../../assets/c797f9cd-ee39-4c1c-a87b-2cd8e784d6f2-removebg-preview.png";
/* مولّد أرقام عشوائية ثابت (نفس النتيجة في كل مرة، بدون مشاكل hydration) */
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CENTER = { x: 600, y: 330 };
const RING_COUNT = 300;
const RING_STEP = 30;

function buildRings() {
  return Array.from({ length: RING_COUNT }, (_, i) => 90 + i * RING_STEP);
}

function buildDots() {
  const rand = mulberry32(42);
  const rings = buildRings();
  const dots = [];
  rings.forEach((r) => {
    const dotsOnRing = 5 + Math.floor(rand() * 3);
    for (let i = 0; i < dotsOnRing; i++) {
      const angle = rand() * Math.PI * 2;
      const jitter = (rand() - 0.5) * 6;
      const size = rand() < 0.15 ? 4.5 + rand() * 2 : 1.2 + rand() * 2.4;
      dots.push({
        cx: CENTER.x + Math.cos(angle) * (r + jitter),
        cy: CENTER.y + Math.sin(angle) * (r + jitter),
        r: size,
        gold: rand() < 0.25,
      });
    }
  });
  return dots;
}

const RINGS = buildRings();
const DOTS = buildDots();

function OrbitField() {
  return (
    <svg className="hero-orbits" viewBox="0 0 1200 660" preserveAspectRatio="xMidYMid slice">
      {RINGS.map((r, i) => (
        <circle key={i} className="ring" cx={CENTER.x} cy={CENTER.y} r={r} />
      ))}
      {DOTS.map((d, i) => (
        <circle
          key={i}
          className={`dot ${d.gold ? "gold" : ""}`}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-cosmic">
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />
      <OrbitField />

      <div className="hero-mist">
        <div className="m m1" />
        <div className="m m2" />
        <div className="m m3" />
      </div>

      <div className="hero-content">
        <h1>   نَسِيرُ فِي فَلَكِ الْكُتُبِ، حَيْثُ لَا نِهَايَةَ لِلشَّغَفِ</h1>
        <p>فلك تُصدر وتترجم الكتب بين العربية والإنجليزية — كل كتاب هنا كون صغير، وكل قارئ يستحق خريطة واضحة فيه.</p>
        <div className="hero-ctas">
          <a href="/books" className="btn-primary">تصفّح الكتب</a>
          <a href="/about" className="btn-outline-dark">قصة فلك</a>
        </div>
      </div>
      {/* <img src={heroImage} alt="Hero" /> */}
    </section>
  );
}
