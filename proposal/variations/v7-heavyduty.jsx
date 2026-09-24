// C-4 — HEAVY DUTY / 重量級・インダストリアル系
// Black + red with hazard (red/black diagonal) accents, condensed uppercase,
// industrial tags, steel plate panels. The "heavy machinery" reading of C.

const V7HeavyDuty = () => {
  const { red } = BRAND;
  const black = '#0c0c0d';
  const plate = '#161617';
  const line = '#2c2c30';
  const silver = '#9c9ca1';
  const hazard = `repeating-linear-gradient(45deg, ${red} 0 22px, #0c0c0d 22px 44px)`;

  const v7 = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', lineHeight: 0.96 },
    cond: { fontFamily:'"Inter", sans-serif', fontWeight: 800, letterSpacing:'-0.01em' },
    eyebrow: { fontFamily:'"Inter", sans-serif', fontSize: 11, letterSpacing:'0.34em', fontWeight: 800, textTransform:'uppercase' },
  };

  const Tag = ({ children }) => (
    <span style={{ display:'inline-block', border:`1px solid ${silver}55`, padding:'6px 12px', ...v7.eyebrow, fontSize: 10, color:'#fff' }}>{children}</span>
  );

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* hazard top edge */}
        <div style={{ height: 12, background: hazard }} />

        {/* Nav */}
        <nav style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 44px', borderBottom:`1px solid ${line}` }}>
          <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
            <Logo variant="small" height={28} style={{ filter:'brightness(0) invert(1)' }} />
            <span style={{ ...v7.eyebrow, fontSize: 9, color: silver }}>HEAVY HAUL · 大型運送</span>
          </div>
          <div style={{ display:'flex', gap: 26, fontSize: 13, fontWeight: 600, letterSpacing:'0.06em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <button style={{ background: red, color:'#fff', border:'none', padding:'12px 22px', ...v7.eyebrow, fontSize: 11 }}>CONTACT</button>
        </nav>

        {/* HERO */}
        <section style={{ position:'relative', height: 720, overflow:'hidden', borderBottom:`1px solid ${line}` }}>
          <Img src="photos/truck-02.jpg" alt="truck" style={{ position:'absolute', inset: 0 }} />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(12,12,13,0.7) 0%, rgba(12,12,13,0.25) 45%, rgba(12,12,13,0.96) 100%)' }} />
          <div style={{ position:'absolute', top: 0, bottom: 0, right: 0, width: 14, background: hazard }} />

          <div style={{ position:'absolute', top: 34, left: 44, ...v7.eyebrow, color: red }}>⚠ MAX LOAD 12,700kg · 全車エアサス</div>
          <div style={{ position:'absolute', bottom: 56, left: 44, right: 64 }}>
            <div style={{ display:'flex', gap: 10, marginBottom: 22 }}><Tag>大型車</Tag><Tag>ウイングゲート</Tag><Tag>関東一円</Tag></div>
            <h1 style={{ ...v7.h, fontSize: 168, margin: 0 }}>
              重量級の、<span style={{ color: red }}>信頼。</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.9, color:'#d4d4d4', maxWidth: 560, marginTop: 26 }}>
              57台の大型車・ゲート車。重い荷物も、難しい現場も。プロフェッショナル運び屋集団・株式会社 福嶋商事が確実に運びます。
            </p>
          </div>
        </section>

        {/* Spec plate */}
        <section style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', background: plate, borderBottom:`1px solid ${line}` }}>
          {[['57','保有車両'],['12.7t','最大積載'],['62','スタッフ'],['6','営業所'],['×6','Gマーク']].map(([n,l],i)=>(
            <div key={l} style={{ padding:'30px 24px', borderRight: i<4?`1px solid ${line}`:'none', textAlign:'center' }}>
              <div style={{ ...v7.cond, fontSize: 52, color:'#fff', lineHeight: 1 }}>{n}</div>
              <div style={{ ...v7.eyebrow, fontSize: 9, color: red, marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </section>

        {/* Manifesto on steel */}
        <section style={{ padding:'100px 44px', display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 56, borderBottom:`1px solid ${line}` }}>
          <div>
            <div style={{ ...v7.eyebrow, color: red }}>01 / Manifesto</div>
            <h2 style={{ ...v7.h, fontSize: 78, margin:'16px 0 0' }}>運ぶことに、<br/><span style={{ color: red }}>誇りを。</span></h2>
          </div>
          <div style={{ paddingTop: 12 }}>
            <p style={{ fontSize: 16, lineHeight: 2.05, color:'#cccccd', margin: 0 }}>
              ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来ずっと大切にしてきました。重さにも、難しさにも、プロとして応える。
            </p>
            <div style={{ marginTop: 30, padding:'22px 26px', background: plate, borderTop:`3px solid ${red}` }}>
              <div style={{ ...v7.eyebrow, color: red, fontSize: 9 }}>Philosophy</div>
              <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, marginTop: 8, fontWeight: 600 }}>{COMPANY.philosophy}</div>
            </div>
          </div>
        </section>

        {/* Fleet — plate cards */}
        <section style={{ padding:'100px 44px', borderBottom:`1px solid ${line}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 40 }}>
            <div>
              <div style={{ ...v7.eyebrow, color: red }}>02 / Vehicle Fleet</div>
              <h2 style={{ ...v7.h, fontSize: 64, margin:'14px 0 0' }}>FLEET SPEC</h2>
            </div>
            <div style={{ height: 8, width: 120, background: hazard }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }}>
            {[['NO.01','34','total air-susp 低床ウイングゲート車','MAX 12,700kg · 2,410×9,600×2,570mm','photos/vehicle-1.webp'],
              ['NO.02','23','エアサス低床ウイングゲート車','MAX 13,600kg · 全車格納ゲート装備','photos/vehicle-2.webp']].map(([no,n,name,spec,img])=>(
              <div key={no} style={{ background: plate, border:`1px solid ${line}` }}>
                <div style={{ position:'relative', height: 280, overflow:'hidden' }}>
                  <Img src={img} alt={name} />
                  <div style={{ position:'absolute', top: 0, left: 0, background: red, color:'#fff', padding:'8px 14px', ...v7.eyebrow, fontSize: 10 }}>{no}</div>
                </div>
                <div style={{ padding:'24px 26px' }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap: 12 }}>
                    <div style={{ ...v7.cond, fontSize: 60, color: red, lineHeight: 1 }}>{n}</div>
                    <div style={{ ...v7.eyebrow, fontSize: 9, color: silver }}>units</div>
                  </div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 20, marginTop: 12, fontWeight: 600 }}>{name}</div>
                  <div style={{ fontSize: 12, color: silver, marginTop: 10 }}>{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety hazard band */}
        <section style={{ padding:'100px 44px', position:'relative', borderBottom:`1px solid ${line}` }}>
          <div style={{ position:'absolute', top: 0, left: 0, right: 0, height: 10, background: hazard }} />
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 56, alignItems:'center' }}>
            <div>
              <div style={{ ...v7.eyebrow, color: red }}>03 / Safety</div>
              <h2 style={{ ...v7.h, fontSize: 72, margin:'16px 0 0' }}>事故ゼロが、<br/><span style={{ color: red }}>規格です。</span></h2>
              <p style={{ fontSize: 15, lineHeight: 2.0, color:'#cccccd', marginTop: 26, maxWidth: 540 }}>
                全営業所がGマーク認定を取得。3ヶ月ごとの安全会議、外部KYT、デジタコ・ドラレコ全車装備。安全はオプションではなく、私たちの最低規格です。
              </p>
              <div style={{ display:'flex', gap: 10, marginTop: 26 }}><Tag>G-MARK ×6</Tag><Tag>デジタコ全車</Tag><Tag>KYT 外部機関</Tag></div>
            </div>
            <div style={{ background:'#fff', padding: 30 }}>
              <Img src="logos/gmark.jpg" alt="Gマーク" style={{ width:'100%', height: 200, objectFit:'contain' }} />
              <div style={{ ...v7.eyebrow, color: red, fontSize: 9, marginTop: 18 }}>全6営業所 安全性優良事業所</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'104px 44px', textAlign:'center' }}>
          <div style={{ ...v7.eyebrow, color: red }}>—— Request a Quote</div>
          <h2 style={{ ...v7.h, fontSize: 132, margin:'22px 0' }}>運ぼう<span style={{ color: red }}>。</span></h2>
          <div style={{ ...v7.cond, fontSize: 56, color:'#fff' }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 14, color: silver, marginTop: 12 }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'0 0 26px' }}>
          <div style={{ height: 10, background: hazard, marginBottom: 36 }} />
          <div style={{ padding:'0 44px', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 32 }}>
            <Logo variant="small" height={26} style={{ filter:'brightness(0) invert(1)', opacity: 0.6 }} />
            <div style={{ fontSize: 13, lineHeight: 1.9 }}>〒{COMPANY.address}<br/>TEL {COMPANY.tel} / FAX 048-229-3630</div>
          </div>
          <div style={{ padding:'32px 44px 0', fontSize: 11, opacity: 0.4, letterSpacing:'0.2em' }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V7HeavyDuty = V7HeavyDuty;
