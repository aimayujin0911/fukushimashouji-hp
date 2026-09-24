// Shared building blocks — real assets edition.
// Logo: red brushstroke calligraphy (株式会社 福嶋商事) for impact,
//        small dark version for compact headers.

const ASSETS = '../assets/images';

const Logo = ({ variant = 'large', height = 36, style = {} }) => {
  // 'large' = red brush 1920x239 (use for hero); 'small' = dark header version 368x40
  const src = variant === 'small'
    ? `${ASSETS}/logos/site-logo.png`
    : `${ASSETS}/logos/site-logo-large.png`;
  return <img src={src} alt="株式会社 福嶋商事" style={{ height, width:'auto', display:'block', ...style }} />;
};

// Convenience image with cover behavior. Most components import this for photos.
const Img = ({ src, alt = '', style = {}, ...rest }) => (
  <img src={`${ASSETS}/${src}`} alt={alt} style={{ display:'block', width:'100%', height:'100%', objectFit:'cover', ...style }} {...rest} />
);

// Tiny utility: frame each artboard's contents.
const ABFrame = ({ children, bg = '#fff' }) => (
  <div className="ab-root" style={{ width:'100%', height:'100%', background: bg, overflow:'hidden' }}>
    {children}
  </div>
);

// Brand tokens (truck red derived from the fleet).
const BRAND = {
  red: '#b91e1d',
  redDeep: '#8a1517',
  redDark: '#5a0d0e',
  ink: '#1a1a1a',
  charcoal: '#2a2622',
  paper: '#f7f3ec',
  cream: '#faf6ed',
  offwhite: '#fafaf7',
  line: '#1a1a1a18',
};

// Single content source used across variations so copy stays in sync.
const COMPANY = {
  name: '株式会社 福嶋商事',
  nameKana: 'ふくしましょうじ',
  nameEn: 'FUKUSHIMA SHOUJI Co.,Ltd.',
  catch1: 'プロフェッショナル運び屋集団',
  catch2: '大型車・ゲート車のことなら！',
  philosophy: '今を大切に、仕事に誇りと情熱を',
  established: '2010年3月1日',
  estYear: 2010,
  capital: '1,000万円',
  employees: 62,
  vehicles: 57,
  offices: 6,
  area: '関東一円',
  ceo: '福嶋 徹也',
  tel: '048-229-3130',
  address: '埼玉県川口市戸塚南1-1-32',
};

const NEWS = [
  ['2026.05.18', 'INFO', '夏季休業のご案内'],
  ['2026.04.02', 'お知らせ', '群馬営業所 倉庫を新規開設しました'],
  ['2026.03.10', '採用', '大型ドライバー 経験者・未経験者ともに募集中'],
  ['2026.01.15', '安全', '群馬営業所 Gマーク認定取得・本社4回目更新'],
];

const OFFICES = [
  ['本社', '埼玉県川口市戸塚南1-1-32', '048-229-3130'],
  ['本社営業所', '埼玉県越谷市新川町2-366', '048-960-1001'],
  ['湘南営業所', '神奈川県伊勢原市下落合6-1-302', '0463-74-5255'],
  ['習志野営業所', '千葉県八千代市吉橋1103-9', '047-406-5512'],
  ['群馬営業所', '群馬県邑楽郡邑楽町赤堀3694-7', '0276-55-0860'],
  ['つくば営業所', '茨城県常総市新石下3925', '0297-44-4125'],
];

const BUSINESS = [
  ['一般貨物運送', 'Transport', '関東一円への配送ネットワーク。一般雑貨・家電・飲料・精密機器・イベント資材まで、お客様のご要望に応える柔軟な運送サービス。', 'vehicle-1.webp'],
  ['倉庫保管事業', 'Warehouse', '越谷120坪・群馬350坪の2拠点。フォークリフトを備え、北関東〜首都圏物流の結節点として機能します。', 'service-warehouse-1.webp'],
  ['貨物利用運送', 'Logistics', '協力輸送業者とのネットワークを活用し、規模やエリアを問わず最適な輸送手段を組み立てます。', 'truck-02.jpg'],
];

const VALUES = [
  ['今', 'Now', 'この瞬間に全力を注ぐ。高い品質を実現し、お客様の信頼を得る。'],
  ['誇り', 'Pride', '仕事に誇りを持って働きがいを満たし、良識ある行動を実践する。'],
  ['情熱', 'Passion', '成功するか否かは「能力」よりも「情熱」による。情熱に勝る能力なし。'],
];

const NAV = ['事業内容', '車両紹介', '安全の取り組み', '会社概要', '採用情報', 'お問い合わせ'];

Object.assign(window, { ASSETS, Logo, Img, ABFrame, BRAND, COMPANY, NEWS, OFFICES, BUSINESS, VALUES, NAV });
