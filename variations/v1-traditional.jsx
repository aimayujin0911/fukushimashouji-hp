// V1 — 静寂・和の余白 / Quiet Japanese
// Pure off-white, vertical mincho, brush-ink accents, generous negative space.
// Photos used small at native ratio. Inspired by 茶室 / kimono catalogs.

const V1Traditional = () => {
  const ink = '#1a1612';
  const paper = '#fafaf6';
  const cream = '#f4f0e6';
  const vermillion = '#b91e1d';
  const sumi = '#2a2520';

  const v = {
    mincho: { fontFamily:'"Shippori Mincho", "Noto Serif JP", serif', fontWeight: 500, color: ink, letterSpacing:'0.06em' },
    eyebrow: { fontFamily:'"Shippori Mincho", serif', fontSize: 12, letterSpacing:'0.5em', color: vermillion, fontWeight: 500 },
  };

  return (
    <ABFrame bg={paper}>
      <div style={{ width:'100%', background: paper, color: ink, fontFamily:'"Noto Sans JP", sans-serif' }}>
        {/* Minimal nav with vermillion seal */}
        <nav style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'32px 64px 24px' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
            <div style={{ width: 38, height: 38, background: vermillion, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'"Shippori Mincho", serif', fontSize: 22, fontWeight: 700 }}>福</div>
            <div>
              <div style={{ ...v.mincho, fontSize: 16 }}>株式会社 福嶋商事</div>
              <div style={{ fontSize: 10, color:'#888', letterSpacing:'0.24em', marginTop: 2 }}>FUKUSHIMA SHOUJI</div>
            </div>
          </div>
          <div style={{ display:'flex', gap: 38, ...v.mincho, fontSize: 14 }}>
            {NAV.map(n => <span key={n}>{n}</span>)}
          </div>
          <div style={{ textAlign:'right', ...v.mincho, fontSize: 14 }}>
            <span style={{ color: vermillion }}>{COMPANY.tel}</span>
          </div>
        </nav>
        <div style={{ height: 1, background: ink, opacity: 0.1, margin:'0 64px' }} />

        {/* HERO — vertical writing dominant, image small + centered */}
        <section style={{ padding:'96px 64px 120px', display:'grid', gridTemplateColumns:'180px 1fr 180px', gap: 48, alignItems:'center', minHeight: 720 }}>
          {/* Left — vertical eyebrow */}
          <div style={{ writingMode:'vertical-rl', ...v.mincho, fontSize: 14, color:'#888', letterSpacing:'0.5em', height: 360 }}>
            ―― 創業 平成二十二年　関東一円 専属配送
          </div>

          {/* Center — image + vertical headline */}
          <div style={{ display:'flex', gap: 56, justifyContent:'center', alignItems:'center' }}>
            <h1 style={{ ...v.mincho, writingMode:'vertical-rl', fontSize: 88, lineHeight: 1.3, margin: 0, fontWeight: 600, height: 600 }}>
              誠実に、<br/>
              堅実に、<br/><br/>
              <span style={{ color: vermillion }}>愛</span>を運ぶ<br/>
              会社です。
            </h1>
            <div style={{ width: 420, position:'relative' }}>
              <img src={`${ASSETS}/photos/vehicle-2.webp`} alt="赤いトラック" style={{ display:'block', width:'100%', height:'auto', filter:'saturate(1.05)' }} />
              <div style={{ position:'absolute', top:-12, right:-12, width: 56, height: 56, background: vermillion, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'"Shippori Mincho", serif', fontSize: 20, fontWeight: 700, borderRadius:'50%' }}>印</div>
            </div>
          </div>

          {/* Right — vertical date/seal */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap: 16 }}>
            <div style={{ writingMode:'vertical-rl', ...v.mincho, fontSize: 13, color:'#888', letterSpacing:'0.4em', height: 240 }}>
              令和八年　春のお知らせ
            </div>
            <div style={{ ...v.eyebrow, writingMode:'vertical-rl', height: 100, fontSize: 11 }}>SINCE 2010</div>
          </div>
        </section>

        {/* Bottom hairline + catch */}
        <section style={{ padding:'40px 64px 96px', display:'flex', alignItems:'baseline', gap: 32 }}>
          <div style={{ width: 64, height: 1, background: ink, opacity: 0.6 }} />
          <p style={{ ...v.mincho, fontSize: 18, lineHeight: 2.4, margin: 0, maxWidth: 720, fontWeight: 400 }}>
            {COMPANY.philosophy}。 私たちは「運び屋稼業」という意識を、創業の日から変わらず大切にしています。
          </p>
        </section>

        {/* News — vertical line table */}
        <section style={{ padding:'80px 64px', borderTop:`1px solid ${ink}1a` }}>
          <div style={{ display:'grid', gridTemplateColumns:'200px 1fr', gap: 56 }}>
            <div>
              <div style={v.eyebrow}>NEWS</div>
              <div style={{ ...v.mincho, fontSize: 22, marginTop: 8 }}>お知らせ</div>
            </div>
            <div>
              {NEWS.map(([d, c, t], i) => (
                <div key={i} style={{ display:'grid', gridTemplateColumns:'120px 80px 1fr 24px', gap: 20, padding:'18px 0', borderTop: i ? `1px solid ${ink}10` : 'none', alignItems:'center' }}>
                  <span style={{ fontFamily:'"Cormorant Garamond", serif', fontSize: 16, color:'#666' }}>{d}</span>
                  <span style={{ ...v.mincho, fontSize: 12, color: vermillion }}>{c}</span>
                  <span style={{ ...v.mincho, fontSize: 14, fontWeight: 400 }}>{t}</span>
                  <span style={{ color: vermillion }}>○</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business — vertical wood-block listings */}
        <section style={{ padding:'120px 64px', borderTop:`1px solid ${ink}1a` }}>
          <div style={{ textAlign:'center', marginBottom: 80 }}>
            <div style={v.eyebrow}>BUSINESS — 事業</div>
            <h2 style={{ ...v.mincho, fontSize: 48, margin:'16px 0 0', fontWeight: 600 }}>運ぶ・蓄える・繋ぐ</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 64, alignItems:'start' }}>
            {BUSINESS.map(([t, en, d, img], i) => (
              <div key={t} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:'"Cormorant Garamond", serif', fontSize: 14, color: vermillion, fontStyle:'italic', letterSpacing:'0.2em' }}>chapter . {i+1}</div>
                <div style={{ width: 1, height: 24, background: ink, margin:'14px auto', opacity: 0.4 }} />
                <img src={`${ASSETS}/photos/${img}`} alt={t} style={{ display:'block', width:'100%', height:'auto' }} />
                <div style={{ ...v.mincho, fontSize: 24, marginTop: 24 }}>{t}</div>
                <p style={{ fontSize: 13, lineHeight: 2.0, color:'#555', marginTop: 14, textAlign:'left' }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Message — vertical, calligraphic */}
        <section style={{ padding:'120px 64px', background: cream }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap: 80, alignItems:'center' }}>
            <img src={`${ASSETS}/photos/ceo.webp`} alt="代表取締役 福嶋徹也" style={{ display:'block', width:'100%', height:'auto', filter:'grayscale(0.15) contrast(1.02)' }} />
            <div>
              <div style={v.eyebrow}>MESSAGE</div>
              <h2 style={{ ...v.mincho, fontSize: 42, margin:'18px 0 32px', lineHeight: 1.6, fontWeight: 500 }}>
                ひとつ、<br/>
                またひとつ、<br/>
                <span style={{ color: vermillion }}>誠実に。</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 2.2, color:'#3a322a', margin: 0 }}>
                「また福嶋商事に頼みたい」と言っていただける企業であり続けるため、毎日の業務に誇りを持って取り組んでおります。<br/><br/>
                車両も人も、整え続けること。お客様の「運びたい」に、最短距離で応えること。<br/>
                それが私たちの考える、商いの基本です。
              </p>
              <div style={{ marginTop: 36, display:'flex', alignItems:'center', gap: 16 }}>
                <div style={{ ...v.mincho, fontSize: 14 }}>代表取締役</div>
                <div style={{ ...v.mincho, fontSize: 22, color: vermillion }}>福嶋 徹也</div>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers — kanji-marked */}
        <section style={{ padding:'88px 64px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 32, textAlign:'center' }}>
            {[['五十七', '57 / 車両'], ['六十二', '62 / 従業員'], ['六拠点', '6 / 営業所'], ['全認定', 'G-MARK / 安全']].map(([kan, en]) => (
              <div key={en}>
                <div style={{ ...v.mincho, fontSize: 56, color: vermillion, fontWeight: 600, letterSpacing:'-0.02em' }}>{kan}</div>
                <div style={{ width: 24, height: 1, background: ink, margin:'18px auto', opacity: 0.4 }} />
                <div style={{ fontFamily:'"Cormorant Garamond", serif', fontSize: 13, fontStyle:'italic', color:'#666', letterSpacing:'0.1em' }}>{en}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety — quiet panel */}
        <section style={{ padding:'120px 64px', borderTop:`1px solid ${ink}1a` }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 80, alignItems:'center' }}>
            <div>
              <div style={v.eyebrow}>SAFETY</div>
              <h2 style={{ ...v.mincho, fontSize: 42, margin:'18px 0 24px', lineHeight: 1.4 }}>
                安全は、<br/>言葉ではなく、<span style={{ color: vermillion }}>習慣で。</span>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 2.2, color:'#444' }}>
                全六営業所でGマーク（安全性優良事業所）認定。三ヶ月に一度の安全会議、外部機関によるKYT、デジタコ・ドライブレコーダー全車両装備。
              </p>
              <div style={{ marginTop: 32, display:'flex', alignItems:'center', gap: 20 }}>
                <img src={`${ASSETS}/logos/gmark.jpg`} alt="Gマーク" style={{ width: 72, height: 72, objectFit:'contain' }} />
                <div>
                  <div style={{ ...v.mincho, fontSize: 14 }}>全六営業所</div>
                  <div style={{ fontSize: 12, color:'#888' }}>本社 4回更新／群馬 R6.12 取得</div>
                </div>
              </div>
            </div>
            <img src={`${ASSETS}/photos/training-kensyu.webp`} alt="安全研修" style={{ display:'block', width:'100%', height:'auto' }} />
          </div>
        </section>

        {/* Offices — sumi-line table */}
        <section style={{ padding:'120px 64px', background: cream }}>
          <div style={{ textAlign:'center', marginBottom: 56 }}>
            <div style={v.eyebrow}>LOCATIONS</div>
            <h2 style={{ ...v.mincho, fontSize: 42, margin:'16px 0 0' }}>関東一円・六つの拠点</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 0, borderTop:`1px solid ${ink}33` }}>
            {OFFICES.map(([name, addr, tel], i) => (
              <div key={name} style={{ padding:'24px 28px', borderBottom:`1px solid ${ink}1a`, borderRight: i % 2 === 0 ? `1px solid ${ink}1a` : 'none', display:'grid', gridTemplateColumns:'120px 1fr 140px', gap: 16, alignItems:'center' }}>
                <div style={{ ...v.mincho, fontSize: 17, color: vermillion }}>{name}</div>
                <div style={{ fontSize: 13, color:'#333' }}>{addr}</div>
                <div style={{ fontFamily:'"Cormorant Garamond", serif', fontSize: 14, fontStyle:'italic', color:'#666', textAlign:'right' }}>{tel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'112px 64px', textAlign:'center' }}>
          <div style={v.eyebrow}>CONTACT</div>
          <h3 style={{ ...v.mincho, fontSize: 48, margin:'18px 0 32px' }}>御用の節は、お気軽に。</h3>
          <div style={{ fontFamily:'"Cormorant Garamond", serif', fontSize: 48, color: vermillion, fontStyle:'italic', fontWeight: 600, letterSpacing:'0.02em' }}>{COMPANY.tel}</div>
          <div style={{ fontSize: 12, color:'#888', marginTop: 12, letterSpacing:'0.2em' }}>平日 9 : 00 ─ 18 : 00　本社</div>
        </section>

        {/* Footer */}
        <footer style={{ padding:'48px 64px 32px', borderTop:`1px solid ${ink}22`, display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
          <div>
            <div style={{ ...v.mincho, fontSize: 17 }}>株式会社 福嶋商事</div>
            <div style={{ fontSize: 12, color:'#888', marginTop: 6, lineHeight: 1.8 }}>
              〒{COMPANY.address}　／　TEL {COMPANY.tel}
            </div>
          </div>
          <div style={{ fontSize: 11, color:'#aaa', letterSpacing:'0.18em' }}>© 2026　FUKUSHIMA SHOUJI　ALL RIGHTS RESERVED.</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V1Traditional = V1Traditional;
