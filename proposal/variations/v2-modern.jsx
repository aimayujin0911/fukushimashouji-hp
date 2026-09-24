// V2 — ポップ・元気・親しみ / Bright Pop
// Butter cream + cherry red + plenty of rounded shapes. Friendly local vibe,
// like a smiling neighborhood business. Lots of stickers, speech bubbles,
// chunky type. Uses people photos (CEO/training) over truck photos.

const V2Modern = () => {
  const butter = '#fdf3d0';
  const buttery = '#f9e8a8';
  const red = '#d62828';
  const ink = '#1c1612';
  const sky = '#b3dee6';
  const leaf = '#5a8c52';

  const v = {
    h: { fontFamily:'"Zen Kaku Gothic New", "Noto Sans JP", sans-serif', fontWeight: 900, color: ink, letterSpacing:'-0.01em' },
    chip: { display:'inline-flex', alignItems:'center', gap: 8, padding:'8px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700, fontFamily:'"Zen Kaku Gothic New", sans-serif' },
  };

  return (
    <ABFrame bg={butter}>
      <div style={{ width:'100%', background: butter, color: ink, fontFamily:'"Zen Kaku Gothic New", sans-serif', overflow:'hidden' }}>

        {/* Wavy top stripe */}
        <div style={{ height: 18, background: red, position:'relative' }}>
          <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{ position:'absolute', bottom:-1, left: 0, width:'100%', height: 14 }}>
            <path d="M0 24 Q 60 0 120 12 T 240 12 T 360 12 T 480 12 T 600 12 T 720 12 T 840 12 T 960 12 T 1080 12 T 1200 12 T 1320 12 T 1440 12 L 1440 24 Z" fill={red} />
          </svg>
        </div>

        {/* Friendly nav */}
        <nav style={{ padding:'28px 48px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
            <div style={{ width: 52, height: 52, background: red, color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'"Shippori Mincho", serif', fontWeight: 800, fontSize: 28, transform:'rotate(-6deg)', boxShadow:'0 4px 0 #8a1a1a' }}>福</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18 }}>福嶋商事</div>
              <div style={{ fontSize: 11, color:'#7a6a4a', fontWeight: 600 }}>関東の運び屋 · since 2010</div>
            </div>
          </div>
          <div style={{ display:'flex', gap: 8, alignItems:'center' }}>
            {NAV.slice(0, 5).map((n, i) => (
              <span key={n} style={{ ...v.chip, background:'#fff', color: ink, border:`2px solid ${ink}`, boxShadow:`3px 3px 0 ${ink}` }}>{n}</span>
            ))}
          </div>
          <button style={{ ...v.chip, background: red, color:'#fff', padding:'12px 22px', fontSize: 13, border:`2px solid ${ink}`, boxShadow:`4px 4px 0 ${ink}`, cursor:'pointer' }}>
            ✉ お問い合わせ
          </button>
        </nav>

        {/* HERO — playful collage */}
        <section style={{ padding:'40px 48px 80px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48, alignItems:'center' }}>
          <div style={{ position:'relative' }}>
            <div style={{ display:'inline-block', background: sky, padding:'8px 20px', borderRadius: 999, fontSize: 13, fontWeight: 700, transform:'rotate(-2deg)', border:`2px solid ${ink}` }}>こんにちは！</div>
            <h1 style={{ ...v.h, fontSize: 88, lineHeight: 1.12, margin:'20px 0 0' }}>
              関東を、<br/>
              <span style={{ display:'inline-block', background: red, color:'#fff', padding:'4px 16px', transform:'rotate(-1.5deg)', borderRadius: 12 }}>赤いトラック</span><br/>
              で走ります！
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.9, margin:'28px 0 0', maxWidth: 520, fontWeight: 500 }}>
              プロフェッショナル運び屋集団、福嶋商事です。<br/>
              大型車・ゲート車のことなら、何でも気軽にご相談ください！
            </p>
            <div style={{ display:'flex', gap: 14, marginTop: 32, flexWrap:'wrap' }}>
              <button style={{ background: ink, color:'#fff', padding:'18px 32px', borderRadius: 999, border:'none', fontSize: 16, fontWeight: 800, boxShadow:`5px 5px 0 ${red}`, fontFamily:'inherit', cursor:'pointer' }}>事業を見る →</button>
              <button style={{ background:'#fff', color: ink, padding:'18px 32px', borderRadius: 999, border:`3px solid ${ink}`, fontSize: 16, fontWeight: 800, fontFamily:'inherit', cursor:'pointer' }}>採用情報 →</button>
            </div>

            {/* hand-drawn arrow */}
            <svg width="120" height="60" viewBox="0 0 120 60" style={{ position:'absolute', top: -10, right: -20 }}>
              <path d="M10 50 Q 30 10 80 30 M 70 18 L 80 30 L 66 32" stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Photo collage — different photos than other variations */}
          <div style={{ position:'relative', height: 560 }}>
            {/* CEO photo card */}
            <div style={{ position:'absolute', top: 0, right: 0, width: 280, background:'#fff', border:`3px solid ${ink}`, padding: 12, borderRadius: 20, transform:'rotate(3deg)', boxShadow:`8px 8px 0 ${ink}` }}>
              <img src={`${ASSETS}/photos/ceo.webp`} alt="代表" style={{ display:'block', width:'100%', height:'auto', borderRadius: 10 }} />
              <div style={{ padding:'10px 4px 4px', fontWeight: 700, fontSize: 13 }}>代表 · 福嶋徹也</div>
            </div>
            {/* Training photo card */}
            <div style={{ position:'absolute', top: 200, left: 0, width: 320, background:'#fff', border:`3px solid ${ink}`, padding: 12, borderRadius: 20, transform:'rotate(-4deg)', boxShadow:`8px 8px 0 ${red}` }}>
              <img src={`${ASSETS}/photos/training-kensyu.webp`} alt="研修" style={{ display:'block', width:'100%', height:'auto', borderRadius: 10 }} />
              <div style={{ padding:'10px 4px 4px', fontWeight: 700, fontSize: 13 }}>新人研修も、楽しく ✋</div>
            </div>
            {/* Office photo card */}
            <div style={{ position:'absolute', bottom: 0, right: 30, width: 240, background:'#fff', border:`3px solid ${ink}`, padding: 10, borderRadius: 20, transform:'rotate(2deg)', boxShadow:`6px 6px 0 ${leaf}` }}>
              <img src={`${ASSETS}/photos/office-kawaguchi.webp`} alt="本社" style={{ display:'block', width:'100%', height:'auto', borderRadius: 10 }} />
              <div style={{ padding:'8px 4px 2px', fontWeight: 700, fontSize: 12 }}>埼玉・川口本社 🏢</div>
            </div>

            {/* Stickers */}
            <div style={{ position:'absolute', top: 24, left: 20, width: 96, height: 96, borderRadius:'50%', background: buttery, border:`3px solid ${ink}`, display:'flex', alignItems:'center', justifyContent:'center', transform:'rotate(-8deg)', boxShadow:`4px 4px 0 ${ink}` }}>
              <div style={{ textAlign:'center', fontWeight: 900 }}>
                <div style={{ fontSize: 28, color: red }}>57</div>
                <div style={{ fontSize: 9, marginTop: 2 }}>TRUCKS</div>
              </div>
            </div>
            <div style={{ position:'absolute', bottom: 180, left: -10, transform:'rotate(-12deg)', background:'#fff', padding:'8px 14px', border:`2.5px solid ${ink}`, borderRadius: 999, fontSize: 12, fontWeight: 700, boxShadow:`3px 3px 0 ${ink}` }}>G-マーク認定 ✓</div>
            <div style={{ position:'absolute', bottom: 0, left: 60, transform:'rotate(8deg)', background: red, color:'#fff', padding:'10px 16px', border:`2.5px solid ${ink}`, borderRadius: 8, fontSize: 13, fontWeight: 900, boxShadow:`4px 4px 0 ${ink}` }}>関東一円 OK!</div>
          </div>
        </section>

        {/* Value chips bar */}
        <section style={{ padding:'24px 48px', background:'#fff', borderTop:`3px solid ${ink}`, borderBottom:`3px solid ${ink}` }}>
          <div style={{ display:'flex', gap: 24, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' }}>
            <div style={{ fontWeight: 900, fontSize: 18, display:'flex', alignItems:'center', gap: 10 }}>
              <span style={{ background: red, color:'#fff', padding:'4px 10px', borderRadius: 6 }}>福嶋</span>
              の3つの大切なこと
            </div>
            {VALUES.map(([t, en, d]) => (
              <div key={t} style={{ display:'flex', alignItems:'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, background: buttery, border:`2.5px solid ${ink}`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight: 900, fontSize: 18, color: red, fontFamily:'"Shippori Mincho", serif' }}>{t}</div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t} <span style={{ fontSize: 11, color:'#888', fontWeight: 600, marginLeft: 4 }}>{en}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* Business — rounded chunky cards */}
        <section style={{ padding:'96px 48px' }}>
          <div style={{ textAlign:'center', marginBottom: 56 }}>
            <div style={{ display:'inline-block', background: red, color:'#fff', padding:'6px 16px', borderRadius: 999, fontSize: 13, fontWeight: 800, transform:'rotate(-1deg)' }}>WHAT WE DO</div>
            <h2 style={{ ...v.h, fontSize: 60, margin:'18px 0 0' }}>3つの主な仕事 🚚</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 28 }}>
            {BUSINESS.map(([t, en, d, img], i) => {
              const colors = [red, leaf, sky];
              const accent = colors[i];
              return (
                <div key={t} style={{ background:'#fff', border:`3px solid ${ink}`, borderRadius: 24, padding: 14, boxShadow:`8px 8px 0 ${accent}`, position:'relative' }}>
                  <div style={{ position:'absolute', top:-16, left: 16, background: accent, color:'#fff', padding:'4px 14px', borderRadius: 999, fontSize: 12, fontWeight: 800, border:`2.5px solid ${ink}` }}>0{i+1} / {en}</div>
                  <img src={`${ASSETS}/photos/${img}`} alt={t} style={{ display:'block', width:'100%', height:'auto', borderRadius: 14 }} />
                  <div style={{ padding:'18px 12px 8px' }}>
                    <div style={{ ...v.h, fontSize: 26 }}>{t}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.9, marginTop: 12, color:'#3a322a' }}>{d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Message — speech bubble */}
        <section style={{ padding:'80px 48px 112px', background: buttery }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 56, alignItems:'center' }}>
            <div style={{ position:'relative' }}>
              <img src={`${ASSETS}/photos/ceo.webp`} alt="代表取締役" style={{ display:'block', width: 360, height:'auto', border:`3px solid ${ink}`, borderRadius: 20, transform:'rotate(-2deg)', boxShadow:`8px 8px 0 ${red}` }} />
              <div style={{ position:'absolute', bottom: -20, left: -20, background:'#fff', border:`3px solid ${ink}`, padding:'10px 20px', borderRadius: 999, fontWeight: 800, transform:'rotate(-4deg)', boxShadow:`4px 4px 0 ${ink}` }}>代表・福嶋徹也</div>
            </div>
            <div>
              <div style={{ position:'relative', background:'#fff', border:`3px solid ${ink}`, borderRadius: 32, padding:'36px 40px', boxShadow:`10px 10px 0 ${ink}` }}>
                <div style={{ position:'absolute', left: -22, top: 60, width: 0, height: 0, borderTop:'18px solid transparent', borderBottom:'18px solid transparent', borderRight:`22px solid ${ink}` }} />
                <div style={{ position:'absolute', left: -16, top: 64, width: 0, height: 0, borderTop:'12px solid transparent', borderBottom:'12px solid transparent', borderRight:`18px solid #fff` }} />
                <div style={{ ...v.chip, background: buttery, marginBottom: 16, border:`2px solid ${ink}` }}>代表メッセージ</div>
                <h2 style={{ ...v.h, fontSize: 36, lineHeight: 1.4, margin: 0 }}>
                  「<span style={{ color: red }}>また頼みたい！</span>」と<br/>
                  言ってもらえる仕事を、毎日。
                </h2>
                <p style={{ fontSize: 15, lineHeight: 2.0, marginTop: 20, fontWeight: 500 }}>
                  運び屋稼業を貫いて16年。<br/>
                  プロとしてお客様の満足を第一に、いかなるご要望にも応えられる車両と、優れた人材育成に力を入れています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers row */}
        <section style={{ padding:'72px 48px', background: red, color:'#fff', borderTop:`3px solid ${ink}`, borderBottom:`3px solid ${ink}` }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 32, alignItems:'center' }}>
            {[['57', 'TRUCKS', '保有車両'], ['62', 'STAFF', '従業員'], ['6', 'BASES', '営業所'], ['16', 'YEARS', '創業から']].map(([n, en, ja]) => (
              <div key={en} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:'"Zen Kaku Gothic New", sans-serif', fontWeight: 900, fontSize: 92, lineHeight: 1, color:'#fff' }}>{n}</div>
                <div style={{ fontSize: 12, marginTop: 12, fontWeight: 800, letterSpacing:'0.2em' }}>{en} · {ja}</div>
              </div>
            ))}
          </div>
        </section>

        {/* News bulletin board */}
        <section style={{ padding:'96px 48px' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 32 }}>
            <div>
              <div style={{ display:'inline-block', background: ink, color:'#fff', padding:'6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 800 }}>📌 NEWS</div>
              <h2 style={{ ...v.h, fontSize: 44, margin:'12px 0 0' }}>お知らせ</h2>
            </div>
            <button style={{ background:'transparent', color: ink, border:`2.5px solid ${ink}`, padding:'12px 24px', borderRadius: 999, fontWeight: 800, fontSize: 13, fontFamily:'inherit' }}>すべて見る →</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 16 }}>
            {NEWS.map(([d, c, t], i) => {
              const bgs = [butter, sky, buttery, '#ffd0c4'];
              return (
                <div key={i} style={{ background: bgs[i % 4], border:`2.5px solid ${ink}`, borderRadius: 16, padding:'20px 24px', display:'flex', alignItems:'center', gap: 16, transform:`rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
                  <div style={{ fontWeight: 900, fontSize: 18, fontFamily:'"Cormorant Garamond", serif' }}>{d.split('.')[1]}/{d.split('.')[2]}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: red, letterSpacing:'0.1em' }}>{c}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{t}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:'96px 48px', textAlign:'center' }}>
          <div style={{ display:'inline-block', background: ink, color:'#fff', padding:'6px 16px', borderRadius: 999, fontSize: 13, fontWeight: 800 }}>📞 CONTACT</div>
          <h2 style={{ ...v.h, fontSize: 72, lineHeight: 1.1, margin:'20px 0 32px' }}>
            お気軽に、<br/>
            お電話ください！
          </h2>
          <div style={{ display:'inline-block', background:'#fff', border:`3px solid ${ink}`, borderRadius: 24, padding:'24px 48px', boxShadow:`8px 8px 0 ${red}` }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: red, letterSpacing:'0.24em' }}>HEAD OFFICE</div>
            <div style={{ fontFamily:'"Zen Kaku Gothic New", sans-serif', fontSize: 64, fontWeight: 900, color: ink, letterSpacing:'0.01em', marginTop: 4 }}>{COMPANY.tel}</div>
            <div style={{ fontSize: 13, color:'#666', marginTop: 4, fontWeight: 600 }}>平日 9:00 – 18:00　／　お問い合わせフォームは24時間</div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding:'48px 48px 32px', background: ink, color: butter, position:'relative' }}>
          <svg viewBox="0 0 1440 18" preserveAspectRatio="none" style={{ position:'absolute', top: -10, left: 0, width:'100%', height: 12 }}>
            <path d="M0 0 Q 60 18 120 6 T 240 6 T 360 6 T 480 6 T 600 6 T 720 6 T 840 6 T 960 6 T 1080 6 T 1200 6 T 1320 6 T 1440 6 L 1440 18 L 0 18 Z" fill={ink} />
          </svg>
          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap: 48, marginTop: 12 }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, background: red, color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'"Shippori Mincho", serif', fontWeight: 800, fontSize: 20 }}>福</div>
                <div style={{ fontWeight: 900, fontSize: 17 }}>株式会社 福嶋商事</div>
              </div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 12, lineHeight: 1.9 }}>
                〒{COMPANY.address}<br/>
                TEL {COMPANY.tel}
              </div>
            </div>
            {[['事業', ['一般貨物運送','倉庫保管','貨物利用運送']], ['会社', ['代表挨拶','沿革','拠点','採用']]].map(([t, items]) => (
              <div key={t}>
                <div style={{ fontWeight: 900, fontSize: 13, color: red, marginBottom: 12 }}>{t}</div>
                {items.map(i => <div key={i} style={{ padding:'5px 0', fontSize: 13, opacity: 0.85 }}>{i}</div>)}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, fontSize: 11, opacity: 0.45, letterSpacing:'0.16em' }}>© 2026 FUKUSHIMA SHOUJI</div>
        </footer>
      </div>
    </ABFrame>
  );
};

window.V2Modern = V2Modern;
