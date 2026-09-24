// C-3 — VELOCITY / 疾走系
// Black + red with motion: diagonal racing stripes, skewed section breaks,
// huge italic Bodoni display, forward slashes. The "speed" reading of C.

const V6Velocity = () => {
  const { red, redDeep } = BRAND;
  const black = '#0b0b0c';
  const silver = '#a6a6ab';

  const v6 = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', lineHeight: 0.92 },
    italic: { fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.4em', fontWeight: 800, textTransform:'uppercase' },
  };

  const stripes = `repeating-linear-gradient(115deg, ${red} 0 14px, transparent 14px 30px)`;

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif', overflow:'hidden' }}>
        {/* Nav */}
        <nav style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 48px' }}>
          <Logo variant="small" height={30} style={{ filter:'brightness(0) invert(1)' }} />
          <div style={{ display:'flex', gap: 30, fontSize: 13, fontWeight: 600, letterSpacing:'0.08em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <button style={{ background: red, color:'#fff', border:'none', padding:'12px 24px', ...v6.italic, fontSize: 15 }}>Contact →</button>
        </nav>

        {/* HERO */}
        <section style={{ position:'relative', height: 760, overflow:'hidden' }}>
          <Img src="photos/recruit-top.jpg" alt="fleet" style={{ position:'absolute', inset: 0, transform:'scale(1.05)' }} />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(75deg, rgba(11,11,12,0.95) 18%, rgba(11,11,12,0.35) 70%)' }} />
          {/* diagonal stripe band */}
          <div style={{ position:'absolute', top: 0, bottom: 0, left: '54%', width: 64, background: stripes, transform:'skewX(-12deg)', opacity: 0.85 }} />

          <div style={{ position:'absolute', top: 36, left: 48, ...v6.eyebrow, color: red }}>○ TEAM IMPUL OFFICIAL SUPPORTER · 2026</div>
          <div style={{ position:'absolute', bottom: 64, left: 48, right: 48 }}>
            <div style={{ ...v6.eyebrow, color:'#fff', opacity: 0.7, marginBottom: 16 }}>Professional Carriers / 大型車・ゲート車</div>
            <h1 style={{ ...v6.h, fontSize: 184, margin: 0, transform:'skewX(-6deg)', transformOrigin:'left' }}>
              止まらない<span style={{ ...v6.italic, color: red, fontSize: 184 }}>赤。</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.9, color:'#dcdcdc', maxWidth: 540, marginTop: 28 }}>
              57台の大型車・ゲート車が、関東一円を駆け抜ける。スピードと正確さで応える、プロフェッショナル運び屋集団。
            </p>
          </div>
        </section>

        {/* Speed ticker band */}
        <div style={{ background: red, transform:'skewY(-1.4deg)', margin:'-2px 0', padding:'2px 0' }}>
          <div style={{ transform:'skewY(1.4deg)', display:'flex', gap: 40, padding:'22px 48px', ...v6.italic, fontSize: 30, color:'#fff', whiteSpace:'nowrap', overflow:'hidden' }}>
            {Array.from({length:2}).flatMap((_,k)=>['57 TRUCKS','/','62 STAFF','/','6 BASES','/','関東一円','/','G-MARK CERTIFIED','/'].map((t,i)=>(
              <span key={k+'-'+i} style={{ opacity: t==='/'?0.5:1 }}>{t}</span>
            )))}
          </div>
        </div>

        {/* Manifesto — skewed split */}
        <section style={{ padding:'112px 48px 120px', position:'relative' }}>
          <div style={{ position:'absolute', top: 60, left: 0, width: 200, height: 8, background: stripes, transform:'skewX(-12deg)' }} />
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.05fr', gap: 56, alignItems:'center' }}>
            <div>
              <div style={{ ...v6.eyebrow, color: red }}>01 — Manifesto</div>
              <h2 style={{ ...v6.h, fontSize: 92, margin:'18px 0 0', transform:'skewX(-5deg)', transformOrigin:'left' }}>
                運ぶことに、<br/><span style={{ color: red }}>誇りを。</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 2.0, color:'#cccccd', marginTop: 30, maxWidth: 520 }}>
                ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来ずっと大切にしてきました。お客様の「運びたい」に、最短距離で。
              </p>
              <div style={{ marginTop: 30, ...v6.italic, fontSize: 30, color: red }}>“{COMPANY.philosophy}”</div>
            </div>
            <div style={{ position:'relative', height: 480, transform:'skewX(-4deg)', overflow:'hidden', border:`2px solid ${red}` }}>
              <Img src="photos/truck-02.jpg" alt="truck" style={{ transform:'skewX(4deg) scale(1.12)' }} />
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section style={{ padding:'104px 48px', background:`linear-gradient(160deg, #141416 0%, ${black} 100%)` }}>
          <div style={{ ...v6.eyebrow, color: red }}>02 — Vehicle Fleet</div>
          <h2 style={{ ...v6.h, fontSize: 76, margin:'14px 0 48px' }}>FLEET <span style={{ ...v6.italic, color: red }}>Spec</span></h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 28 }}>
            {[['34','total air-susp 低床ウイングゲート車','MAX 12,700kg','photos/vehicle-1.webp'],
              ['23','エアサス低床ウイングゲート車','MAX 13,600kg','photos/vehicle-2.webp']].map(([n,name,spec,img])=>(
              <div key={n} style={{ position:'relative', overflow:'hidden', height: 380 }}>
                <Img src={img} alt={name} />
                <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, transparent 40%, rgba(11,11,12,0.95) 100%)' }} />
                <div style={{ position:'absolute', top: 18, left: 18, width: 90, height: 6, background: stripes, transform:'skewX(-12deg)' }} />
                <div style={{ position:'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap: 12 }}>
                    <div style={{ ...v6.italic, fontSize: 72, color: red, lineHeight: 1 }}>{n}</div>
                    <div style={{ ...v6.eyebrow, color:'#fff', fontSize: 10 }}>units</div>
                  </div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 19, marginTop: 8 }}>{name}</div>
                  <div style={{ fontSize: 12, color: silver, marginTop: 6 }}>{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recruit CTA — diagonal */}
        <section style={{ position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset: 0, background: red, transform:'skewY(-2.2deg)', transformOrigin:'top left' }} />
          <div style={{ position:'relative', padding:'128px 48px', color:'#fff' }}>
            <div style={{ ...v6.eyebrow }}>03 — Recruit</div>
            <h2 style={{ ...v6.h, fontSize: 104, margin:'18px 0 0', transform:'skewX(-5deg)', transformOrigin:'left' }}>
              同志、<span style={{ ...v6.italic }}>募集中。</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 26, maxWidth: 560 }}>
              フツーの社員募集ではありません。自分で考え、行動し、一緒に走り出してゆく <strong>“同志”</strong> を求めています。
            </p>
            <button style={{ marginTop: 32, background:'#fff', color: red, border:'none', padding:'18px 36px', ...v6.italic, fontSize: 18 }}>採用情報を見る →</button>
          </div>
        </section>

        {/* Contact */}
        <section style={{ padding:'116px 48px', textAlign:'center' }}>
          <div style={{ ...v6.eyebrow, color: red }}>—— Get a Quote</div>
          <h2 style={{ ...v6.h, fontSize: 148, margin:'22px 0 18px' }}>運ぼう。</h2>
          <div style={{ ...v6.italic, fontSize: 60, color: red }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 14, color: silver, marginTop: 12 }}>平日 9:00 – 18:00 ／ フォームは24時間受付中</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'48px 48px 26px' }}>
          <div style={{ height: 6, background: stripes, transform:'skewX(-12deg)', width: 160, marginBottom: 28 }} />
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 32 }}>
            <Logo variant="small" height={26} style={{ filter:'brightness(0) invert(1)', opacity: 0.6 }} />
            <div style={{ fontSize: 13, lineHeight: 1.9 }}>〒{COMPANY.address}<br/>TEL {COMPANY.tel} / FAX 048-229-3630</div>
          </div>
          <div style={{ marginTop: 32, fontSize: 11, opacity: 0.4, letterSpacing:'0.2em' }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V6Velocity = V6Velocity;
