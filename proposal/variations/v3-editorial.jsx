// V3 — ダイナミック・モータースポーツ系
// Black + racing red + steel. Leverages the IMPUL sponsorship + the striking
// red truck aesthetic. Feels like a race-team / heavy-haul brand site.

const V3Editorial = () => {
  const { red, redDeep, ink, offwhite } = BRAND;
  const black = '#0b0b0c';
  const steel = '#2a2a2e';
  const silver = '#a8a8ad';

  const v3 = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', letterSpacing:'-0.005em', lineHeight: 0.95 },
    display: { fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.4em', fontWeight: 700, textTransform:'uppercase' },
  };

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'20px 48px', borderBottom:`1px solid ${steel}` }}>
          <Logo variant="small" height={30} style={{ filter:'brightness(0) invert(1)' }} />
          <div style={{ display:'flex', gap: 32, fontSize: 13, color:'#fff', fontWeight: 500, letterSpacing:'0.08em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap: 16 }}>
            <Img src="external/impul.png" alt="TEAM IMPUL" style={{ width:'auto', height: 20, objectFit:'contain', filter:'brightness(0) invert(1)' }} />
            <button style={{ background: red, color:'#fff', border:'none', padding:'12px 22px', fontSize: 12, letterSpacing:'0.18em', fontWeight: 700 }}>CONTACT →</button>
          </div>
        </nav>

        {/* HERO — full bleed photo with massive display type */}
        <section style={{ position:'relative', height: 780, overflow:'hidden' }}>
          <Img src="photos/recruit-top.jpg" alt="fleet" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }} />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(11,11,12,0.6) 0%, rgba(11,11,12,0.2) 40%, rgba(11,11,12,0.95) 100%)' }} />

          {/* Top corner — IMPUL line */}
          <div style={{ position:'absolute', top: 32, left: 48, ...v3.eyebrow, color: red }}>
            ○ PROUDLY SUPPORTING TEAM IMPUL · 2026 SEASON
          </div>
          <div style={{ position:'absolute', top: 32, right: 48, ...v3.eyebrow, color:'#fff', textAlign:'right' }}>
            FUKUSHIMA SHOUJI<br/>
            <span style={{ ...v3.display, fontSize: 32, letterSpacing:'0.02em', color: red, fontStyle:'italic', textTransform:'none' }}>Est. 2010</span>
          </div>

          {/* Massive hero copy */}
          <div style={{ position:'absolute', bottom: 56, left: 48, right: 48 }}>
            <div style={{ ...v3.eyebrow, color: red, marginBottom: 18 }}>○ Professional Carriers · 大型車・ゲート車</div>
            <h1 style={{ ...v3.h, fontSize: 200, margin: 0, color:'#fff' }}>
              赤き、<span style={{ color: red }}>流儀</span>。
            </h1>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop: 32 }}>
              <p style={{ fontSize: 16, lineHeight: 1.9, opacity: 0.85, maxWidth: 520, margin: 0 }}>
                57台の大型車・ゲート車が、関東一円を走る。<br/>
                プロフェッショナル運び屋集団 — 株式会社 福嶋商事。
              </p>
              <div style={{ ...v3.eyebrow, opacity: 0.7 }}>SCROLL ↓</div>
            </div>
          </div>
        </section>

        {/* Specs ticker */}
        <section style={{ background: red, color:'#fff', padding:'32px 48px', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 24, alignItems:'center', borderTop:`4px solid ${black}` }}>
          {[
            ['57', 'TRUCKS'],
            ['62', 'STAFF'],
            ['6', 'BASES'],
            ['全車', 'AIR-SUSP'],
            ['G-MARK', 'CERTIFIED'],
          ].map(([n, l]) => (
            <div key={l} style={{ display:'flex', alignItems:'baseline', gap: 16, justifyContent:'center' }}>
              <div style={{ ...v3.display, fontSize: 56, fontWeight: 700, lineHeight: 1 }}>{n}</div>
              <div style={{ ...v3.eyebrow, fontSize: 10 }}>{l}</div>
            </div>
          ))}
        </section>

        {/* Section 01 — Manifesto */}
        <section style={{ padding:'112px 48px', borderTop:`1px solid ${steel}` }}>
          <div style={{ display:'grid', gridTemplateColumns:'80px 1fr 1.1fr', gap: 48, alignItems:'start' }}>
            <div style={{ writingMode:'vertical-rl', ...v3.display, fontSize: 14, letterSpacing:'0.4em', color: silver, textTransform:'uppercase' }}>—— MANIFESTO / 01</div>
            <h2 style={{ ...v3.h, fontSize: 96, margin: 0 }}>
              運ぶことに、<br/>
              <span style={{ color: red }}>誇りを。</span>
            </h2>
            <div style={{ paddingTop: 24 }}>
              <p style={{ fontSize: 17, lineHeight: 2.0, margin: 0, color:'#cccccd' }}>
                ただモノを運ぶだけなら、誰にでもできる。<br/><br/>
                私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来、ずっと大切にしてきました。
                プロとして、お客様の「運びたい」に最短距離で応える。
                その積み重ねが、福嶋商事の赤いトラックを今日も走らせています。
              </p>
              <div style={{ marginTop: 36, padding:'20px 24px', borderLeft:`3px solid ${red}` }}>
                <div style={{ ...v3.eyebrow, color: red, fontSize: 10 }}>OUR PHILOSOPHY</div>
                <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, marginTop: 8, fontWeight: 600 }}>{COMPANY.philosophy}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 — VEHICLE spotlight */}
        <section style={{ padding:'112px 48px', background:`linear-gradient(180deg, ${black} 0%, ${steel} 100%)` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 56, borderBottom:`1px solid ${silver}33`, paddingBottom: 24 }}>
            <div>
              <div style={{ ...v3.eyebrow, color: red }}>02 / VEHICLE FLEET</div>
              <h2 style={{ ...v3.h, fontSize: 72, margin:'16px 0 0' }}>FLEET <span style={{ color: red, ...v3.display, fontWeight: 700 }}>SPEC</span></h2>
            </div>
            <span style={{ ...v3.eyebrow, color: silver }}>2 CATEGORIES · 57 TRUCKS</span>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 32 }}>
            <div style={{ position:'relative', overflow:'hidden' }}>
              <Img src="photos/truck-02.jpg" alt="トラック前面" style={{ height: 520 }} />
              <div style={{ position:'absolute', top: 0, right: 0, background: red, color:'#fff', padding:'24px 28px' }}>
                <div style={{ ...v3.eyebrow, fontSize: 10 }}>NO. 01</div>
                <div style={{ ...v3.display, fontSize: 56, lineHeight: 1, marginTop: 8 }}>34</div>
                <div style={{ fontSize: 13, marginTop: 8, fontWeight: 600, lineHeight: 1.4 }}>総輪エアサス<br/>低床ウイングゲート車</div>
              </div>
              <div style={{ position:'absolute', bottom: 0, left: 0, padding:'20px 24px', background:'rgba(11,11,12,0.85)', color:'#fff', fontSize: 12, letterSpacing:'0.1em' }}>
                MAX 12,700kg · 2,410 × 9,600 × 2,570–2,610mm
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 16 }}>
              <div style={{ position:'relative', flex: 1, overflow:'hidden' }}>
                <Img src="photos/vehicle-1.webp" alt="車両" style={{ height: '100%' }} />
                <div style={{ position:'absolute', top: 16, left: 16, background: red, color:'#fff', padding:'10px 14px' }}>
                  <div style={{ ...v3.display, fontSize: 28, lineHeight: 1 }}>23</div>
                  <div style={{ fontSize: 9, letterSpacing:'0.2em', marginTop: 2 }}>NO.02</div>
                </div>
              </div>
              <div style={{ background:'#fff', color: black, padding:'24px 28px' }}>
                <div style={{ ...v3.eyebrow, color: red, fontSize: 10 }}>NO. 02</div>
                <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 22, marginTop: 8, fontWeight: 600 }}>エアサス低床ウイングゲート車</div>
                <div style={{ fontSize: 12, marginTop: 12, color:'#666' }}>MAX 13,600kg · 全車格納ゲート装備</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 — Business INDEX */}
        <section style={{ padding:'112px 48px' }}>
          <div style={{ ...v3.eyebrow, color: red, marginBottom: 18 }}>03 / BUSINESS</div>
          <h2 style={{ ...v3.h, fontSize: 88, margin: 0 }}>INDEX of <span style={{ color: red, ...v3.display, fontWeight: 700, textTransform:'none' }}>事業</span></h2>
          <div style={{ marginTop: 56, borderTop:`1px solid ${steel}` }}>
            {BUSINESS.map(([t, en, d, img], i) => (
              <div key={t} style={{ display:'grid', gridTemplateColumns:'80px 280px 1fr 240px 48px', gap: 32, padding:'36px 0', borderBottom:`1px solid ${steel}`, alignItems:'center' }}>
                <div style={{ ...v3.display, fontSize: 56, color: red, lineHeight: 1 }}>0{i+1}</div>
                <div>
                  <div style={{ ...v3.h, fontSize: 32, color:'#fff' }}>{t}</div>
                  <div style={{ ...v3.eyebrow, color: silver, fontSize: 10, marginTop: 6 }}>{en}</div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.9, color:'#cccccd' }}>{d}</div>
                <div style={{ height: 140, overflow:'hidden' }}><Img src={`photos/${img}`} alt={t} /></div>
                <div style={{ textAlign:'right', fontSize: 24, color: red }}>→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04 — Safety */}
        <section style={{ padding:'112px 48px', background: red, color:'#fff' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 56, alignItems:'center' }}>
            <div>
              <div style={{ ...v3.eyebrow, color:'#fff' }}>04 / SAFETY</div>
              <h2 style={{ ...v3.h, fontSize: 88, margin:'18px 0 0', color:'#fff' }}>
                ZERO <span style={{ ...v3.display, fontWeight: 700 }}>ACCIDENTS</span>.<br/>
                THAT&apos;S THE LINE.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 32, maxWidth: 580 }}>
                全営業所がGマーク認定を取得。3ヶ月ごとの安全会議、外部機関によるKYT、デジタコ・ドラレコ全車両装備。<br/>
                2025年度の目標は「人身事故0件・物損事故0件」。安全はオプションではなく、私たちの規格です。
              </p>
            </div>
            <div style={{ background:'#fff', padding: 32 }}>
              <Img src="logos/gmark.jpg" alt="Gマーク" style={{ width:'100%', height: 200, objectFit:'contain' }} />
              <div style={{ marginTop: 24, color: black }}>
                <div style={{ ...v3.eyebrow, color: red }}>G-MARK CERTIFIED</div>
                <div style={{ fontSize: 14, marginTop: 8, color:'#333', lineHeight: 1.8 }}>
                  本社 4回更新／湘南／習志野 2回更新／群馬<br/>
                  全6営業所 安全性優良事業所認定
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 — Recruit */}
        <section style={{ padding:'112px 48px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top: 0, right: -100, width: 600, ...v3.display, fontSize: 320, color:`${red}15`, lineHeight: 0.8, fontWeight: 700 }}>JOIN</div>
          <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 64, alignItems:'center' }}>
            <div>
              <div style={{ ...v3.eyebrow, color: red }}>05 / RECRUIT</div>
              <h2 style={{ ...v3.h, fontSize: 88, margin:'18px 0 0' }}>
                同志、<span style={{ color: red }}>募集中。</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 28, maxWidth: 540, color:'#cccccd' }}>
                フツーの社員募集ではありません。<br/>
                自分で考え、行動し、自分のチカラを訴え、一緒に走り出してゆく
                <strong style={{ color:'#fff' }}>"同志"</strong>を求めています。
              </p>
              <div style={{ marginTop: 32, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
                {[['月給', '38〜50万円以上'], ['配送', '関東一円・長距離なし'], ['手当', '無事故・エコドライブ'], ['制度', '取得支援・社員旅行']].map(([k, v]) => (
                  <div key={k} style={{ padding:'14px 16px', border:`1px solid ${steel}` }}>
                    <div style={{ ...v3.eyebrow, color: red, fontSize: 9 }}>{k}</div>
                    <div style={{ fontSize: 14, marginTop: 6, color:'#fff' }}>{v}</div>
                  </div>
                ))}
              </div>
              <button style={{ marginTop: 32, background: red, color:'#fff', border:'none', padding:'20px 36px', fontSize: 14, letterSpacing:'0.16em', fontWeight: 700 }}>採用情報を見る →</button>
            </div>
            <Img src="photos/training-kensyu.webp" alt="研修" style={{ height: 460 }} />
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'120px 48px', background: black, borderTop:`1px solid ${steel}`, textAlign:'center' }}>
          <div style={{ ...v3.eyebrow, color: red }}>—— GET A QUOTE</div>
          <h2 style={{ ...v3.h, fontSize: 160, color:'#fff', margin:'24px 0 24px' }}>運ぼう。</h2>
          <div style={{ fontFamily:'"Bodoni Moda", serif', fontSize: 56, color: red, fontStyle:'italic', fontWeight: 700, marginBottom: 12 }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 14, opacity: 0.7 }}>平日 9:00 – 18:00　／　お問い合わせフォームも24時間受付中</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'56px 48px 28px', borderTop:`1px solid ${steel}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap: 48, flexWrap:'wrap' }}>
            <Logo variant="small" height={28} style={{ filter:'brightness(0) invert(1)', opacity: 0.7 }} />
            <div style={{ fontSize: 13, lineHeight: 1.9 }}>
              〒{COMPANY.address}<br/>
              TEL {COMPANY.tel} / FAX 048-229-3630
            </div>
            <div style={{ display:'flex', gap: 24, fontSize: 12, letterSpacing:'0.14em' }}>
              {['事業','車両','安全','会社','採用','問合せ'].map(x => <span key={x}>{x}</span>)}
            </div>
          </div>
          <div style={{ marginTop: 40, fontSize: 11, opacity: 0.4, letterSpacing:'0.18em' }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V3Editorial = V3Editorial;
