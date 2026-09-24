// C-β — スプリット / SPLIT
// C案（Black×Red）の非対称2カラム展開。左：黒地に巨大タイポ、右：全高写真。
// 縦割りの緊張感と編集的グリッドで、静と動を対比させる。

const CBase2Split = () => {
  const { red } = BRAND;
  const black = '#0b0b0c';
  const steel = '#232327';
  const silver = '#a8a8ad';

  const t = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', letterSpacing:'-0.01em', lineHeight: 0.96 },
    display: { fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.42em', fontWeight: 700, textTransform:'uppercase' },
  };

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'22px 44px', borderBottom:`1px solid ${steel}` }}>
          <Logo variant="small" height={30} style={{ filter:'brightness(0) invert(1)' }} />
          <div style={{ display:'flex', gap: 30, fontSize: 13, color:'#fff', fontWeight: 500, letterSpacing:'0.08em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap: 16 }}>
            <Img src="external/impul.png" alt="TEAM IMPUL" style={{ width:'auto', height: 20, objectFit:'contain', filter:'brightness(0) invert(1)' }} />
            <button style={{ background: red, color:'#fff', border:'none', padding:'12px 22px', fontSize: 12, letterSpacing:'0.18em', fontWeight: 700, cursor:'pointer' }}>CONTACT →</button>
          </div>
        </nav>

        {/* HERO — split: left text panel, right photo */}
        <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight: 720, borderBottom:`1px solid ${steel}` }}>
          <div style={{ padding:'80px 56px 64px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:`1px solid ${steel}` }}>
            <div style={{ ...t.eyebrow, color: red }}>○ Professional Carriers · 関東一円</div>
            <div>
              <h1 style={{ ...t.h, fontSize: 150, margin:'0 0 8px' }}>赤き、<br/><span style={{ color: red }}>流儀</span>。</h1>
              <p style={{ fontSize: 16, lineHeight: 2.0, color:'#cccccd', maxWidth: 460, marginTop: 26 }}>
                57台の大型車・ゲート車が、関東一円を走る。プロフェッショナル運び屋集団 ── 株式会社 福嶋商事。
              </p>
            </div>
            <div style={{ display:'flex', gap: 32, alignItems:'baseline' }}>
              <div><span style={{ ...t.display, fontSize: 44, color: red }}>2010</span><span style={{ ...t.eyebrow, fontSize: 9, color: silver, marginLeft: 10 }}>ESTABLISHED</span></div>
              <div><span style={{ ...t.display, fontSize: 44, color:'#fff' }}>57</span><span style={{ ...t.eyebrow, fontSize: 9, color: silver, marginLeft: 10 }}>TRUCKS</span></div>
            </div>
          </div>
          <div style={{ position:'relative', overflow:'hidden' }}>
            <Img src="photos/recruit-top.jpg" alt="fleet" style={{ position:'absolute', inset: 0 }} />
            <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(11,11,12,0.35) 0%, rgba(11,11,12,0.05) 40%, rgba(11,11,12,0.55) 100%)' }} />
            <div style={{ position:'absolute', top: 28, right: 28, ...t.eyebrow, color:'#fff', textAlign:'right', lineHeight: 1.8 }}>
              FUKUSHIMA SHOUJI<br/><span style={{ color: red }}>○ EST. 2010</span>
            </div>
            <div style={{ position:'absolute', bottom: 28, right: 28, ...t.eyebrow, color: silver }}>SCROLL ↓</div>
          </div>
        </section>

        {/* Stat strip */}
        <section style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', borderBottom:`1px solid ${steel}` }}>
          {[['57','TRUCKS'],['62','STAFF'],['06','BASES'],['12.7t','MAX LOAD'],['00','ACCIDENT']].map(([n,l],i) => (
            <div key={l} style={{ padding:'30px 26px', borderRight: i<4?`1px solid ${steel}`:'none' }}>
              <div style={{ ...t.eyebrow, color: silver, fontSize: 9 }}>{l}</div>
              <div style={{ ...t.display, fontSize: 46, color:'#fff', marginTop: 8 }}>{n}<span style={{ color: red }}>.</span></div>
            </div>
          ))}
        </section>

        {/* Manifesto — split */}
        <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderBottom:`1px solid ${steel}` }}>
          <div style={{ padding:'96px 56px', borderRight:`1px solid ${steel}` }}>
            <div style={{ ...t.eyebrow, color: red }}>01 / MANIFESTO</div>
            <h2 style={{ ...t.h, fontSize: 88, margin:'20px 0 0' }}>運ぶことに、<br/><span style={{ color: red }}>誇りを。</span></h2>
          </div>
          <div style={{ padding:'96px 56px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <p style={{ fontSize: 17, lineHeight: 2.05, margin: 0, color:'#cccccd' }}>
              ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来ずっと大切にしてきました。プロとして、お客様の「運びたい」に最短距離で応える。
            </p>
            <div style={{ marginTop: 30, padding:'20px 24px', borderLeft:`3px solid ${red}` }}>
              <div style={{ ...t.eyebrow, color: red, fontSize: 10 }}>OUR PHILOSOPHY</div>
              <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 25, marginTop: 8, fontWeight: 600 }}>{COMPANY.philosophy}</div>
            </div>
          </div>
        </section>

        {/* Fleet — split cards */}
        <section style={{ padding:'96px 56px', borderBottom:`1px solid ${steel}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 44 }}>
            <div>
              <div style={{ ...t.eyebrow, color: red }}>02 / VEHICLE FLEET</div>
              <h2 style={{ ...t.h, fontSize: 62, margin:'14px 0 0' }}>FLEET SPEC</h2>
            </div>
            <span style={{ ...t.eyebrow, color: silver }}>2 CATEGORIES / 57 UNITS</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 1, background: steel, border:`1px solid ${steel}` }}>
            {[
              ['NO.01','総輪エアサス 低床ウイングゲート車','34','units','MAX 12,700kg · 2,410×9,600×2,570mm','photos/truck-02.jpg'],
              ['NO.02','エアサス低床ウイングゲート車','23','units','MAX 13,600kg · 全車格納ゲート装備','photos/vehicle-1.webp'],
            ].map(([no,name,n,u,spec,img]) => (
              <div key={no} style={{ background: black }}>
                <div style={{ position:'relative', height: 300, overflow:'hidden' }}>
                  <Img src={img} alt={name} />
                  <div style={{ position:'absolute', top: 14, left: 14, ...t.eyebrow, fontSize: 10, background:'rgba(11,11,12,0.7)', padding:'5px 9px', color:'#fff' }}>{no}</div>
                </div>
                <div style={{ padding:'24px 26px' }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap: 12 }}>
                    <div style={{ ...t.display, fontSize: 52, color: red, lineHeight: 1 }}>{n}</div>
                    <div style={{ ...t.eyebrow, color: silver, fontSize: 9 }}>{u}</div>
                  </div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 20, marginTop: 12, fontWeight: 600 }}>{name}</div>
                  <div style={{ fontFamily:'"Inter", sans-serif', fontSize: 11, color: silver, marginTop: 12, letterSpacing:'0.02em' }}>{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business */}
        <section style={{ padding:'96px 56px', borderBottom:`1px solid ${steel}` }}>
          <div style={{ ...t.eyebrow, color: red, marginBottom: 14 }}>03 / BUSINESS</div>
          <h2 style={{ ...t.h, fontSize: 62, margin:'0 0 44px' }}>事業内容</h2>
          <div style={{ borderTop:`1px solid ${steel}` }}>
            {BUSINESS.map(([ti, en, d], i) => (
              <div key={ti} style={{ display:'grid', gridTemplateColumns:'80px 260px 1fr 44px', gap: 28, padding:'30px 0', borderBottom:`1px solid ${steel}`, alignItems:'center' }}>
                <div style={{ ...t.display, fontSize: 40, color: red }}>0{i+1}</div>
                <div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, fontWeight: 600 }}>{ti}</div>
                  <div style={{ ...t.eyebrow, color: silver, fontSize: 9, marginTop: 6 }}>{en}</div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.9, color:'#cccccd' }}>{d}</div>
                <div style={{ textAlign:'right', color: red, fontSize: 18 }}>→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Recruit — split */}
        <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderBottom:`1px solid ${steel}` }}>
          <Img src="photos/training-kensyu.webp" alt="研修" style={{ minHeight: 440 }} />
          <div style={{ padding:'88px 56px', background: red, color:'#fff' }}>
            <div style={{ ...t.eyebrow, color:'#fff' }}>05 / RECRUIT</div>
            <h2 style={{ ...t.h, fontSize: 76, margin:'18px 0 0', color:'#fff' }}>同志、募集中。</h2>
            <p style={{ fontSize: 16, lineHeight: 2.0, marginTop: 24, maxWidth: 460 }}>
              フツーの社員募集ではありません。自分で考え、行動し、一緒に走り出してゆく<strong>"同志"</strong>を求めています。
            </p>
            <div style={{ marginTop: 28, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
              {[['月給','38〜50万円以上'],['配送','関東一円・長距離なし'],['手当','無事故・エコドライブ'],['制度','取得支援・社員旅行']].map(([k,v]) => (
                <div key={k} style={{ padding:'14px 16px', border:'1px solid rgba(255,255,255,0.35)' }}>
                  <div style={{ ...t.eyebrow, fontSize: 9, opacity: 0.85 }}>{k}</div>
                  <div style={{ fontSize: 14, marginTop: 6 }}>{v}</div>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 28, background:'#fff', color: red, border:'none', padding:'18px 34px', fontSize: 14, letterSpacing:'0.16em', fontWeight: 700, cursor:'pointer' }}>採用情報を見る →</button>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'104px 56px', textAlign:'center' }}>
          <div style={{ ...t.eyebrow, color: red }}>—— GET A QUOTE</div>
          <h2 style={{ ...t.h, fontSize: 132, margin:'22px 0' }}>運ぼう<span style={{ color: red }}>。</span></h2>
          <div style={{ ...t.display, fontSize: 48, color: red, fontWeight: 700 }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 13, color: silver, marginTop: 12 }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'48px 56px 26px', borderTop:`1px solid ${steel}` }}>
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

window.CBase2Split = CBase2Split;
