// C-α — 王道フルブリード / ROYAL
// C案（Black×Red）の最も王道な進化形。フルブリード写真＋巨大縦組みの
// ディスプレイタイポ、赤のアクセント帯。力強さと安定感を両立。

const CBase1Royal = () => {
  const { red } = BRAND;
  const black = '#0b0b0c';
  const steel = '#232327';
  const silver = '#a8a8ad';

  const t = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', letterSpacing:'-0.01em', lineHeight: 0.94 },
    display: { fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.42em', fontWeight: 700, textTransform:'uppercase' },
  };

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'22px 48px', borderBottom:`1px solid ${steel}` }}>
          <Logo variant="small" height={30} style={{ filter:'brightness(0) invert(1)' }} />
          <div style={{ display:'flex', gap: 32, fontSize: 13, color:'#fff', fontWeight: 500, letterSpacing:'0.08em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap: 16 }}>
            <Img src="external/impul.png" alt="TEAM IMPUL" style={{ width:'auto', height: 20, objectFit:'contain', filter:'brightness(0) invert(1)' }} />
            <button style={{ background: red, color:'#fff', border:'none', padding:'12px 22px', fontSize: 12, letterSpacing:'0.18em', fontWeight: 700, cursor:'pointer' }}>CONTACT →</button>
          </div>
        </nav>

        {/* HERO — full bleed with side red bar + giant vertical type */}
        <section style={{ position:'relative', height: 820, overflow:'hidden' }}>
          <Img src="photos/recruit-top.jpg" alt="fleet" style={{ position:'absolute', inset: 0 }} />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(90deg, rgba(11,11,12,0.92) 0%, rgba(11,11,12,0.35) 55%, rgba(11,11,12,0.15) 100%)' }} />
          <div style={{ position:'absolute', left: 0, top: 0, bottom: 0, width: 8, background: red }} />

          <div style={{ position:'absolute', top: 40, right: 48, ...t.eyebrow, color:'#fff', textAlign:'right', lineHeight: 1.8 }}>
            FUKUSHIMA SHOUJI CO.,LTD.<br/>
            <span style={{ color: red }}>○ SINCE 2010 · 関東一円</span>
          </div>

          <div style={{ position:'absolute', bottom: 60, left: 56, right: 48 }}>
            <div style={{ ...t.eyebrow, color: red, marginBottom: 20 }}>○ Professional Carriers · 大型車・ゲート車</div>
            <h1 style={{ ...t.h, fontSize: 176, margin: 0 }}>
              運ぶを、<span style={{ color: red }}>誇りに</span>。
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.9, color:'#dcdcdf', maxWidth: 560, marginTop: 28 }}>
              57台の大型車・ゲート車が、関東一円を走る。<br/>
              プロフェッショナル運び屋集団 ── 株式会社 福嶋商事。
            </p>
          </div>
          <div style={{ position:'absolute', bottom: 28, right: 48, ...t.eyebrow, color: silver }}>SCROLL ↓</div>
        </section>

        {/* Stat strip */}
        <section style={{ background: red, color:'#fff', padding:'34px 48px', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 24, alignItems:'center', borderTop:`4px solid ${black}` }}>
          {[['57','TRUCKS'],['62','STAFF'],['6','BASES'],['全車','AIR-SUSP'],['G-MARK','×6 CERTIFIED']].map(([n,l]) => (
            <div key={l} style={{ display:'flex', alignItems:'baseline', gap: 14, justifyContent:'center' }}>
              <div style={{ ...t.display, fontSize: 54, fontWeight: 700, lineHeight: 1 }}>{n}</div>
              <div style={{ ...t.eyebrow, fontSize: 10 }}>{l}</div>
            </div>
          ))}
        </section>

        {/* Manifesto */}
        <section style={{ padding:'108px 48px', borderTop:`1px solid ${steel}`, display:'grid', gridTemplateColumns:'80px 1fr 1.1fr', gap: 48, alignItems:'start' }}>
          <div style={{ writingMode:'vertical-rl', ...t.display, fontSize: 14, letterSpacing:'0.4em', color: silver, textTransform:'uppercase' }}>—— MANIFESTO / 01</div>
          <h2 style={{ ...t.h, fontSize: 92, margin: 0 }}>運ぶことに、<br/><span style={{ color: red }}>誇りを。</span></h2>
          <div style={{ paddingTop: 20 }}>
            <p style={{ fontSize: 17, lineHeight: 2.0, margin: 0, color:'#cccccd' }}>
              ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来、ずっと大切にしてきました。プロとして、お客様の「運びたい」に最短距離で応える。その積み重ねが、福嶋商事の赤いトラックを今日も走らせています。
            </p>
            <div style={{ marginTop: 34, padding:'20px 24px', borderLeft:`3px solid ${red}` }}>
              <div style={{ ...t.eyebrow, color: red, fontSize: 10 }}>OUR PHILOSOPHY</div>
              <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, marginTop: 8, fontWeight: 600 }}>{COMPANY.philosophy}</div>
            </div>
          </div>
        </section>

        {/* Fleet spotlight */}
        <section style={{ padding:'108px 48px', background:`linear-gradient(180deg, ${black} 0%, ${steel} 100%)` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 52, borderBottom:`1px solid ${silver}33`, paddingBottom: 22 }}>
            <div>
              <div style={{ ...t.eyebrow, color: red }}>02 / VEHICLE FLEET</div>
              <h2 style={{ ...t.h, fontSize: 68, margin:'16px 0 0' }}>FLEET <span style={{ color: red, ...t.display, fontWeight: 700 }}>SPEC</span></h2>
            </div>
            <span style={{ ...t.eyebrow, color: silver }}>2 CATEGORIES · 57 TRUCKS</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 28 }}>
            <div style={{ position:'relative', overflow:'hidden', height: 500 }}>
              <Img src="photos/truck-02.jpg" alt="トラック前面" />
              <div style={{ position:'absolute', top: 0, right: 0, background: red, color:'#fff', padding:'24px 28px' }}>
                <div style={{ ...t.eyebrow, fontSize: 10 }}>NO. 01</div>
                <div style={{ ...t.display, fontSize: 54, lineHeight: 1, marginTop: 8 }}>34</div>
                <div style={{ fontSize: 13, marginTop: 8, fontWeight: 600, lineHeight: 1.4 }}>総輪エアサス<br/>低床ウイングゲート車</div>
              </div>
              <div style={{ position:'absolute', bottom: 0, left: 0, padding:'18px 22px', background:'rgba(11,11,12,0.85)', fontSize: 12, letterSpacing:'0.08em' }}>
                MAX 12,700kg · 2,410 × 9,600 × 2,570mm
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 16 }}>
              <div style={{ position:'relative', flex: 1, overflow:'hidden' }}>
                <Img src="photos/vehicle-1.webp" alt="車両" />
                <div style={{ position:'absolute', top: 16, left: 16, background: red, color:'#fff', padding:'10px 14px' }}>
                  <div style={{ ...t.display, fontSize: 28, lineHeight: 1 }}>23</div>
                  <div style={{ fontSize: 9, letterSpacing:'0.2em', marginTop: 2 }}>NO.02</div>
                </div>
              </div>
              <div style={{ background:'#fff', color: black, padding:'22px 26px' }}>
                <div style={{ ...t.eyebrow, color: red, fontSize: 10 }}>NO. 02</div>
                <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 22, marginTop: 8, fontWeight: 600 }}>エアサス低床ウイングゲート車</div>
                <div style={{ fontSize: 12, marginTop: 12, color:'#666' }}>MAX 13,600kg · 全車格納ゲート装備</div>
              </div>
            </div>
          </div>
        </section>

        {/* Business index */}
        <section style={{ padding:'108px 48px' }}>
          <div style={{ ...t.eyebrow, color: red, marginBottom: 16 }}>03 / BUSINESS</div>
          <h2 style={{ ...t.h, fontSize: 76, margin: 0 }}>INDEX of <span style={{ color: red, ...t.display, fontWeight: 700, textTransform:'none' }}>事業</span></h2>
          <div style={{ marginTop: 48, borderTop:`1px solid ${steel}` }}>
            {BUSINESS.map(([ti, en, d, img], i) => (
              <div key={ti} style={{ display:'grid', gridTemplateColumns:'80px 280px 1fr 220px 44px', gap: 28, padding:'34px 0', borderBottom:`1px solid ${steel}`, alignItems:'center' }}>
                <div style={{ ...t.display, fontSize: 52, color: red, lineHeight: 1 }}>0{i+1}</div>
                <div>
                  <div style={{ ...t.h, fontSize: 30 }}>{ti}</div>
                  <div style={{ ...t.eyebrow, color: silver, fontSize: 10, marginTop: 6 }}>{en}</div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.9, color:'#cccccd' }}>{d}</div>
                <div style={{ height: 130, overflow:'hidden' }}><Img src={`photos/${img}`} alt={ti} /></div>
                <div style={{ textAlign:'right', fontSize: 24, color: red }}>→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section style={{ padding:'108px 48px', background: red, color:'#fff', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 52, alignItems:'center' }}>
          <div>
            <div style={{ ...t.eyebrow, color:'#fff' }}>04 / SAFETY</div>
            <h2 style={{ ...t.h, fontSize: 80, margin:'18px 0 0', color:'#fff' }}>ZERO <span style={{ ...t.display, fontWeight: 700 }}>ACCIDENTS</span>.<br/>THAT&apos;S THE LINE.</h2>
            <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 28, maxWidth: 560 }}>
              全営業所がGマーク認定を取得。3ヶ月ごとの安全会議、外部機関によるKYT、デジタコ・ドラレコ全車両装備。安全はオプションではなく、私たちの規格です。
            </p>
          </div>
          <div style={{ background:'#fff', padding: 30 }}>
            <Img src="logos/gmark.jpg" alt="Gマーク" style={{ height: 190, objectFit:'contain' }} />
            <div style={{ marginTop: 22, color: black }}>
              <div style={{ ...t.eyebrow, color: red }}>G-MARK CERTIFIED</div>
              <div style={{ fontSize: 14, marginTop: 8, color:'#333', lineHeight: 1.8 }}>本社 4回更新／湘南／習志野／群馬<br/>全6営業所 安全性優良事業所認定</div>
            </div>
          </div>
        </section>

        {/* Recruit */}
        <section style={{ padding:'108px 48px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top: 0, right: -100, ...t.display, fontSize: 300, color:`${red}15`, lineHeight: 0.8, fontWeight: 700 }}>JOIN</div>
          <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 60, alignItems:'center' }}>
            <div>
              <div style={{ ...t.eyebrow, color: red }}>05 / RECRUIT</div>
              <h2 style={{ ...t.h, fontSize: 80, margin:'18px 0 0' }}>同志、<span style={{ color: red }}>募集中。</span></h2>
              <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 26, maxWidth: 520, color:'#cccccd' }}>
                フツーの社員募集ではありません。自分で考え、行動し、一緒に走り出してゆく<strong style={{ color:'#fff' }}>"同志"</strong>を求めています。
              </p>
              <div style={{ marginTop: 30, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
                {[['月給','38〜50万円以上'],['配送','関東一円・長距離なし'],['手当','無事故・エコドライブ'],['制度','取得支援・社員旅行']].map(([k,v]) => (
                  <div key={k} style={{ padding:'14px 16px', border:`1px solid ${steel}` }}>
                    <div style={{ ...t.eyebrow, color: red, fontSize: 9 }}>{k}</div>
                    <div style={{ fontSize: 14, marginTop: 6 }}>{v}</div>
                  </div>
                ))}
              </div>
              <button style={{ marginTop: 30, background: red, color:'#fff', border:'none', padding:'20px 36px', fontSize: 14, letterSpacing:'0.16em', fontWeight: 700, cursor:'pointer' }}>採用情報を見る →</button>
            </div>
            <Img src="photos/training-kensyu.webp" alt="研修" style={{ height: 440 }} />
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'112px 48px', background: black, borderTop:`1px solid ${steel}`, textAlign:'center' }}>
          <div style={{ ...t.eyebrow, color: red }}>—— GET A QUOTE</div>
          <h2 style={{ ...t.h, fontSize: 148, margin:'22px 0' }}>運ぼう。</h2>
          <div style={{ ...t.display, fontSize: 54, color: red, fontWeight: 700, marginBottom: 12 }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 14, color: silver }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付中</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'52px 48px 26px', borderTop:`1px solid ${steel}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap: 44, flexWrap:'wrap' }}>
            <Logo variant="small" height={26} style={{ filter:'brightness(0) invert(1)', opacity: 0.7 }} />
            <div style={{ fontSize: 13, lineHeight: 1.9 }}>〒{COMPANY.address}<br/>TEL {COMPANY.tel} / FAX 048-229-3630</div>
            <div style={{ display:'flex', gap: 22, fontSize: 12, letterSpacing:'0.14em' }}>{['事業','車両','安全','会社','採用','問合せ'].map(x => <span key={x}>{x}</span>)}</div>
          </div>
          <div style={{ marginTop: 36, fontSize: 11, opacity: 0.4, letterSpacing:'0.18em' }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.CBase1Royal = CBase1Royal;
