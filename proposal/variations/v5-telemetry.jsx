// C-2 — TELEMETRY / 計器盤系
// Black + racing red, but driven by data: thin grid lines, monospace readouts,
// coordinate ticks, spec panels. Engineering-precision flavour of the C theme.

const V5Telemetry = () => {
  const { red } = BRAND;
  const black = '#0a0a0b';
  const panel = '#121214';
  const line = '#26262b';
  const silver = '#9a9aa0';
  const mono = '"SF Mono", ui-monospace, "Roboto Mono", Menlo, monospace';

  const v5 = {
    h: { fontFamily:'"Shippori Mincho", serif', fontWeight: 800, color:'#fff', lineHeight: 0.98 },
    mono: { fontFamily: mono, letterSpacing:'0.04em' },
    eyebrow: { fontFamily: mono, fontSize: 11, letterSpacing:'0.32em', fontWeight: 500, textTransform:'uppercase' },
  };

  const Tick = ({ label, dim }) => (
    <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
      <span style={{ width: 6, height: 6, background: red, display:'inline-block' }} />
      <span style={{ ...v5.mono, fontSize: 10, color: dim ? silver : '#fff', letterSpacing:'0.18em' }}>{label}</span>
    </div>
  );

  return (
    <ABFrame bg={black}>
      <div style={{ width:'100%', background: black, color:'#fff', fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif' }}>
        {/* Nav */}
        <nav style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 40px', borderBottom:`1px solid ${line}` }}>
          <div style={{ display:'flex', alignItems:'center', gap: 20 }}>
            <Logo variant="small" height={26} style={{ filter:'brightness(0) invert(1)' }} />
            <span style={{ ...v5.mono, fontSize: 10, color: silver, letterSpacing:'0.2em' }}>SYS · FLEET-CTRL v2.6</span>
          </div>
          <div style={{ display:'flex', gap: 26, ...v5.mono, fontSize: 11, color:'#fff', letterSpacing:'0.12em' }}>
            {NAV.map(n => <span key={n} style={{ cursor:'pointer' }}>{n}</span>)}
          </div>
          <button style={{ background:'transparent', color: red, border:`1px solid ${red}`, padding:'9px 18px', ...v5.mono, fontSize: 11, letterSpacing:'0.18em' }}>CONTACT_</button>
        </nav>

        {/* HERO — readout grid */}
        <section style={{ position:'relative', borderBottom:`1px solid ${line}` }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.15fr 1fr' }}>
            <div style={{ padding:'72px 40px 56px', borderRight:`1px solid ${line}` }}>
              <div style={{ ...v5.eyebrow, color: red, marginBottom: 28 }}>● LIVE · 関東一円 OPERATING</div>
              <h1 style={{ ...v5.h, fontSize: 132, margin: 0 }}>
                57台、<br/><span style={{ color: red }}>稼働中。</span>
              </h1>
              <p style={{ fontSize: 15, lineHeight: 2.0, color:'#c7c7cd', maxWidth: 460, marginTop: 32 }}>
                大型車・ゲート車によるプロフェッショナル運送。全車両をデジタコ・ドラレコで把握し、関東一円へ正確に届ける ── 株式会社 福嶋商事。
              </p>
              <div style={{ marginTop: 36, display:'flex', flexWrap:'wrap', gap: 18 }}>
                <Tick label="DIGITACHO 100%" />
                <Tick label="AIR-SUSP ALL" />
                <Tick label="G-MARK ×6" />
              </div>
            </div>
            <div style={{ position:'relative', overflow:'hidden', minHeight: 520 }}>
              <Img src="photos/recruit-top.jpg" alt="fleet" style={{ position:'absolute', inset: 0 }} />
              <div style={{ position:'absolute', inset: 0, background:'linear-gradient(90deg, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0.1) 60%)' }} />
              {/* corner readout */}
              <div style={{ position:'absolute', top: 20, right: 20, ...v5.mono, fontSize: 10, color:'#fff', textAlign:'right', lineHeight: 1.9, opacity: 0.9 }}>
                LAT 35.81 N<br/>LON 139.72 E<br/><span style={{ color: red }}>CAM-01 · REC ●</span>
              </div>
              <div style={{ position:'absolute', bottom: 20, left: 20, right: 20, height: 1, background:`${red}` }} />
            </div>
          </div>
        </section>

        {/* Readout strip */}
        <section style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', borderBottom:`1px solid ${line}` }}>
          {[['57','TRUCKS'],['62','STAFF'],['06','BASES'],['2010','EST'],['12.7t','MAX LOAD'],['00','ACCIDENT']].map(([n,l],i) => (
            <div key={l} style={{ padding:'28px 24px', borderRight: i<5?`1px solid ${line}`:'none' }}>
              <div style={{ ...v5.eyebrow, color: silver, fontSize: 9 }}>{l}</div>
              <div style={{ ...v5.mono, fontSize: 40, color:'#fff', marginTop: 10, fontWeight: 500 }}>{n}<span style={{ color: red }}>.</span></div>
            </div>
          ))}
        </section>

        {/* Manifesto */}
        <section style={{ padding:'96px 40px', borderBottom:`1px solid ${line}`, display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 56 }}>
          <div>
            <div style={{ ...v5.eyebrow, color: red }}>01 / MANIFESTO</div>
            <h2 style={{ ...v5.h, fontSize: 80, margin:'18px 0 0' }}>運ぶことに、<br/><span style={{ color: red }}>誇りを。</span></h2>
          </div>
          <div style={{ paddingTop: 14 }}>
            <p style={{ fontSize: 16, lineHeight: 2.05, color:'#c7c7cd', margin: 0 }}>
              ただモノを運ぶだけなら、誰にでもできる。私たちは「<strong style={{ color:'#fff' }}>運び屋稼業</strong>」という意識を、創業以来ずっと大切にしてきました。プロとして、お客様の「運びたい」に最短距離で応える。
            </p>
            <div style={{ marginTop: 32, padding:'22px 26px', background: panel, borderLeft:`3px solid ${red}` }}>
              <div style={{ ...v5.eyebrow, color: red, fontSize: 9 }}>PHILOSOPHY</div>
              <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, marginTop: 8, fontWeight: 600 }}>{COMPANY.philosophy}</div>
            </div>
          </div>
        </section>

        {/* Fleet spec panels */}
        <section style={{ padding:'96px 40px', borderBottom:`1px solid ${line}` }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 44 }}>
            <div>
              <div style={{ ...v5.eyebrow, color: red }}>02 / VEHICLE FLEET</div>
              <h2 style={{ ...v5.h, fontSize: 64, margin:'14px 0 0' }}>FLEET SPEC</h2>
            </div>
            <span style={{ ...v5.mono, fontSize: 11, color: silver }}>2 CATEGORIES / 57 UNITS</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 1, background: line, border:`1px solid ${line}` }}>
            {[
              ['NO.01','total air-susp 低床ウイングゲート車','34','units','MAX 12,700kg · 2,410×9,600×2,570mm','photos/truck-02.jpg'],
              ['NO.02','エアサス低床ウイングゲート車','23','units','MAX 13,600kg · 全車格納ゲート装備','photos/vehicle-1.webp'],
            ].map(([no,name,n,u,spec,img]) => (
              <div key={no} style={{ background: black }}>
                <div style={{ position:'relative', height: 300, overflow:'hidden' }}>
                  <Img src={img} alt={name} />
                  <div style={{ position:'absolute', top: 14, left: 14, ...v5.mono, fontSize: 10, color:'#fff', background:'rgba(10,10,11,0.7)', padding:'4px 8px', letterSpacing:'0.16em' }}>{no}</div>
                </div>
                <div style={{ padding:'24px 26px' }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap: 12 }}>
                    <div style={{ ...v5.mono, fontSize: 52, color: red, lineHeight: 1, fontWeight: 500 }}>{n}</div>
                    <div style={{ ...v5.eyebrow, color: silver, fontSize: 9 }}>{u}</div>
                  </div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 20, marginTop: 12 }}>{name}</div>
                  <div style={{ ...v5.mono, fontSize: 11, color: silver, marginTop: 12, letterSpacing:'0.04em' }}>{spec}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business index */}
        <section style={{ padding:'96px 40px', borderBottom:`1px solid ${line}` }}>
          <div style={{ ...v5.eyebrow, color: red, marginBottom: 14 }}>03 / BUSINESS</div>
          <h2 style={{ ...v5.h, fontSize: 64, margin:'0 0 44px' }}>事業内容</h2>
          <div style={{ borderTop:`1px solid ${line}` }}>
            {BUSINESS.map(([t, en, d], i) => (
              <div key={t} style={{ display:'grid', gridTemplateColumns:'90px 260px 1fr 44px', gap: 28, padding:'30px 0', borderBottom:`1px solid ${line}`, alignItems:'center' }}>
                <div style={{ ...v5.mono, fontSize: 22, color: red }}>0{i+1}</div>
                <div>
                  <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 26, color:'#fff', fontWeight: 600 }}>{t}</div>
                  <div style={{ ...v5.eyebrow, color: silver, fontSize: 9, marginTop: 6 }}>{en}</div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.9, color:'#c7c7cd' }}>{d}</div>
                <div style={{ textAlign:'right', ...v5.mono, color: red, fontSize: 18 }}>→</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'104px 40px', textAlign:'center' }}>
          <div style={{ ...v5.eyebrow, color: red }}>—— REQUEST A QUOTE</div>
          <h2 style={{ ...v5.h, fontSize: 128, margin:'22px 0' }}>運ぼう<span style={{ color: red }}>。</span></h2>
          <div style={{ ...v5.mono, fontSize: 44, color: red, fontWeight: 500, letterSpacing:'0.02em' }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 13, color: silver, marginTop: 12 }}>平日 9:00 – 18:00 ／ お問い合わせフォームは24時間受付</div>
        </section>

        <footer style={{ background:'#050506', color:'#888', padding:'44px 40px 26px', borderTop:`1px solid ${line}`, ...v5.mono, fontSize: 11 }}>
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 32, alignItems:'flex-start' }}>
            <Logo variant="small" height={24} style={{ filter:'brightness(0) invert(1)', opacity: 0.6 }} />
            <div style={{ lineHeight: 1.9 }}>〒{COMPANY.address}<br/>TEL {COMPANY.tel} / FAX 048-229-3630</div>
          </div>
          <div style={{ marginTop: 32, opacity: 0.4, letterSpacing:'0.2em' }}>© 2026 FUKUSHIMA SHOUJI CO.,LTD.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V5Telemetry = V5Telemetry;
