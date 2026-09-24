// C-δ — シネマワイド / CINEMA
// C案（Black×Red）を映画的に。レターボックス帯、横長ワイドクロップ、
// フィルムストリップ的な連続配置。走る車のスピード感を映像的に演出。

const CBase4Cinema = () => {
  const { red } = BRAND;
  const black = '#0a0a0b';
  const silver = '#9a9aa0';

  const t = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', letterSpacing:'-0.01em', lineHeight: 0.98 },
    display: { fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.42em', fontWeight: 700, textTransform:'uppercase' },
  };

  const Bar = () => <div style={{ height: 28, background: black }} />;

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'20px 48px' }}>
          <Logo variant="small" height={28} style={{ filter:'brightness(0) invert(1)' }} />
          <div style={{ display:'flex', gap: 30, fontSize: 12, color:'#fff', fontWeight: 500, letterSpacing:'0.1em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap: 16 }}>
            <Img src="external/impul.png" alt="TEAM IMPUL" style={{ width:'auto', height: 18, objectFit:'contain', filter:'brightness(0) invert(1)' }} />
            <button style={{ background: red, color:'#fff', border:'none', padding:'11px 20px', fontSize: 11, letterSpacing:'0.18em', fontWeight: 700, cursor:'pointer' }}>CONTACT →</button>
          </div>
        </nav>

        {/* HERO — widescreen letterboxed cinematic frame */}
        <section style={{ position:'relative', height: 640, overflow:'hidden' }}>
          <Img src="photos/recruit-top.jpg" alt="fleet" style={{ position:'absolute', inset: 0 }} />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.1) 45%, rgba(10,10,11,0.9) 100%)' }} />
          {/* letterbox bars */}
          <div style={{ position:'absolute', top: 0, left: 0, right: 0, height: 56, background: black }} />
          <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, height: 56, background: black }} />
          {/* film ticks */}
          <div style={{ position:'absolute', top: 14, left: 48, right: 48, display:'flex', justifyContent:'space-between', ...t.eyebrow, fontSize: 10, color: silver }}>
            <span>● REC · CAM-01</span><span style={{ color: red }}>FUKUSHIMA SHOUJI · SCENE 01</span><span>23.98 fps</span>
          </div>
          <div style={{ position:'absolute', bottom: 72, left: 48, right: 48 }}>
            <div style={{ ...t.eyebrow, color: red, marginBottom: 16 }}>○ Professional Carriers · 関東一円</div>
            <h1 style={{ ...t.h, fontSize: 128, margin: 0 }}>赤が、<span style={{ color: red }}>走る</span>。</h1>
            <p style={{ fontSize: 16, lineHeight: 1.9, color:'#dcdcdf', maxWidth: 560, marginTop: 20 }}>
              57台の大型車・ゲート車が、関東一円を走る。プロフェッショナル運び屋集団 ── 株式会社 福嶋商事。
            </p>
          </div>
        </section>

        {/* Stat strip */}
        <section style={{ background: red, color:'#fff', padding:'30px 48px', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 24, alignItems:'center' }}>
          {[['57','TRUCKS'],['62','STAFF'],['6','BASES'],['全車','AIR-SUSP'],['G-MARK','×6']].map(([n,l]) => (
            <div key={l} style={{ display:'flex', alignItems:'baseline', gap: 12, justifyContent:'center' }}>
              <div style={{ ...t.display, fontSize: 50, fontWeight: 700, lineHeight: 1 }}>{n}</div>
              <div style={{ ...t.eyebrow, fontSize: 10 }}>{l}</div>
            </div>
          ))}
        </section>

        {/* Manifesto */}
        <section style={{ padding:'96px 48px', textAlign:'center', maxWidth: 900, margin:'0 auto' }}>
          <div style={{ ...t.eyebrow, color: red, marginBottom: 18 }}>01 / MANIFESTO</div>
          <h2 style={{ ...t.h, fontSize: 72, margin:'0 0 32px' }}>運ぶことに、<span style={{ color: red }}>誇りを。</span></h2>
          <p style={{ fontSize: 17, lineHeight: 2.1, color:'#cccccd', margin:'0 auto' }}>
            ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来ずっと大切にしてきました。プロとして、お客様の「運びたい」に最短距離で応える。その積み重ねが、福嶋商事の赤いトラックを今日も走らせています。
          </p>
          <div style={{ marginTop: 32, display:'inline-block', padding:'16px 32px', border:`1px solid ${red}` }}>
            <div style={{ ...t.eyebrow, color: red, fontSize: 10 }}>OUR PHILOSOPHY</div>
            <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, marginTop: 8, fontWeight: 600 }}>{COMPANY.philosophy}</div>
          </div>
        </section>

        {/* Film strip — wide cinematic bands */}
        <section>
          {[
            ['02 / FLEET','車両', 'photos/truck-02.jpg', '総輪エアサス 低床ウイングゲート車 · 34台 · MAX 12,700kg'],
            ['03 / WAREHOUSE','倉庫保管', 'photos/service-warehouse-1.webp', '越谷120坪・群馬350坪 · 北関東〜首都圏物流の結節点'],
          ].map(([tag, ti, img, spec], i) => (
            <div key={ti}>
              <Bar />
              <div style={{ position:'relative', height: 420, overflow:'hidden' }}>
                <Img src={img} alt={ti} />
                <div style={{ position:'absolute', inset: 0, background: i%2 ? 'linear-gradient(270deg, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0.05) 60%)' : 'linear-gradient(90deg, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0.05) 60%)' }} />
                <div style={{ position:'absolute', top: '50%', transform:'translateY(-50%)', [i%2?'right':'left']: 56, textAlign: i%2?'right':'left', maxWidth: 480 }}>
                  <div style={{ ...t.eyebrow, color: red, marginBottom: 14 }}>{tag}</div>
                  <h3 style={{ ...t.h, fontSize: 68, margin: 0 }}>{ti}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color:'#cccccd', marginTop: 16 }}>{spec}</p>
                </div>
              </div>
            </div>
          ))}
          <Bar />
        </section>

        {/* Business index */}
        <section style={{ padding:'96px 48px' }}>
          <div style={{ ...t.eyebrow, color: red, marginBottom: 14 }}>04 / BUSINESS</div>
          <h2 style={{ ...t.h, fontSize: 62, margin:'0 0 44px' }}>事業内容</h2>
          <div style={{ borderTop:'1px solid #26262b' }}>
            {BUSINESS.map(([ti, en, d], i) => (
              <div key={ti} style={{ display:'grid', gridTemplateColumns:'80px 260px 1fr 44px', gap: 28, padding:'30px 0', borderBottom:'1px solid #26262b', alignItems:'center' }}>
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

        {/* Recruit — cinematic band */}
        <section style={{ position:'relative', height: 460, overflow:'hidden' }}>
          <div style={{ position:'absolute', top: 0, left: 0, right: 0, height: 40, background: black, zIndex: 2 }} />
          <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, height: 40, background: black, zIndex: 2 }} />
          <Img src="photos/training-kensyu.webp" alt="研修" style={{ position:'absolute', inset: 0 }} />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(90deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.2) 70%)' }} />
          <div style={{ position:'absolute', top: '50%', left: 56, transform:'translateY(-50%)', maxWidth: 520 }}>
            <div style={{ ...t.eyebrow, color: red, marginBottom: 14 }}>05 / RECRUIT</div>
            <h3 style={{ ...t.h, fontSize: 72, margin: 0 }}>同志、<span style={{ color: red }}>募集中。</span></h3>
            <p style={{ fontSize: 15, lineHeight: 1.9, color:'#dcdcdf', marginTop: 18 }}>
              自分で考え、行動し、一緒に走り出してゆく "同志" を求めています。月給38〜50万円以上／関東一円・長距離なし。
            </p>
            <button style={{ marginTop: 24, background: red, color:'#fff', border:'none', padding:'16px 30px', fontSize: 13, letterSpacing:'0.16em', fontWeight: 700, cursor:'pointer' }}>採用情報を見る →</button>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'104px 48px', textAlign:'center' }}>
          <div style={{ ...t.eyebrow, color: red }}>—— GET A QUOTE</div>
          <h2 style={{ ...t.h, fontSize: 128, margin:'22px 0' }}>運ぼう<span style={{ color: red }}>。</span></h2>
          <div style={{ ...t.display, fontSize: 48, color: red, fontWeight: 700 }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 13, color: silver, marginTop: 12 }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'48px 48px 26px', borderTop:'1px solid #26262b' }}>
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

window.CBase4Cinema = CBase4Cinema;
