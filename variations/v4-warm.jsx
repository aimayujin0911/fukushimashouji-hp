// V4 — ドキュメンタリー / B&W Editorial
// Newsprint paper, monochrome photography (CSS grayscale), dense columned
// type, blackletter accents. Like a feature article in a serious magazine.
// Uses warehouse/office photos rather than the fleet shots seen elsewhere.

const V4Warm = () => {
  const paper = '#ededea';
  const ink = '#0e0e0d';
  const red = '#b91e1d';
  const sub = '#6a6660';
  const rule = '#0e0e0d33';

  // Convert any photo to B&W for the documentary look.
  const bwFilter = 'grayscale(1) contrast(1.08) brightness(0.98)';

  const v = {
    serif: { fontFamily:'"Cormorant Garamond", "Noto Serif JP", serif', color: ink },
    body: { fontFamily:'"Noto Serif JP", serif', lineHeight: 2.0, color:'#181614' },
    eyebrow: { fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize: 14, letterSpacing:'0.12em', color: red, fontWeight: 600 },
    smcaps: { fontFamily:'"Cormorant Garamond", serif', fontSize: 11, letterSpacing:'0.32em', textTransform:'uppercase', fontWeight: 600 },
    rule: { borderTop: `1px solid ${rule}` },
  };

  return (
    <ABFrame bg={paper}>
      <div style={{ width:'100%', background: paper, color: ink, fontFamily:'"Noto Serif JP", serif' }}>

        {/* Masthead */}
        <header style={{ padding:'24px 48px 18px', borderBottom:`3px double ${ink}`, display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'flex-end', gap: 24 }}>
          <div style={{ fontSize: 12, color: sub, letterSpacing:'0.18em' }}>
            Saitama, Japan · 関東一円<br/>
            <span style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize: 14 }}>Estd. MMX</span>
          </div>
          <div style={{ textAlign:'center' }}>
            <div style={{ ...v.eyebrow, fontStyle:'normal', textTransform:'uppercase', fontWeight: 700 }}>株式会社 福嶋商事</div>
            <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700, fontSize: 64, lineHeight: 1, marginTop: 8, letterSpacing:'-0.01em' }}>
              The Hauler&apos;s Journal
            </div>
          </div>
          <div style={{ textAlign:'right', fontSize: 12, color: sub, letterSpacing:'0.18em' }}>
            令和八年 五月吉日<br/>
            <span style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize: 14 }}>Vol. XVI</span>
          </div>
        </header>

        {/* Date / nav strip */}
        <div style={{ padding:'12px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:`1px solid ${ink}`, fontSize: 12 }}>
          <div style={{ ...v.smcaps }}>FUKUSHIMASHOUJI.CO.JP · Section A — Front Page</div>
          <div style={{ display:'flex', gap: 22, ...v.smcaps, fontSize: 10 }}>
            {NAV.map(n => <span key={n}>{n}</span>)}
          </div>
        </div>

        {/* FRONT PAGE — feature story */}
        <section style={{ padding:'40px 48px 56px', display:'grid', gridTemplateColumns:'1.6fr 1px 1fr', gap: 36 }}>
          {/* Lead column */}
          <div>
            <div style={v.eyebrow}>—— Cover Story</div>
            <h1 style={{ ...v.serif, fontSize: 88, fontWeight: 600, lineHeight: 1.08, margin:'12px 0 0', letterSpacing:'-0.005em' }}>
              The Red Trucks<br/>of Saitama.
            </h1>
            <div style={{ ...v.eyebrow, fontStyle:'normal', fontSize: 16, marginTop: 18, color: ink }}>赤を運ぶ、五十七台 ── 関東一円を支える運び屋の日々</div>

            <figure style={{ margin:'32px 0 0' }}>
              <img src={`${ASSETS}/photos/IMG_1461.jpeg`} alt="倉庫内部" style={{ display:'block', width:'100%', height:'auto', filter: bwFilter }} />
              <figcaption style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop: 12, ...v.smcaps, fontSize: 10, color: sub }}>
                <span style={{ fontStyle:'italic', textTransform:'none', fontSize: 12, fontFamily:'"Cormorant Garamond", serif' }}>—— Plate I. Warehouse interior, Koshigaya. The night before despatch.</span>
                <span>Photograph: Fukushima Shouji</span>
              </figcaption>
            </figure>

            {/* Body — 2 columns */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 28, marginTop: 32, columnRule:`1px solid ${rule}` }}>
              <div style={{ ...v.body, fontSize: 15 }}>
                <span style={{ fontFamily:'"Cormorant Garamond", serif', fontWeight: 700, fontSize: 56, lineHeight: 0.85, float:'left', marginRight: 8, marginTop: 6, color: red }}>埼</span>
                玉県川口市に本社を構える株式会社 福嶋商事は、二〇一〇年の創業以来、関東一円の物流を支えてきた。総輪エアサスを備えた低床ウイングゲート車を中心に、保有車両は五十七台。六つの営業所に、六十二名の社員が在籍している。<br/><br/>
                <strong>「運び屋稼業という意識を、私たちは大切にしてきました」</strong>と代表の福嶋徹也は語る。「商売は派手な仕事ではない。しかし、お客様の『運びたい』に最短距離で応えること、それ自体が私たちの誇りです」
              </div>
              <div style={{ ...v.body, fontSize: 15 }}>
                同社の特徴は、扱う荷物の幅広さにある。一般雑貨、家電、飲料、精密機器、イベント資材、カゴ台車──。すべての車両に格納ゲートを装備し、振動を抑える総輪エアサス車両も多数。短納期や小ロットにも柔軟に応える体制が整う。<br/><br/>
                安全への取り組みも徹底している。全営業所がGマーク（安全性優良事業所）の認定を取得。三ヶ月に一度の安全会議、外部機関によるKYT、デジタコ・ドライブレコーダー全車両装備。<br/><br/>
                <em>本紙では今号、彼らの日常を追った。 → 2面に続く</em>
              </div>
            </div>
          </div>

          {/* Vertical rule */}
          <div style={{ background: ink, opacity: 0.15 }} />

          {/* Side column — sidebar */}
          <div>
            <div style={v.eyebrow}>—— Inside this Issue</div>
            <div style={{ marginTop: 14, ...v.body, fontSize: 13 }}>
              {[
                ['A1', 'Cover Story', 'The Red Trucks of Saitama'],
                ['A2', 'Profile', '代表取締役 福嶋徹也'],
                ['B1', 'Business', '三つの事業について'],
                ['B3', 'Safety', 'G-Markと、日々の点呼'],
                ['C1', 'Locations', '六つの拠点を訪ねて'],
                ['C4', 'Recruit', '同志、募集中。'],
              ].map(([p, sec, t], i) => (
                <div key={i} style={{ padding:'10px 0', borderTop: i ? `1px dotted ${ink}33` : 'none', display:'grid', gridTemplateColumns:'42px 1fr', gap: 12, alignItems:'baseline' }}>
                  <span style={{ ...v.smcaps, fontSize: 10, color: red }}>{p}</span>
                  <div>
                    <div style={{ ...v.smcaps, fontSize: 9, color: sub }}>{sec}</div>
                    <div style={{ fontSize: 14, marginTop: 2, ...v.serif, fontWeight: 600 }}>{t}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, padding:'18px 20px', background: ink, color: paper }}>
              <div style={{ ...v.eyebrow, color: paper, fontStyle:'italic' }}>Editorial · 経営理念</div>
              <div style={{ fontFamily:'"Shippori Mincho", serif', fontSize: 22, lineHeight: 1.6, marginTop: 10, fontWeight: 500 }}>
                {COMPANY.philosophy}
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <img src={`${ASSETS}/photos/ceo.webp`} alt="代表" style={{ display:'block', width:'100%', height:'auto', filter: bwFilter }} />
              <div style={{ ...v.smcaps, fontSize: 10, color: sub, marginTop: 10, textAlign:'center', fontStyle:'italic', textTransform:'none', fontFamily:'"Cormorant Garamond", serif', fontSize: 12 }}>—— Plate II. Tetsuya Fukushima, CEO.</div>
            </div>
          </div>
        </section>

        {/* Section break */}
        <div style={{ background: ink, padding:'12px 48px', color: paper }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ ...v.smcaps, color: red }}>○ Section B — Business & Operations</span>
            <span style={{ ...v.smcaps, color: paper }}>—— Pp. 2 / 8</span>
          </div>
        </div>

        {/* Business — 3 columns side by side */}
        <section style={{ padding:'56px 48px' }}>
          <h2 style={{ ...v.serif, fontSize: 56, fontWeight: 600, lineHeight: 1.15, margin: 0 }}>
            三つの事業。<span style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', color: red, fontSize: 36, fontWeight: 500, marginLeft: 12 }}>Three branches of a single trade.</span>
          </h2>
          <div style={{ ...v.rule, marginTop: 32, paddingTop: 32, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 36, alignItems:'start' }}>
            {BUSINESS.map(([t, en, d, img], i) => (
              <div key={t}>
                <div style={{ display:'flex', alignItems:'baseline', gap: 12 }}>
                  <span style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontWeight: 700, fontSize: 48, color: red, lineHeight: 0.8 }}>{['I','II','III'][i]}</span>
                  <div>
                    <div style={{ ...v.serif, fontWeight: 600, fontSize: 28 }}>{t}</div>
                    <div style={{ ...v.smcaps, fontSize: 10, color: sub, marginTop: 2 }}>{en}</div>
                  </div>
                </div>
                <img src={`${ASSETS}/photos/${img}`} alt={t} style={{ display:'block', width:'100%', height:'auto', marginTop: 20, filter: bwFilter }} />
                <p style={{ ...v.body, fontSize: 14, marginTop: 16, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Numbers — display rule */}
        <section style={{ background: ink, color: paper, padding:'48px 48px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap: 56, alignItems:'center' }}>
            <h3 style={{ ...v.serif, color: paper, fontSize: 28, fontWeight: 500, margin: 0, fontStyle:'italic', fontFamily:'"Cormorant Garamond", serif' }}>By the Numbers,</h3>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 32 }}>
              {[['57', 'trucks'], ['62', 'staff'], ['6', 'offices'], ['G', 'mark certified']].map(([n, l]) => (
                <div key={l} style={{ display:'flex', alignItems:'baseline', gap: 14 }}>
                  <span style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700, fontSize: 64, lineHeight: 0.9, color: red }}>{n}</span>
                  <span style={{ ...v.smcaps, fontSize: 11, color: paper }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety — long-form */}
        <section style={{ padding:'56px 48px' }}>
          <div style={v.eyebrow}>—— Section C / Safety</div>
          <h2 style={{ ...v.serif, fontSize: 60, fontWeight: 600, lineHeight: 1.15, margin:'14px 0 0' }}>
            On the Discipline<br/>of Driving Slowly.
          </h2>
          <div style={{ ...v.rule, marginTop: 32, paddingTop: 32, display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: 28 }}>
            <div style={{ ...v.body, fontSize: 14, gridColumn:'span 2' }}>
              <span style={{ fontFamily:'"Cormorant Garamond", serif', fontWeight: 700, fontSize: 48, lineHeight: 0.85, float:'left', marginRight: 6, marginTop: 4, color: red }}>安</span>
              全は私たちの規格である── と代表は言う。全六営業所がGマーク認定を取得し、本社は四度の更新を経た。三ヶ月ごとの安全会議、外部機関によるKYT、そしてデジタコとドライブレコーダーは全車両に標準装備。高速道路は時速八十キロ、一般道は法定速度を遵守する。
              <br/><br/>
              「派手な仕事ではないからこそ、毎日の積み重ねが効きます」── 同社の点呼は、まるで儀式のように粛々と進む。
            </div>
            <div>
              <img src={`${ASSETS}/photos/safety-info.webp`} alt="安全教育" style={{ display:'block', width:'100%', height:'auto', filter: bwFilter }} />
              <div style={{ ...v.smcaps, fontSize: 10, color: sub, marginTop: 8, fontStyle:'italic', fontFamily:'"Cormorant Garamond", serif', fontSize: 12, textTransform:'none' }}>—— Plate III. The morning briefing.</div>
            </div>
            <div>
              <img src={`${ASSETS}/photos/training-kensyu.webp`} alt="研修" style={{ display:'block', width:'100%', height:'auto', filter: bwFilter }} />
              <div style={{ ...v.smcaps, fontSize: 10, color: sub, marginTop: 8, fontStyle:'italic', fontFamily:'"Cormorant Garamond", serif', fontSize: 12, textTransform:'none' }}>—— Plate IV. New drivers, around a truck.</div>
            </div>
          </div>
        </section>

        {/* Locations table */}
        <section style={{ padding:'56px 48px', background:'#fff' }}>
          <div style={v.eyebrow}>—— Section D / Locations</div>
          <h2 style={{ ...v.serif, fontSize: 48, fontWeight: 600, margin:'12px 0 32px' }}>六つの拠点 ── A Directory of Offices.</h2>
          <table style={{ width:'100%', borderCollapse:'collapse', fontFamily:'"Noto Serif JP", serif' }}>
            <thead>
              <tr style={{ borderTop:`2px solid ${ink}`, borderBottom:`1px solid ${ink}` }}>
                <th style={{ textAlign:'left', padding:'12px 0', ...v.smcaps, fontSize: 10 }}>Office</th>
                <th style={{ textAlign:'left', padding:'12px 0', ...v.smcaps, fontSize: 10 }}>Address</th>
                <th style={{ textAlign:'right', padding:'12px 0', ...v.smcaps, fontSize: 10 }}>Telephone</th>
              </tr>
            </thead>
            <tbody>
              {OFFICES.map(([name, addr, tel], i) => (
                <tr key={name} style={{ borderBottom:`1px solid ${ink}22` }}>
                  <td style={{ padding:'16px 0', fontSize: 15, fontWeight: 600 }}>{name}</td>
                  <td style={{ padding:'16px 0', fontSize: 14, color: sub }}>{addr}</td>
                  <td style={{ padding:'16px 0', fontSize: 14, textAlign:'right', fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', color: red }}>{tel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Contact column */}
        <section style={{ padding:'72px 48px', textAlign:'center', borderTop:`1px solid ${ink}` }}>
          <div style={v.eyebrow}>—— Last Page / Contact</div>
          <h2 style={{ ...v.serif, fontSize: 64, fontWeight: 600, margin:'14px 0 24px' }}>
            For all enquiries, <em style={{ color: red }}>do write.</em>
          </h2>
          <div style={{ fontFamily:'"Bodoni Moda", serif', fontStyle:'italic', fontWeight: 700, fontSize: 64, color: ink, letterSpacing:'0.01em' }}>{COMPANY.tel}</div>
          <div style={{ ...v.smcaps, fontSize: 11, color: sub, marginTop: 10 }}>WEEKDAYS · 9 — 18 · HEAD OFFICE</div>
        </section>

        {/* Footer / colophon */}
        <footer style={{ padding:'24px 48px 28px', borderTop:`3px double ${ink}`, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <div style={v.smcaps}>© 2026 Fukushima Shouji Co.,Ltd.</div>
          <div style={{ fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', fontSize: 14 }}>—— Set in Shippori Mincho, Cormorant Garamond &amp; Bodoni Moda</div>
          <div style={v.smcaps}>fukushimashouji.co.jp</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V4Warm = V4Warm;
