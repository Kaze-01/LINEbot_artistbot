// -----------------------------------------------
// モジュールインポート
// require : npmで読み込んだモジュールに対しJSで利用できるようにするメソッド
const server = require("express")();
const line = require("@line/bot-sdk"); // Messaging APIのSDKをインポート
// -----------------------------------------------
// パラメータ設定
const line_config = {
  // 環境変数からアクセストークンをセット
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  // 環境変数からChannel Secretをセット
  channelSecret: process.env.LINE_CHANNEL_SECRET
};
// ------------------------------------------------
// Webサーバー設定
// listen : サーバーは待受状態となりクライアントからリクエストがあればそれを受け取り処理する
server.listen(process.env.PORT || 3000);

// ------------------------------------------------
// APIコールのためのクライアントインスタンスを作成
const bot = new line.Client(line_config);

// ------------------------------------------------
// ルータ設定
server.post("/bot/webhook", line.middleware(line_config), (req, res, next) => {
    // 先行してLINE側にステータスコード200でレスポンスする
    res.sendStatus(200);

    // 全てのイベント処理のプロミスを格納する場所
    let events_processed = [];

    // イベントオブジェクトを順次処理
    req.body.events.forEach((event) => {
      // この処理の対象をイベントタイプがメッセージで，かつ，テキストタイプだった場合に限定
      if (event.type == "message" && event.message.type == "text"){
        // ユーザからのテキストメッセージが「こんにちは」だった場合のみ反応
        if (event.message.text == "こんにちは"){
          // replyMessage()で返信し，そのプロミスをevents_processedに追加
          events_processed.push(bot.replyMessage(event.replyToken, {
            type: "text",
            text:"これはこれは"
          }));
        }
      }
    });

    // 全てのイベント処理が終了したら何個のイベントが処理されたか出力
    Promise.all(events_processed).then(
      (response) => {
        console.log(`${response.length} event(s) processed.`);
      }
    );
});
