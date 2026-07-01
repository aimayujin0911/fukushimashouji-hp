// Hero pattern variations — different top-of-page treatments using REAL photos
// at their native aspect ratio (no cropping). 8 directions ranging from
// シネマティック → おしゃれ → 親しみやすい.

// Native-ratio image: never crops. width:100% sets the bound; height:auto
// preserves the photo's intrinsic aspect ratio.
const NaturalImg = ({ src, alt = '', style = {} }) => (
  <img src={`${ASSETS}/${src}`} alt={alt} style={{ display:'block', width:'100%', height:'auto', ...style }} />
);
const ContainedImg = ({ src, alt = '', style = {} }) => (
  <img src={`${ASSETS}/${src}`} alt={alt} style={{ display:'block', maxWidth:'100%', maxHeight:'100%', width:'auto', height:'auto', objectFit:'contain', ...style }} />
);

const NavBar = ({ dark = false }) => {
  const c = dark ? '#fff' : BRAND.ink;
  return (
    <nav style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 48px', color: c }}>
      <Logo variant="small" height={30} style={dark ? { filter:'brightness(0) invert(1)' } : {}} />
      <div style={{ display:'flex', gap: 28, fontSize: 13, letterSpacing:'0.08em' }}>
        {NAV.map(x => <span key={x}>{x}</span>)}
      </div>
      <button style={{ background: BRAND.red, color:'#fff', border:'none', padding:'10px 22px', fontSize: 12, letterSpacing:'0.14em', fontFamily:'inherit' }}>お問い合わせ →</button>
    </nav>
  );
};

const Eyebrow = ({ children, color = BRAND.red }) => (
  <div style={{ fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.36em', textTransform:'uppercase', fontWeight: 700, color }}>{children}</div>
);

// ─── Pattern 01 · CINEMATIC LETTERBOX ────────────────────────────────────
// Black canvas. Photo sits in its native ratio, letterboxed.
// Copy lives below the image, never on top — so the photo is untouched.
const HeroP1Cinematic = () => (
  <ABFrame bg="#0a0a0b">
    <div style={{ width:'100%', background:'#0a0a0b', color:'#fff', fontFamily:'"Zen Kaku Gothic New", sans-serif', paddingBottom: 48 }}>
      <NavBar dark />
      <div style={{ padding:'8px 48px 24px', display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <Eyebrow color={BRAND.red}>○ Pattern 01 / Cinematic</Eyebrow>
        <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 14, color:'#888' }}>Est. {COMPANY.estYear} — A trucking house</div>
      </div>
      <div style={{ padding:'0 48px' }}>
        <NaturalImg src="photos/recruit-top.jpg" alt="赤いトラック群" />
      </div>
      <div style={{ padding:'40px 48px 0', display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 56, alignItems:'flex-end' }}>
        <h1 style={{ fontFamily:'"Shippori Mincho", serif', fontWeight: 800, fontSize: 112, lineHeight: 0.95, margin: 0, letterSpacing:'-0.01em' }}>
          赤き、<span style={{ color: BRAND.red }}>流儀</span>。
        </h1>
        <div style={{ paddingBottom: 12 }}>
          <p style={{ fontSize: 15, lineHeight: 2.0, opacity: 0.8, margin: 0 }}>
            57台の大型車・ゲート車が、関東一円を走る。<br/>
            プロフェッショナル運び屋集団。
          </p>
          <button style={{ marginTop: 24, background: BRAND.red, color:'#fff', border:'none', padding:'16px 32px', fontSize: 13, letterSpacing:'0.16em' }}>事業内容 →</button>
        </div>
      </div>
    </div>
  </ABFrame>
);

// ─── Pattern 02 · MAGAZINE COVER ─────────────────────────────────────────
// Photo as a portrait-ish card centered on cream, type set around the edges
// like a magazine cover. Image untouched.
const HeroP2Magazine = () => (
  <ABFrame bg={BRAND.cream}>
    <div style={{ width:'100%', background: BRAND.cream, color: BRAND.ink, fontFamily:'"Noto Sans JP", sans-serif', paddingBottom: 56 }}>
      <NavBar />
      <div style={{ padding:'24px 48px 0', display:'grid', gridTemplateColumns:'1fr 720px 1fr', gap: 32, alignItems:'start' }}>
        {/* Left margin — masthead lines */}
        <div style={{ paddingTop: 56, textAlign:'right' }}>
          <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 72, fontWeight: 700, color: BRAND.red, lineHeight: 0.9 }}>F/S</div>
          <Eyebrow>Vol. 26 · 2026</Eyebrow>
          <div style={{ height: 1, background: BRAND.ink, margin:'24px 0', opacity: 0.3 }} />
          <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 14, lineHeight: 1.8, color:'#444' }}>
            プロフェッショナル<br/>運び屋集団。<br/>
            <span style={{ color: BRAND.red }}>—— FUKUSHIMA SHOUJI</span>
          </div>
        </div>

        {/* Center photo card */}
        <div style={{ background:'#fff', padding: 18, boxShadow:'0 30px 80px rgba(60,30,20,0.15)' }}>
          <NaturalImg src="photos/truck-02.jpg" alt="トラック前面" />
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop: 14, paddingBottom: 4 }}>
            <span style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 18 }}>plate № 52-05</span>
            <span style={{ fontFamily:'"Inter", sans-serif', fontSize: 10, letterSpacing:'0.24em', color:'#888' }}>FUKUSHIMASHOUJI</span>
          </div>
        </div>

        {/* Right margin — issue lines */}
        <div style={{ paddingTop: 56 }}>
          <Eyebrow>FEATURE</Eyebrow>
          <h1 style={{ fontFamily:'"Shippori Mincho", serif', fontWeight: 700, fontSize: 56, lineHeight: 1.15, margin:'14px 0 0' }}>
            運ぶことに、<br/><span style={{ color: BRAND.red }}>誇り</span>を。
          </h1>
          <div style={{ height: 1, background: BRAND.ink, margin:'28px 0', opacity: 0.3 }} />
          <div style={{ fontSize: 13, lineHeight: 2.0 }}>
            <div>○ Pattern 02 / Magazine</div>
            <div>○ 57 trucks · 6 offices</div>
            <div>○ G-Mark certified</div>
            <div>○ Est. 2010</div>
          </div>
        </div>
      </div>
    </div>
  </ABFrame>
);

// ─── Pattern 03 · FRIENDLY POLAROID ──────────────────────────────────────
// Warm cream bg, image as a slightly-tilted polaroid with handwriting-ish
// caption. Friendly, approachable. Includes brush logo + people image.
const HeroP3Friendly = () => (
  <ABFrame bg="#fbf5e8">
    <div style={{ width:'100%', background:'#fbf5e8', color: BRAND.ink, fontFamily:'"Zen Kaku Gothic New", sans-serif', paddingBottom: 56 }}>
      <NavBar />
      <div style={{ padding:'40px 56px 0', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 56, alignItems:'center' }}>
        <div>
          <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 14, color: BRAND.red, letterSpacing:'0.3em' }}>こんにちは、福嶋商事です。</div>
          <h1 style={{ fontFamily:'"Shippori Mincho", serif', fontWeight: 600, fontSize: 76, lineHeight: 1.35, margin:'20px 0 0' }}>
            <span style={{ color: BRAND.red }}>赤いトラック</span>と、<br/>
            笑顔で走る<br/>
            62人の仲間。
          </h1>
          <p style={{ fontSize: 16, lineHeight: 2.0, color:'#3a322a', marginTop: 28, maxWidth: 460 }}>
            関東一円、毎日の物流を支えるプロフェッショナル運び屋集団です。<br/>
            ご相談、気軽にお声がけください。
          </p>
          <div style={{ display:'flex', gap: 12, marginTop: 32 }}>
            <button style={{ background: BRAND.ink, color:'#fff', border:'none', padding:'14px 28px', borderRadius: 999, fontSize: 14, fontFamily:'inherit' }}>事業を見る →</button>
            <button style={{ background:'transparent', color: BRAND.ink, border:`1.5px solid ${BRAND.ink}`, padding:'14px 28px', borderRadius: 999, fontSize: 14, fontFamily:'inherit' }}>採用情報</button>
          </div>
        </div>
        <div style={{ position:'relative', height: 540 }}>
          {/* Polaroid 1 */}
          <div style={{ position:'absolute', top: 20, left: 20, padding:'12px 12px 36px', background:'#fff', transform:'rotate(-3deg)', boxShadow:'0 24px 60px rgba(80,40,20,0.18)', width: 360 }}>
            <NaturalImg src="photos/training-kensyu.webp" alt="研修風景" />
            <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 14, color:'#3a322a', marginTop: 10, textAlign:'center' }}>—— 新人研修にて</div>
          </div>
          {/* Polaroid 2 */}
          <div style={{ position:'absolute', bottom: 0, right: 0, padding:'12px 12px 32px', background:'#fff', transform:'rotate(4deg)', boxShadow:'0 24px 60px rgba(80,40,20,0.16)', width: 260 }}>
            <NaturalImg src="photos/vehicle-2.webp" alt="トラック車両" />
            <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 13, color:'#3a322a', marginTop: 8, textAlign:'center' }}>—— 朝のヤード</div>
          </div>
          {/* Sticker */}
          <div style={{ position:'absolute', top: 200, right: 30, width: 110, height: 110, borderRadius:'50%', background: BRAND.red, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', transform:'rotate(-12deg)', boxShadow:'0 12px 30px rgba(185,30,29,0.4)' }}>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 32, fontWeight: 700, lineHeight: 1 }}>since</div>
              <div style={{ fontFamily:'"Bodoni Moda", serif', fontSize: 24, fontWeight: 700 }}>2010</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ABFrame>
);

// ─── Pattern 04 · STYLISH GALLERY ────────────────────────────────────────
// Off-white gallery wall. Multiple native-ratio images in a tasteful grid
// with type breathing around them. おしゃれ / quiet luxury.
const HeroP4Gallery = () => (
  <ABFrame bg="#f7f5f0">
    <div style={{ width:'100%', background:'#f7f5f0', color: BRAND.ink, fontFamily:'"Noto Sans JP", sans-serif', paddingBottom: 64 }}>
      <NavBar />
      <div style={{ padding:'48px 56px 0' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <Eyebrow>○ Pattern 04 / Gallery</Eyebrow>
          <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 14, color:'#888' }}>—— A Quiet Catalogue</div>
        </div>
        <h1 style={{ fontFamily:'"Noto Serif JP", serif', fontWeight: 500, fontSize: 80, lineHeight: 1.2, margin:'24px 0 0', letterSpacing:'0.02em' }}>
          赤を運ぶ、<span style={{ color: BRAND.red, fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 }}>Function</span>。
        </h1>
      </div>
      <div style={{ padding:'56px 56px 0', display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gridTemplateRows:'auto auto', gap: 24, alignItems:'start' }}>
        <div style={{ gridColumn:'1 / 3', gridRow:'1 / 3' }}>
          <NaturalImg src="photos/vehicle-2.webp" alt="" />
          <div style={{ display:'flex', justifyContent:'space-between', marginTop: 12, fontSize: 11, letterSpacing:'0.2em' }}>
            <span style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic' }}>Plate 01</span>
            <span style={{ color:'#888' }}>FUKUSHIMA SHOUJI · 2026</span>
          </div>
        </div>
        <div style={{ gridColumn:'3 / 4' }}>
          <NaturalImg src="photos/IMG_1461.jpeg" alt="" />
          <div style={{ marginTop: 12, fontSize: 11, letterSpacing:'0.2em', color:'#888', fontFamily:'"Bodoni Moda", serif', fontStyle:'italic' }}>Warehouse · 02</div>
        </div>
        <div style={{ gridColumn:'4 / 5' }}>
          <NaturalImg src="photos/office-kawaguchi.webp" alt="" />
          <div style={{ marginTop: 12, fontSize: 11, letterSpacing:'0.2em', color:'#888', fontFamily:'"Bodoni Moda", serif', fontStyle:'italic' }}>HQ · Kawaguchi</div>
        </div>
        <div style={{ gridColumn:'3 / 5', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 20, alignItems:'center', paddingTop: 12 }}>
          <p style={{ fontSize: 14, lineHeight: 2.0, color:'#333', margin: 0 }}>
            創業2010年。57台の大型車・ゲート車と、6つの拠点。
            関東一円の物流を、機能と誇りで支えています。
          </p>
          <button style={{ background:'transparent', color: BRAND.ink, border:`1px solid ${BRAND.ink}`, padding:'14px 24px', fontSize: 12, letterSpacing:'0.16em', fontFamily:'inherit', justifySelf:'end' }}>VIEW THE INDEX →</button>
        </div>
      </div>
    </div>
  </ABFrame>
);

// ─── Pattern 05 · BRUSH-LOGO HERO ────────────────────────────────────────
// The brand's red brush calligraphy logo IS the hero. Photo plays a small
// supporting role at native size. Highly branded, distinctive.
const HeroP5Brush = () => (
  <ABFrame bg="#fafaf7">
    <div style={{ width:'100%', background:'#fafaf7', color: BRAND.ink, fontFamily:'"Zen Kaku Gothic New", sans-serif', paddingBottom: 56 }}>
      <NavBar />
      <div style={{ padding:'40px 56px 0', display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 48, alignItems:'center' }}>
        <div>
          <Eyebrow>○ Pattern 05 / The Brush Mark</Eyebrow>
          <Logo variant="large" height={180} style={{ marginTop: 28, marginLeft: -8 }} />
          <div style={{ display:'flex', alignItems:'flex-end', gap: 24, marginTop: 28 }}>
            <h1 style={{ fontFamily:'"Shippori Mincho", serif', fontWeight: 700, fontSize: 60, margin: 0, lineHeight: 1.2 }}>
              プロフェッショナル<br/>運び屋集団。
            </h1>
            <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 16, color: BRAND.red, paddingBottom: 8 }}>
              est. {COMPANY.estYear}<br/>Saitama, Japan
            </div>
          </div>
          <p style={{ fontSize: 15, lineHeight: 2.0, color:'#333', marginTop: 32, maxWidth: 520 }}>
            57台の大型車・ゲート車で、関東一円の「運びたい」を最短距離で形にします。
          </p>
        </div>
        <div>
          <NaturalImg src="photos/vehicle-1.webp" alt="トラック" />
          <div style={{ marginTop: 14, display:'flex', justifyContent:'space-between', fontSize: 11, letterSpacing:'0.2em', color:'#888' }}>
            <span style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic' }}>—— in service</span>
            <span>57 TRUCKS · 6 OFFICES</span>
          </div>
        </div>
      </div>
    </div>
  </ABFrame>
);

// ─── Pattern 06 · SCENIC / MOODY ─────────────────────────────────────────
// Uses the moody mountains shot at native ratio + small accent. おしゃれ /
// editorial, less explicit about trucks — sells the brand vibe.
const HeroP6Scenic = () => (
  <ABFrame bg="#0e1116">
    <div style={{ width:'100%', background:'#0e1116', color:'#fff', fontFamily:'"Noto Sans JP", sans-serif', paddingBottom: 56 }}>
      <NavBar dark />
      <div style={{ padding:'8px 48px 24px', display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <Eyebrow color={BRAND.red}>○ Pattern 06 / Scenic</Eyebrow>
        <span style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 14, color:'#888' }}>—— Beyond the road</span>
      </div>
      <div style={{ padding:'0 48px' }}>
        <NaturalImg src="photos/hero-bg-unsplash.jpg" alt="風景" />
      </div>
      <div style={{ padding:'48px 48px 0', display:'grid', gridTemplateColumns:'1fr auto 1fr', gap: 48, alignItems:'center' }}>
        <div style={{ paddingRight: 24 }}>
          <p style={{ fontSize: 14, lineHeight: 2.0, opacity: 0.7, margin: 0 }}>
            どんな現場の先にも、誰かの暮らしがあり、誰かの仕事がある。<br/>
            私たちは、ただ運んでいるのではない。
          </p>
        </div>
        <div>
          <h1 style={{ fontFamily:'"Shippori Mincho", serif', fontWeight: 700, fontSize: 96, lineHeight: 1, margin: 0, textAlign:'center' }}>
            運ぶ、<span style={{ color: BRAND.red }}>その先へ</span>。
          </h1>
          <div style={{ height: 1, background: BRAND.red, width: 64, margin:'24px auto 0' }} />
        </div>
        <div style={{ textAlign:'right', paddingLeft: 24 }}>
          <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 40, color: BRAND.red, fontWeight: 700 }}>est. 2010</div>
          <div style={{ fontSize: 12, opacity: 0.7, letterSpacing:'0.18em', marginTop: 6 }}>FUKUSHIMA SHOUJI<br/>SAITAMA, JAPAN</div>
        </div>
      </div>
    </div>
  </ABFrame>
);

// ─── Pattern 07 · SPLIT POSTER ───────────────────────────────────────────
// Two natural-ratio images side by side as a poster. Bold red type sandwich.
const HeroP7Poster = () => (
  <ABFrame bg={BRAND.red}>
    <div style={{ width:'100%', background: BRAND.red, color:'#fff', fontFamily:'"Zen Kaku Gothic New", sans-serif', paddingBottom: 56 }}>
      <NavBar dark />
      <div style={{ padding:'24px 48px 0', display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <Eyebrow color="#fff">○ Pattern 07 / Poster</Eyebrow>
        <Eyebrow color="#fff">FUKUSHIMA SHOUJI · 2026</Eyebrow>
      </div>
      <h1 style={{ fontFamily:'"Shippori Mincho", serif', fontWeight: 800, fontSize: 168, lineHeight: 0.95, margin:'24px 48px 0', letterSpacing:'-0.01em' }}>
        運び屋。
      </h1>
      <div style={{ padding:'40px 48px 0', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }}>
        <div style={{ background:'#fff', padding: 14 }}>
          <NaturalImg src="photos/truck-02.jpg" alt="" />
        </div>
        <div style={{ background:'#fff', padding: 14 }}>
          <NaturalImg src="photos/vehicle-1.webp" alt="" />
        </div>
      </div>
      <div style={{ padding:'32px 48px 0', display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <h2 style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 56, margin: 0 }}>
          赤き、流儀。
        </h2>
        <p style={{ fontSize: 14, lineHeight: 2.0, opacity: 0.9, margin: 0, maxWidth: 460, textAlign:'right' }}>
          関東一円、57台の大型車・ゲート車で。<br/>
          {COMPANY.catch1}。
        </p>
      </div>
    </div>
  </ABFrame>
);

// ─── Pattern 08 · NEWSPAPER COLUMN ───────────────────────────────────────
// Densely-set editorial: headline + columned body + native-ratio photo
// flowing like a broadsheet front page. おしゃれ / intellectual.
const HeroP8News = () => (
  <ABFrame bg="#f6f1e3">
    <div style={{ width:'100%', background:'#f6f1e3', color: BRAND.ink, fontFamily:'"Noto Serif JP", serif', paddingBottom: 56 }}>
      <NavBar />
      {/* Masthead */}
      <div style={{ padding:'12px 48px 18px', borderBottom:`3px double ${BRAND.ink}`, marginLeft: 48, marginRight: 48, display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700, fontSize: 80, lineHeight: 1, color: BRAND.red }}>
          THE FUKUSHIMA TIMES
        </div>
        <div style={{ fontSize: 12, color:'#555', letterSpacing:'0.1em' }}>VOL.16 · No.3 ─ 2026.05</div>
      </div>
      <div style={{ padding:'24px 48px 0', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap: 28, alignItems:'start' }}>
        <div>
          <Eyebrow>—— Feature Story</Eyebrow>
          <h1 style={{ fontFamily:'"Shippori Mincho", serif', fontWeight: 700, fontSize: 64, lineHeight: 1.2, margin:'18px 0 0' }}>
            関東一円を、<br/>
            <span style={{ color: BRAND.red }}>57台</span>で走る。
          </h1>
          <div style={{ marginTop: 22 }}>
            <NaturalImg src="photos/recruit-top.jpg" alt="トラック群" />
            <div style={{ fontSize: 11, fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', color:'#666', marginTop: 8, textAlign:'center' }}>— Photo: 福嶋商事 fleet at sunset</div>
          </div>
        </div>
        <div style={{ borderRight:`1px solid ${BRAND.ink}33`, paddingRight: 28, fontSize: 13, lineHeight: 1.9, color:'#222' }}>
          <Eyebrow>—— Lead</Eyebrow>
          <p style={{ marginTop: 14 }}>
            創業から16年。福嶋商事は「運び屋稼業」という意識を貫き、関東一円の物流を支えてきた。<br/>
            大型車・ゲート車57台、6拠点、62名。
          </p>
          <p style={{ marginTop: 14 }}>
            「また頼みたい」と言ってもらえる企業であり続けることを、日々の業務の指針としている。プロとしてお客様の満足を第一に──。
          </p>
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.9, color:'#222' }}>
          <Eyebrow>—— Stats</Eyebrow>
          {[['57','TRUCKS'],['62','STAFF'],['6','OFFICES'],['G','MARK']].map(([n, l]) =>
            <div key={l} style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'8px 0', borderBottom:`1px dashed ${BRAND.ink}33` }}>
              <span style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontSize: 36, fontWeight: 700, color: BRAND.red, lineHeight: 1 }}>{n}</span>
              <span style={{ fontFamily:'"Inter", sans-serif', fontSize: 10, letterSpacing:'0.24em' }}>{l}</span>
            </div>
          )}
          <button style={{ marginTop: 18, width:'100%', background: BRAND.ink, color:'#fff', border:'none', padding:'14px 0', fontSize: 12, letterSpacing:'0.18em', fontFamily:'inherit' }}>CONTINUE →</button>
        </div>
      </div>
    </div>
  </ABFrame>
);

Object.assign(window, { HeroP1Cinematic, HeroP2Magazine, HeroP3Friendly, HeroP4Gallery, HeroP5Brush, HeroP6Scenic, HeroP7Poster, HeroP8News });
