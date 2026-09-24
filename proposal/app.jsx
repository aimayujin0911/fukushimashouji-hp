// Main app — design canvas with 4 homepage artboards using real 福嶋商事 assets.

const { DesignCanvas, DCSection, DCArtboard, DCPostIt } = window;

const App = () => {
  const W = 1440;

  return (
    <DesignCanvas>
      <DCSection
        id="intro"
        title="株式会社 福嶋商事 ─ Webサイトリニューアル デザイン案"
        subtitle="既存サイトの素材（ロゴ・写真・色＝truck red）を踏襲しつつ、雰囲気の異なる4方向をご用意しました。各カード上部の ⤢ ボタンで拡大プレビューできます。"
      >
        <DCPostIt x={40} y={40} width={420}>
          {`📝 C案ベースで5案\n\nC案（黒×赤のダイナミック）にご決定ありがとうございます。\nそのテイストを基調に、5つの方向へ振り分けました ↓\n\nC-α 王道フルブリード ─ 巨大縦組み・安定感\nC-β スプリット ─ 非対称2カラム・編集的\nC-γ レッド基調 ─ 赤を主役に反転・攻めた印象\nC-δ シネマワイド ─ レターボックス・映像的\nC-ε グリッドシステム ─ モジュラー・堅牢\n\n下部には初回の4方向(A〜D)とヒーロー8案も参考に残しています。`}
        </DCPostIt>
      </DCSection>

      <DCSection
        id="c-base"
        title="◆ C案をベースに進める ─ 5 directions"
        subtitle="C案（Black × Red のダイナミック）を基調に、5つの方向へ振り分けました。C-α 王道フルブリード／C-β 非対称スプリット／C-γ レッド基調（反転）／C-δ シネマワイド／C-ε グリッドシステム。"
      >
        <DCArtboard id="cb1" label="C-α 王道フルブリード ─ 巨大縦組み／安定感" width={W} height={5560}>
          <CBase1Royal />
        </DCArtboard>
        <DCArtboard id="cb2" label="C-β スプリット ─ 非対称2カラム／編集的" width={W} height={4190}>
          <CBase2Split />
        </DCArtboard>
        <DCArtboard id="cb3" label="C-γ レッド基調 ─ 反転／エネルギッシュ" width={W} height={5240}>
          <CBase3Red />
        </DCArtboard>
        <DCArtboard id="cb4" label="C-δ シネマワイド ─ レターボックス／映像的" width={W} height={4180}>
          <CBase4Cinema />
        </DCArtboard>
        <DCArtboard id="cb5" label="C-ε グリッドシステム ─ モジュラー／堅牢" width={W} height={3620}>
          <CBase5Grid />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="proposals"
        title="ホームページ案 ─ 4 directions"
        subtitle="A → 静かな和の余白／B → 元気なポップ／C → ダイナミック（据え置き）／D → ドキュメンタリー風。雰囲気をガラッと振り分けました。"
      >
        <DCArtboard id="v1" label="A · 静寂・和の余白 ─ ミニマル和風／白" width={W} height={5640}>
          <V1Traditional />
        </DCArtboard>

        <DCArtboard id="v2" label="B · ポップ・元気 ─ 親しみやすい／カラフル" width={W} height={4230}>
          <V2Modern />
        </DCArtboard>

        <DCArtboard id="v3" label="C · ダイナミック ─ Black × Red ／力強さ" width={W} height={5900}>
          <V3Editorial />
        </DCArtboard>

        <DCArtboard id="v4" label="D · ドキュメンタリー ─ B&amp;W／編集記事風" width={W} height={4280}>
          <V4Warm />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="c-family"
        title="C案を基調に ─ 4 directions"
        subtitle="C案（Black × Red のダイナミック）のテイストを踏襲しつつ、C-2 計器盤・データ／C-3 斜め構図の疾走感／C-4 重量級インダストリアル／C-5 上質なプレミアム、の4方向に振り分けました。"
      >
        <DCArtboard id="v5" label="C-2 · テレメトリー ─ 計器盤／データグリッド" width={W} height={3300}>
          <V5Telemetry />
        </DCArtboard>
        <DCArtboard id="v6" label="C-3 · ベロシティ ─ 斜め構図／疾走感" width={W} height={3780}>
          <V6Velocity />
        </DCArtboard>
        <DCArtboard id="v7" label="C-4 · ヘビーデューティ ─ 重量級／ハザード帯" width={W} height={3360}>
          <V7HeavyDuty />
        </DCArtboard>
        <DCArtboard id="v8" label="C-5 · ミッドナイト ─ 上質／プレミアム黒" width={W} height={4480}>
          <V8Midnight />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="hero-patterns"
        title="トップ画像パターン ─ 8 directions"
        subtitle="写真は元の縦横比そのまま、トリミングなしで使用しています。雰囲気の違いをご比較ください。"
      >
        <DCArtboard id="h1" label="01 · シネマティック ─ かっこいい／黒" width={W} height={1320}>
          <HeroP1Cinematic />
        </DCArtboard>
        <DCArtboard id="h2" label="02 · マガジンカバー ─ 上品／編集的" width={W} height={1080}>
          <HeroP2Magazine />
        </DCArtboard>
        <DCArtboard id="h3" label="03 · ポラロイド ─ 親しみやすい／温かい" width={W} height={1080}>
          <HeroP3Friendly />
        </DCArtboard>
        <DCArtboard id="h4" label="04 · ギャラリー ─ おしゃれ／quiet" width={W} height={1080}>
          <HeroP4Gallery />
        </DCArtboard>
        <DCArtboard id="h5" label="05 · ブラシロゴ主役 ─ ブランド感" width={W} height={900}>
          <HeroP5Brush />
        </DCArtboard>
        <DCArtboard id="h6" label="06 · 風景／moody ─ おしゃれ／詩的" width={W} height={1280}>
          <HeroP6Scenic />
        </DCArtboard>
        <DCArtboard id="h7" label="07 · ポスター ─ 大胆／力強い" width={W} height={1100}>
          <HeroP7Poster />
        </DCArtboard>
        <DCArtboard id="h8" label="08 · 新聞風 ─ 知的／おしゃれ" width={W} height={1100}>
          <HeroP8News />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
