// C-γ — レッド基調 / RED DOMINANT
// C案（Black×Red）の色バランスを反転。赤を主役の背景に据え、黒と白で
// タイポを組む。最も攻めた、エネルギッシュでパンチの効いた方向。

const CBase3Red = () => {
  const { red } = BRAND;
  const redDeep = '#8a1517';
  const black = '#0b0b0c';
  const cream = '#fdece9';

  const t = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', letterSpacing:'-0.01em', lineHeight: 0.94 },
    display: { fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.42em', fontWeight: 700, textTransform:'uppercase' },
  };

  return (
    <ABFrame bg={red}>
      <div style={{ width:'100%', background: red, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'22px 48px', borderBottom:'1px solid rgba(255,255,255,0.25)' }}>
          <Logo variant="small" height={30} style={{ filter:'brightness(0) invert(1)' }} />
          <div style={{ display:'flex', gap: 32, fontSize: 13, color:'#fff', fontWeight: 600, letterSpacing:'0.08em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap: 16 }}>
            <Img src="external/impul.png" alt="TEAM IMPUL" style={{ width:'auto', height: 20, objectFit:'contain', filter:'brightness(0) invert(1)' }} />
            <button style={{ background:'#0b0b0c', color:'#fff', border:'none', padding:'12px 22px', fontSize: 12, letterSpacing:'0.18em', fontWeight: 700, cursor:'pointer' }}>CONTACT →</button>
          </div>
        </nav>

        {/* HERO — red field, huge type, framed photo card */}
        <section style={{ position:'relative', padding:'80px 48px 72px', overflow:'hidden' }}>
          <div style={{ position:'absolute', top: -60, right: -40, ...t.display, fontSize: 380, color: redDeep, lineHeight: 0.8, opacity: 0.5 }}>2010</div>
          <div style={{ position:'relative', ...t.eyebrow, color:'#fff', marginBottom: 22 }}>○ Professional Carriers · 大型車・ゲート車</div>
          <h1 style={{ position:'relative', ...t.h, fontSize: 200, margin: 0 }}>
            運ぶを、<br/><span style={{ WebkitTextStroke:'2px #fff', color:'transparent' }}>誇りに</span>。
          </h1>
          <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 44, alignItems:'flex-end', marginTop: 40 }}>
            <p style={{ fontSize: 17, lineHeight: 2.0, color: cream, maxWidth: 500, margin: 0 }}>
              57台の大型車・ゲート車が、関東一円を走る。プロフェッショナル運び屋集団 ── 株式会社 福嶋商事。
            </p>
            <div style={{ position:'relative', height: 320, overflow:'hidden', border:'6px solid #fff', boxShadow:'0 20px 60px rgba(0,0,0,0.3)' }}>
              <Img src="photos/recruit-top.jpg" alt="fleet" />
              <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, padding:'14px 18px', background:'rgba(11,11,12,0.8)', ...t.eyebrow, fontSize: 10, color:'#fff' }}>THE RED FLEET · 関東一円</div>
            </div>
          </div>
        </section>

        {/* Stat strip — black */}
        <section style={{ background: black, color:'#fff', padding:'34px 48px', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 24, alignItems:'center' }}>
          {[['57','TRUCKS'],['62','STAFF'],['6','BASES'],['全車','AIR-SUSP'],['G-MARK','×6 CERTIFIED']].map(([n,l]) => (
            <div key={l} style={{ display:'flex', alignItems:'baseline', gap: 14, justifyContent:'center' }}>
              <div style={{ ...t.display, fontSize: 54, fontWeight: 700, lineHeight: 1, color: red }}>{n}</div>
              <div style={{ ...t.eyebrow, fontSize: 10, color:'#fff' }}>{l}</div>
            </div>
          ))}
        </section>

        {/* Manifesto — on red */}
        <section style={{ padding:'104px 48px', display:'grid', gridTemplateColumns:'80px 1fr 1.1fr', gap: 48, alignItems:'start' }}>
          <div style={{ writingMode:'vertical-rl', ...t.display, fontSize: 14, letterSpacing:'0.4em', color:'rgba(255,255,255,0.7)', textTransform:'uppercase' }}>—— MANIFESTO / 01</div>
          <h2 style={{ ...t.h, fontSize: 92, margin: 0 }}>運ぶことに、<br/>誇りを。</h2>
          <div style={{ paddingTop: 20 }}>
            <p style={{ fontSize: 17, lineHeight: 2.0, margin: 0, color: cream }}>
              ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来、ずっと大切にしてきました。プロとして、お客様の「運びたい」に最短距離で応える。
            </p>
            <div style={{ marginTop: 32, padding:'22px 26px', background:'#0b0b0c' }}>
              <div style={{ ...t.eyebrow, color: red, fontSize: 10 }}>OUR PHILOSOPHY</div>
              <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, marginTop: 8, fontWeight: 600, color:'#fff' }}>{COMPANY.philosophy}</div>
            </div>
          </div>
        </section>

        {/* Fleet — black section for contrast */}
        <section style={{ padding:'104px 48px', background: black }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 48, borderBottom:'1px solid rgba(255,255,255,0.15)', paddingBottom: 22 }}>
            <div>
              <div style={{ ...t.eyebrow, color: red }}>02 / VEHICLE FLEET</div>
              <h2 style={{ ...t.h, fontSize: 66, margin:'14px 0 0' }}>FLEET <span style={{ color: red, ...t.display, fontWeight: 700 }}>SPEC</span></h2>
            </div>
            <span style={{ ...t.eyebrow, color:'rgba(255,255,255,0.6)' }}>2 CATEGORIES · 57 TRUCKS</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }}>
            {[
              ['NO.01','総輪エアサス 低床ウイングゲート車','34','MAX 12,700kg · 2,410×9,600×2,570mm','photos/truck-02.jpg'],
              ['NO.02','エアサス低床ウイングゲート車','23','MAX 13,600kg · 全車格納ゲート装備','photos/vehicle-1.webp'],
            ].map(([no,name,n,spec,img]) => (
              <div key={no}>
                <div style={{ position:'relative', height: 320, overflow:'hidden' }}>
                  <Img src={img} alt={name} />
                  <div style={{ position:'absolute', top: 0, right: 0, background: red, color:'#fff', padding:'16px 20px', textAlign:'right' }}>
                    <div style={{ ...t.eyebrow, fontSize: 9 }}>{no}</div>
                    <div style={{ ...t.display, fontSize: 46, lineHeight: 1, marginTop: 4 }}>{n}</div>
                  </div>
                </div>
                <div style={{ padding:'22px 4px', color:'#fff' }}>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 22, fontWeight: 600 }}>{name}</div>
                  <div style={{ fontFamily:'"Inter", sans-serif', fontSize: 11, color:'rgba(255,255,255,0.6)', marginTop: 10, letterSpacing:'0.02em' }}>{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business — on red */}
        <section style={{ padding:'104px 48px' }}>
          <div style={{ ...t.eyebrow, color:'#fff', marginBottom: 16 }}>03 / BUSINESS</div>
          <h2 style={{ ...t.h, fontSize: 74, margin: 0 }}>INDEX of 事業</h2>
          <div style={{ marginTop: 48, borderTop:'1px solid rgba(255,255,255,0.3)' }}>
            {BUSINESS.map(([ti, en, d, img], i) => (
              <div key={ti} style={{ display:'grid', gridTemplateColumns:'80px 280px 1fr 200px 44px', gap: 28, padding:'32px 0', borderBottom:'1px solid rgba(255,255,255,0.3)', alignItems:'center' }}>
                <div style={{ ...t.display, fontSize: 50, color:'#0b0b0c' }}>0{i+1}</div>
                <div>
                  <div style={{ ...t.h, fontSize: 30 }}>{ti}</div>
                  <div style={{ ...t.eyebrow, color:'rgba(255,255,255,0.75)', fontSize: 10, marginTop: 6 }}>{en}</div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.9, color: cream }}>{d}</div>
                <div style={{ height: 120, overflow:'hidden' }}><Img src={`photos/${img}`} alt={ti} /></div>
                <div style={{ textAlign:'right', fontSize: 24, color:'#fff' }}>→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety — black band */}
        <section style={{ padding:'104px 48px', background: black, display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 52, alignItems:'center' }}>
          <div>
            <div style={{ ...t.eyebrow, color: red }}>04 / SAFETY</div>
            <h2 style={{ ...t.h, fontSize: 78, margin:'18px 0 0' }}>ZERO <span style={{ color: red, ...t.display, fontWeight: 700 }}>ACCIDENTS</span>.</h2>
            <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 26, maxWidth: 560, color:'rgba(255,255,255,0.8)' }}>
              全営業所がGマーク認定を取得。3ヶ月ごとの安全会議、外部機関によるKYT、デジタコ・ドラレコ全車両装備。安全はオプションではなく、私たちの規格です。
            </p>
          </div>
          <div style={{ background:'#fff', padding: 30 }}>
            <Img src="logos/gmark.jpg" alt="Gマーク" style={{ height: 180, objectFit:'contain' }} />
            <div style={{ marginTop: 20, color: black }}>
              <div style={{ ...t.eyebrow, color: red }}>G-MARK CERTIFIED</div>
              <div style={{ fontSize: 14, marginTop: 8, color:'#333', lineHeight: 1.8 }}>全6営業所 安全性優良事業所認定</div>
            </div>
          </div>
        </section>

        {/* Recruit — on red */}
        <section style={{ padding:'104px 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56, alignItems:'center' }}>
          <div>
            <div style={{ ...t.eyebrow, color:'#fff' }}>05 / RECRUIT</div>
            <h2 style={{ ...t.h, fontSize: 80, margin:'18px 0 0' }}>同志、募集中。</h2>
            <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 24, maxWidth: 500, color: cream }}>
              フツーの社員募集ではありません。自分で考え、行動し、一緒に走り出してゆく<strong style={{ color:'#fff' }}>"同志"</strong>を求めています。
            </p>
            <button style={{ marginTop: 28, background:'#0b0b0c', color:'#fff', border:'none', padding:'20px 36px', fontSize: 14, letterSpacing:'0.16em', fontWeight: 700, cursor:'pointer' }}>採用情報を見る →</button>
          </div>
          <div style={{ border:'6px solid #fff', overflow:'hidden', height: 400, boxShadow:'0 20px 60px rgba(0,0,0,0.3)' }}>
            <Img src="photos/training-kensyu.webp" alt="研修" />
          </div>
        </section>

        {/* CTA — black */}
        <section style={{ padding:'112px 48px', background: black, textAlign:'center' }}>
          <div style={{ ...t.eyebrow, color: red }}>—— GET A QUOTE</div>
          <h2 style={{ ...t.h, fontSize: 148, margin:'22px 0' }}>運ぼう<span style={{ color: red }}>。</span></h2>
          <div style={{ ...t.display, fontSize: 54, color: red, fontWeight: 700, marginBottom: 12 }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 14, color:'rgba(255,255,255,0.6)' }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付中</div>
        </section>

        <footer style={{ background: redDeep, color: cream, padding:'52px 48px 26px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap: 44, flexWrap:'wrap' }}>
            <Logo variant="small" height={26} style={{ filter:'brightness(0) invert(1)', opacity: 0.85 }} />
            <div style={{ fontSize: 13, lineHeight: 1.9 }}>〒{COMPANY.address}<br/>TEL {COMPANY.tel} / FAX 048-229-3630</div>
            <div style={{ display:'flex', gap: 22, fontSize: 12, letterSpacing:'0.14em' }}>{['事業','車両','安全','会社','採用','問合せ'].map(x => <span key={x}>{x}</span>)}</div>
          </div>
          <div style={{ marginTop: 36, fontSize: 11, opacity: 0.6, letterSpacing:'0.18em' }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.CBase3Red = CBase3Red;
