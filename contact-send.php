<?php
// お問い合わせフォーム送信処理（Xserver の PHP + mb_send_mail で動作）
// 公開前に MAIL_TO を施主の受信アドレスに設定すること。

const MAIL_TO   = ''; // 例: 'info@fukushimashouji.co.jp'（未設定のままだと送信しない）
const MAIL_FROM = 'noreply@fukushimashouji.co.jp'; // SPF を通すため自ドメインのアドレス
const ALLOWED_ORIGINS = [
    'https://fukushimashouji.co.jp',
    'https://www.fukushimashouji.co.jp',
];

header('Content-Type: application/json; charset=utf-8');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Accept');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

function fail($code, $msg) {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail(405, '不正なリクエストです。');
if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) fail(403, '不正なリクエストです。');
if (MAIL_TO === '') fail(500, '現在フォームを準備中です。');

// ボット対策（非表示項目に値が入っていたら成功扱いで破棄）
if (!empty($_POST['website'])) { echo json_encode(['ok' => true]); exit; }

function field($key, $max = 200) {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace("\0", '', $v);
    return mb_substr($v, 0, $max);
}
// ヘッダーに入り得る値は改行を除去
function oneline($s) { return preg_replace('/[\r\n]+/', ' ', $s); }

$f = [
    'type'    => oneline(field('type', 50)),
    'name'    => oneline(field('name', 100)),
    'kana'    => oneline(field('kana', 100)),
    'company' => oneline(field('company', 150)),
    'tel'     => oneline(field('tel', 30)),
    'fax'     => oneline(field('fax', 30)),
    'email'   => oneline(field('email', 200)),
    'from'    => oneline(field('from', 150)),
    'to'      => oneline(field('to', 150)),
    'cargo'   => oneline(field('cargo', 300)),
    'msg'     => field('msg', 5000),
];

if ($f['type'] === '' || $f['name'] === '' || $f['tel'] === '' || $f['msg'] === '') fail(400, '必須項目が入力されていません。');
if (!filter_var($f['email'], FILTER_VALIDATE_EMAIL)) fail(400, 'メールアドレスの形式が正しくありません。');
if (empty($_POST['agree'])) fail(400, '個人情報保護方針への同意が必要です。');

$body = "ホームページのお問い合わせフォームから送信がありました。\n\n"
    . "【種別】{$f['type']}\n"
    . "【お名前】{$f['name']}\n"
    . "【フリガナ】{$f['kana']}\n"
    . "【法人様名】{$f['company']}\n"
    . "【電話番号】{$f['tel']}\n"
    . "【FAX番号】{$f['fax']}\n"
    . "【メール】{$f['email']}\n"
    . "【集荷地】{$f['from']}\n"
    . "【配送先】{$f['to']}\n"
    . "【荷物の内容・数量】{$f['cargo']}\n"
    . "【お問い合わせ内容】\n{$f['msg']}\n\n"
    . "----\n送信日時: " . date('Y-m-d H:i:s') . "\n"
    . "送信元IP: " . ($_SERVER['REMOTE_ADDR'] ?? '') . "\n";

mb_language('Japanese');
mb_internal_encoding('UTF-8');
$subject = '【HPお問い合わせ】' . $f['type'] . '（' . ($f['company'] !== '' ? $f['company'] . ' ' : '') . $f['name'] . '様）';
$headers = 'From: ' . mb_encode_mimeheader('福嶋商事 ホームページ') . ' <' . MAIL_FROM . ">\r\n"
    . 'Reply-To: ' . $f['email'];

if (!mb_send_mail(MAIL_TO, $subject, $body, $headers, '-f' . MAIL_FROM)) {
    fail(500, '送信に失敗しました。');
}
echo json_encode(['ok' => true]);
