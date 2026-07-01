// C-ε — グリッドシステム / GRID
// C案（Black×Red）をスイス的モジュラーグリッドで規律化。太い罫線、
// 番号インデックス、整然としたブロック構成。堅牢で企業的な力強さ。

const CBase5Grid = () => {
  const { red } = BRAND;
  const black = '#0b0b0c';
  const line = '#2c2c31';
  const silver = '#9a9aa0';

  const t = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', letterSpacing:'-0.01em', lineHeight: 0.96 },
    display: { fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.4em', fontWeight: 700, textTransform:'uppercase' },
  };

  const cell = { border:`1px solid ${line}` };

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'20px 40px', borderBottom:`1px solid ${line}` }}>
          <Logo variant="small" height={28} style={{ filter:'brightness(0) invert(1)' }} />
          <div style={{ display:'flex', gap: 28, fontSize: 12, color:'#fff', fontWeight: 500, letterSpacing:'0.1em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap: 16 }}>
            <Img src="external/impul.png" alt="TEAM IMPUL" style={{ width:'auto', height: 18, objectFit:'contain', filter:'brightness(0) invert(1)' }} />
            <button style={{ background: red, color:'#fff', border:'none', padding:'11px 20px', fontSize: 11, letterSpacing:'0.18em', fontWeight: 700, cursor:'pointer' }}>CONTACT →</button>
          </div>
        </nav>

        {/* HERO — modular grid: type block + photo block + index column */}
        <section style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', borderBottom:`1px solid ${line}` }}>
          <div style={{ padding:'64px 40px', borderRight:`1px solid ${line}`, display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight: 620 }}>
            <div style={{ display:'flex', justifyContent:'space-between', ...t.eyebrow, color: silver, fontSize: 10 }}>
              <span style={{ color: red }}>○ 001 — FUKUSHIMA SHOUJI</span><span>関東一円 / SINCE 2010</span>
            </div>
            <div>
              <div style={{ ...t.eyebrow, color: red, marginBottom: 18 }}>Professional Carriers · 大型車・ゲート車</div>
              <h1 style={{ ...t.h, fontSize: 132, margin: 0 }}>運ぶを、<br/><span style={{ color: red }}>誇りに</span>。</h1>
              <p style={{ fontSize: 16, lineHeight: 1.95, color:'#cccccd', maxWidth: 480, marginTop: 24 }}>
                57台の大型車・ゲート車が、関東一円を走る。プロフェッショナル運び屋集団 ── 株式会社 福嶋商事。
              </p>
            </div>
            <div style={{ ...t.eyebrow, color: silver, fontSize: 10 }}>—— SCROLL TO EXPLORE ↓</div>
          </div>
          <div style={{ display:'grid', gridTemplateRows:'1.5fr 1fr' }}>
            <div style={{ position:'relative', overflow:'hidden', borderBottom:`1px solid ${line}` }}>
              <Img src="photos/recruit-top.jpg" alt="fleet" />
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>
              {[['57','TRUCKS'],['62','STAFF']].map(([n,l],i) => (
                <div key={l} style={{ padding:'26px 28px', borderRight: i<1?`1px solid ${line}`:'none', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                  <div style={{ ...t.display, fontSize: 56, color: red, lineHeight: 1 }}>{n}</div>
                  <div style={{ ...t.eyebrow, color: silver, fontSize: 9, marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stat grid */}
        <section style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', borderBottom:`1px solid ${line}` }}>
          {[['57','TRUCKS'],['62','STAFF'],['06','BASES'],['2010','EST'],['12.7t','MAX'],['00','ACCIDENT']].map(([n,l],i) => (
            <div key={l} style={{ padding:'26px 22px', borderRight: i<5?`1px solid ${line}`:'none' }}>
              <div style={{ ...t.eyebrow, color: silver, fontSize: 9 }}>{l}</div>
              <div style={{ ...t.display, fontSize: 38, color:'#fff', marginTop: 8 }}>{n}<span style={{ color: red }}>.</span></div>
            </div>
          ))}
        </section>

        {/* Manifesto — grid block */}
        <section style={{ display:'grid', gridTemplateColumns:'80px 1fr 1.2fr', borderBottom:`1px solid ${line}` }}>
          <div style={{ ...cell, borderTop:'none', borderLeft:'none', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 0' }}>
            <div style={{ writingMode:'vertical-rl', ...t.display, fontSize: 14, letterSpacing:'0.4em', color: silver }}>01</div>
          </div>
          <div style={{ ...cell, borderTop:'none', padding:'80px 40px' }}>
            <div style={{ ...t.eyebrow, color: red }}>MANIFESTO</div>
            <h2 style={{ ...t.h, fontSize: 72, margin:'18px 0 0' }}>運ぶことに、<br/><span style={{ color: red }}>誇りを。</span></h2>
          </div>
          <div style={{ ...cell, borderTop:'none', borderRight:'none', padding:'80px 40px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <p style={{ fontSize: 16, lineHeight: 2.05, margin: 0, color:'#cccccd' }}>
              ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来ずっと大切にしてきました。プロとして、お客様の「運びたい」に最短距離で応える。
            </p>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop:`1px solid ${line}` }}>
              <div style={{ ...t.eyebrow, color: red, fontSize: 10 }}>OUR PHILOSOPHY</div>
              <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 24, marginTop: 8, fontWeight: 600 }}>{COMPANY.philosophy}</div>
            </div>
          </div>
        </section>

        {/* Fleet — 2-cell grid */}
        <section style={{ padding:'88px 40px', borderBottom:`1px solid ${line}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 40 }}>
            <div>
              <div style={{ ...t.eyebrow, color: red }}>02 / VEHICLE FLEET</div>
              <h2 style={{ ...t.h, fontSize: 60, margin:'12px 0 0' }}>FLEET SPEC</h2>
            </div>
            <span style={{ ...t.eyebrow, color: silver }}>2 CATEGORIES / 57 UNITS</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 1, background: line, border:`1px solid ${line}` }}>
            {[
              ['NO.01','総輪エアサス 低床ウイングゲート車','34','MAX 12,700kg · 2,410×9,600×2,570mm','photos/truck-02.jpg'],
              ['NO.02','エアサス低床ウイングゲート車','23','MAX 13,600kg · 全車格納ゲート装備','photos/vehicle-1.webp'],
            ].map(([no,name,n,spec,img]) => (
              <div key={no} style={{ background: black, display:'grid', gridTemplateColumns:'1.1fr 1fr' }}>
                <div style={{ position:'relative', overflow:'hidden', minHeight: 240 }}><Img src={img} alt={name} style={{ position:'absolute', inset: 0 }} /></div>
                <div style={{ padding:'26px 26px' }}>
                  <div style={{ ...t.eyebrow, color: silver, fontSize: 9 }}>{no}</div>
                  <div style={{ ...t.display, fontSize: 60, color: red, lineHeight: 1, marginTop: 6 }}>{n}</div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 18, marginTop: 12, fontWeight: 600 }}>{name}</div>
                  <div style={{ fontFamily:'"Inter", sans-serif', fontSize: 10, color: silver, marginTop: 10, letterSpacing:'0.02em', lineHeight: 1.6 }}>{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business — grid rows */}
        <section style={{ padding:'88px 40px', borderBottom:`1px solid ${line}` }}>
          <div style={{ ...t.eyebrow, color: red, marginBottom: 12 }}>03 / BUSINESS</div>
          <h2 style={{ ...t.h, fontSize: 60, margin:'0 0 40px' }}>事業内容</h2>
          <div style={{ borderTop:`1px solid ${line}` }}>
            {BUSINESS.map(([ti, en, d], i) => (
              <div key={ti} style={{ display:'grid', gridTemplateColumns:'90px 260px 1fr 44px', gap: 24, padding:'28px 0', borderBottom:`1px solid ${line}`, alignItems:'center' }}>
                <div style={{ ...t.display, fontSize: 38, color: red }}>0{i+1}</div>
                <div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 24, fontWeight: 600 }}>{ti}</div>
                  <div style={{ ...t.eyebrow, color: silver, fontSize: 9, marginTop: 6 }}>{en}</div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.85, color:'#cccccd' }}>{d}</div>
                <div style={{ textAlign:'right', color: red, fontSize: 18 }}>→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety + Recruit — 2-cell grid */}
        <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderBottom:`1px solid ${line}` }}>
          <div style={{ padding:'80px 40px', background: red, color:'#fff', borderRight:`1px solid ${black}` }}>
            <div style={{ ...t.eyebrow, color:'#fff' }}>04 / SAFETY</div>
            <h2 style={{ ...t.h, fontSize: 60, margin:'18px 0 0', color:'#fff' }}>ZERO<br/>ACCIDENTS.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.95, marginTop: 22, maxWidth: 460 }}>
              全営業所がGマーク認定を取得。デジタコ・ドラレコ全車両装備。安全はオプションではなく、私たちの規格です。
            </p>
            <div style={{ marginTop: 24, background:'#fff', display:'inline-block', padding:'12px 18px' }}>
              <Img src="logos/gmark.jpg" alt="Gマーク" style={{ height: 60, width:'auto', objectFit:'contain' }} />
            </div>
          </div>
          <div style={{ padding:'80px 40px' }}>
            <div style={{ ...t.eyebrow, color: red }}>05 / RECRUIT</div>
            <h2 style={{ ...t.h, fontSize: 60, margin:'18px 0 0' }}>同志、<span style={{ color: red }}>募集中。</span></h2>
            <p style={{ fontSize: 15, lineHeight: 1.95, marginTop: 22, maxWidth: 460, color:'#cccccd' }}>
              自分で考え、行動し、一緒に走り出してゆく "同志" を求めています。
            </p>
            <div style={{ marginTop: 24, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 1, background: line, border:`1px solid ${line}` }}>
              {[['月給','38〜50万円以上'],['配送','関東一円・長距離なし'],['手当','無事故・エコ'],['制度','取得支援・社員旅行']].map(([k,v]) => (
                <div key={k} style={{ background: black, padding:'14px 16px' }}>
                  <div style={{ ...t.eyebrow, color: red, fontSize: 9 }}>{k}</div>
                  <div style={{ fontSize: 13, marginTop: 6 }}>{v}</div>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 24, background: red, color:'#fff', border:'none', padding:'16px 30px', fontSize: 13, letterSpacing:'0.16em', fontWeight: 700, cursor:'pointer' }}>採用情報を見る →</button>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'100px 40px', textAlign:'center' }}>
          <div style={{ ...t.eyebrow, color: red }}>—— GET A QUOTE</div>
          <h2 style={{ ...t.h, fontSize: 120, margin:'22px 0' }}>運ぼう<span style={{ color: red }}>。</span></h2>
          <div style={{ ...t.display, fontSize: 46, color: red, fontWeight: 700 }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 13, color: silver, marginTop: 12 }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'48px 40px 26px', borderTop:`1px solid ${line}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 32, alignItems:'flex-start' }}>
            <Logo variant="small" height={24} style={{ filter:'brightness(0) invert(1)', opacity: 0.6 }} />
            <div style={{ fontSize: 12, lineHeight: 1.9 }}>〒{COMPANY.address}<br/>TEL {COMPANY.tel} / FAX 048-229-3630</div>
          </div>
          <div style={{ marginTop: 32, fontSize: 11, opacity: 0.4, letterSpacing:'0.2em' }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.CBase5Grid = CBase5Grid;
