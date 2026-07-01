// C-5 — MIDNIGHT / 上質・プレミアム系
// Black + red, but quiet and refined: deep near-black, generous negative space,
// red used as a single jewel accent, elegant serif. The "premium" reading of C.

const V8Midnight = () => {
  const { red } = BRAND;
  const black = '#08080a';
  const ink2 = '#101013';
  const line = '#1f1f24';
  const silver = '#8e8e95';

  const v8 = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 700, color:'#f4f4f2', lineHeight: 1.05, letterSpacing:'0.01em' },
    serif: { fontFamily:'"Cormorant Garamond", serif', fontWeight: 500 },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.42em', fontWeight: 500, textTransform:'uppercase' },
  };

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#f4f4f2', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'26px 56px' }}>
          <Logo variant="small" height={28} style={{ filter:'brightness(0) invert(1)', opacity: 0.92 }} />
          <div style={{ display:'flex', gap: 34, fontSize: 12, color:'#dad9d5', fontWeight: 400, letterSpacing:'0.12em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end' }}>
            <button style={{ background:'transparent', color:'#f4f4f2', border:`1px solid ${silver}55`, padding:'11px 24px', ...v8.eyebrow, fontSize: 10 }}>Contact</button>
          </div>
        </nav>

        {/* HERO — quiet, centered, lots of air */}
        <section style={{ padding:'120px 56px 96px', textAlign:'center', borderBottom:`1px solid ${line}` }}>
          <div style={{ ...v8.eyebrow, color: red, marginBottom: 36 }}>Est. 2010 · Professional Carriers</div>
          <h1 style={{ ...v8.h, fontSize: 116, margin: 0 }}>
            赤き、流儀<span style={{ color: red }}>。</span>
          </h1>
          <p style={{ ...v8.serif, fontSize: 28, color:'#c9c8c4', fontStyle:'italic', marginTop: 24 }}>The red way of carrying.</p>
          <p style={{ fontSize: 15, lineHeight: 2.0, color:'#a9a8a4', maxWidth: 540, margin:'30px auto 0' }}>
            57台の大型車・ゲート車が、関東一円を静かに、確かに走る。プロフェッショナル運び屋集団 — 株式会社 福嶋商事。
          </p>
        </section>

        {/* Hero image — full bleed, restrained */}
        <section style={{ position:'relative', height: 560, overflow:'hidden', borderBottom:`1px solid ${line}` }}>
          <Img src="photos/recruit-top.jpg" alt="fleet" />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(8,8,10,0.45) 0%, rgba(8,8,10,0.05) 50%, rgba(8,8,10,0.7) 100%)' }} />
          <div style={{ position:'absolute', bottom: 36, left: 56, ...v8.eyebrow, color:'#fff', opacity: 0.85 }}>57 Trucks · 関東一円</div>
          <div style={{ position:'absolute', bottom: 36, right: 56, ...v8.serif, fontSize: 40, color: red, fontStyle:'italic' }}>fleet</div>
        </section>

        {/* Manifesto */}
        <section style={{ padding:'128px 56px', borderBottom:`1px solid ${line}`, maxWidth: 1040, margin:'0 auto' }}>
          <div style={{ ...v8.eyebrow, color: red, textAlign:'center', marginBottom: 28 }}>—— Manifesto</div>
          <h2 style={{ ...v8.h, fontSize: 60, textAlign:'center', margin: 0 }}>運ぶことに、誇りを<span style={{ color: red }}>。</span></h2>
          <p style={{ fontSize: 17, lineHeight: 2.2, color:'#b9b8b4', textAlign:'center', marginTop: 36 }}>
            ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#f4f4f2', fontWeight: 500 }}>運び屋稼業</strong>」という意識を、創業以来ずっと大切にしてきました。プロとして、お客様の「運びたい」に最短距離で応える。その積み重ねが、福嶋商事の赤いトラックを今日も走らせています。
          </p>
          <div style={{ ...v8.serif, fontSize: 34, color: red, fontStyle:'italic', textAlign:'center', marginTop: 40 }}>“{COMPANY.philosophy}”</div>
        </section>

        {/* Stats — thin rule, elegant */}
        <section style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', borderBottom:`1px solid ${line}` }}>
          {[['57','保有車両'],['62','スタッフ'],['6','営業所'],['2010','創業']].map(([n,l],i)=>(
            <div key={l} style={{ padding:'48px 32px', textAlign:'center', borderRight: i<3?`1px solid ${line}`:'none' }}>
              <div style={{ ...v8.serif, fontSize: 72, color:'#f4f4f2', lineHeight: 1 }}>{n}</div>
              <div style={{ ...v8.eyebrow, fontSize: 9, color: silver, marginTop: 14 }}>{l}</div>
            </div>
          ))}
        </section>

        {/* Fleet — refined two-up */}
        <section style={{ padding:'120px 56px', borderBottom:`1px solid ${line}` }}>
          <div style={{ textAlign:'center', marginBottom: 56 }}>
            <div style={{ ...v8.eyebrow, color: red }}>—— Vehicle Fleet</div>
            <h2 style={{ ...v8.h, fontSize: 52, margin:'16px 0 0' }}>FLEET</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48 }}>
            {[['34','total air-susp 低床ウイングゲート車','MAX 12,700kg','photos/vehicle-1.webp'],
              ['23','エアサス低床ウイングゲート車','MAX 13,600kg','photos/vehicle-2.webp']].map(([n,name,spec,img])=>(
              <div key={n}>
                <div style={{ height: 360, overflow:'hidden' }}><Img src={img} alt={name} /></div>
                <div style={{ display:'flex', alignItems:'baseline', gap: 14, marginTop: 24 }}>
                  <div style={{ ...v8.serif, fontSize: 56, color: red, lineHeight: 1 }}>{n}</div>
                  <div style={{ ...v8.eyebrow, fontSize: 9, color: silver }}>units</div>
                </div>
                <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 21, marginTop: 12, fontWeight: 500 }}>{name}</div>
                <div style={{ fontSize: 12, color: silver, marginTop: 8, letterSpacing:'0.04em' }}>{spec}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Business */}
        <section style={{ padding:'120px 56px', borderBottom:`1px solid ${line}`, maxWidth: 1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom: 48 }}>
            <div style={{ ...v8.eyebrow, color: red }}>—— Business</div>
            <h2 style={{ ...v8.h, fontSize: 52, margin:'16px 0 0' }}>事業内容</h2>
          </div>
          <div style={{ borderTop:`1px solid ${line}` }}>
            {BUSINESS.map(([t,en,d],i)=>(
              <div key={t} style={{ display:'grid', gridTemplateColumns:'72px 1fr 1.4fr', gap: 36, padding:'40px 0', borderBottom:`1px solid ${line}`, alignItems:'baseline' }}>
                <div style={{ ...v8.serif, fontSize: 40, color: red }}>0{i+1}</div>
                <div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, fontWeight: 600 }}>{t}</div>
                  <div style={{ ...v8.eyebrow, fontSize: 9, color: silver, marginTop: 8 }}>{en}</div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 2.0, color:'#b9b8b4' }}>{d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'140px 56px', textAlign:'center' }}>
          <div style={{ ...v8.eyebrow, color: red }}>—— Get in touch</div>
          <h2 style={{ ...v8.h, fontSize: 92, margin:'26px 0 20px' }}>運ぼう<span style={{ color: red }}>。</span></h2>
          <div style={{ ...v8.serif, fontSize: 56, color: red, fontStyle:'italic' }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 13, color: silver, marginTop: 16 }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付中</div>
        </section>

        <footer style={{ background:'#050506', color:'#7a7a80', padding:'56px 56px 30px', borderTop:`1px solid ${line}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 36, alignItems:'flex-start' }}>
            <Logo variant="small" height={26} style={{ filter:'brightness(0) invert(1)', opacity: 0.55 }} />
            <div style={{ fontSize: 13, lineHeight: 2.0 }}>〒{COMPANY.address}<br/>TEL {COMPANY.tel} / FAX 048-229-3630</div>
            <div style={{ display:'flex', gap: 22, ...v8.eyebrow, fontSize: 9 }}>
              {['事業','車両','安全','会社','採用'].map(x => <span key={x}>{x}</span>)}
            </div>
          </div>
          <div style={{ marginTop: 40, ...v8.eyebrow, fontSize: 9, opacity: 0.5 }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V8Midnight = V8Midnight;
