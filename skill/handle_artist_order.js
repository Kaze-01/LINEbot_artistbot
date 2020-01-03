"use strict";

module.exports = class SkillHandleArtistOrder {

  constructor(){
    this.required_parameter = {
      menu: {
        message_to_confirm: {
          type: "template",
          altText: "聞きたいアーティストを選んでね：(back number, aiko, sumika)",
          template: {
            type: "buttons",
            text: "アーティスト選択",
            actions: [
              {type: "message", label: "back number", text: "back number"},
              {type: "message", label: "aiko", text: "aiko"},
              {type: "message", label: "sumika", text: "sumika"}
            ]
        }
      },
      parser: async (value, bot, event, context) => {
        if (["back number", "aiko", "sumika"].includes(value)) {
          return value;
        }

        throw new Error();
      },
      reaction: async (error, value, bot, event, context) => {
        if (error) return;

        bot.queue({
          type: "text",
          text: `${value}だねー`
          });
        // 将来的にスクレイピングで埋め込むようにする
        // あとは，ファイル分ける
        if (value == "aiko") {
          bot.queue({
            // とりあえず事前に埋め込んだ動画を送信するように作成
              type: 'template',
              altText: 'Youtube List',
              template: {
                type: 'carousel',
                actions: [],
                columns: [
                  {
                  thumbnailImageUrl: 'https://i.ytimg.com/vi/_gxGkSkuQIM/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLDnmwkETCEKoctRRXm-tvtotjtXhA',
                  title: '『ストロー』',
                  text: `君にいいことがあるように`, // title指定時は60文字以内,
                  actions: [
                    {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=_gxGkSkuQIM'}
                    ]
                  },
                  {
                    thumbnailImageUrl: 'https://i.ytimg.com/vi/agMETSa5aDo/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&amp;rs=AOn4CLDFqn6aDiHhbOGj4OSCVdUhODZ8Zw',
                    title: '『彼の落書き』',
                    text: '明日こそは電話のベルが大きな声であたしの事呼び出します様に', // title指定時は60文字以内,
                    actions: [
                      {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=agMETSa5aDo'}
                      ]
                    },
                    {
                      thumbnailImageUrl: 'https://i.ytimg.com/vi/f8rBCB21iSI/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&amp;rs=AOn4CLAKfODZFLSzgbj79InjilAhIUJODw',
                      title: '『キラキラ』',
                      text: 'あなたを好きという事だけで　あたしは変わった', // title指定時は60文字以内,
                      actions: [
                        {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=f8rBCB21iSI'}
                        ]
                      }
                    ]
                } // template
              }); // bot.queue
          } else if (value == "back number") {
            bot.queue({
              // とりあえず事前に埋め込んだ動画を送信するように作成
                type: 'template',
                altText: 'Youtube List',
                template: {
                  type: 'carousel',
                  actions: [],
                  columns: [
                    {
                    thumbnailImageUrl: 'https://i.ytimg.com/vi/qyQvbemmlN8/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDpWafbN0w89-v-NWqkpGxdEFjxPA',
                    title: '『オールドファッション』',
                    text: `よく晴れた空に　雪が降るような`, // title指定時は60文字以内,
                    actions: [
                      {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=qyQvbemmlN8'}
                      ]
                    },
                    {
                      thumbnailImageUrl: 'https://i.ytimg.com/vi/BPqXF0MaODs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA6NZP3syOtTRPeaDpKwY5NyA0vDQ',
                      title: '『Artist』',
                      text: ' YUKE! ', // title指定時は60文字以内,
                      actions: [
                        {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=BPqXF0MaODs'}
                        ]
                      },
                      {
                        thumbnailImageUrl: 'https://i.ytimg.com/vi/T10oS02RsGA/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCQOcn3rR-PPj-s0xFmvMOts1G6iQ',
                        title: '『青い春』',
                        text: '型にはめ込まれたって 軋んだレールの上だって 負けじと明日へと向かう', // title指定時は60文字以内,
                        actions: [
                          {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=T10oS02RsGA'}
                          ]
                        }
                      ]
                  } // template
                }); // bot.queue
            } else if (value == "sumika") {
              bot.queue({
                // とりあえず事前に埋め込んだ動画を送信するように作成
                  type: 'template',
                  altText: 'Youtube List',
                  template: {
                    type: 'carousel',
                    actions: [],
                    columns: [
                      {
                      thumbnailImageUrl: 'https://i.ytimg.com/vi/uf0erQZ1BrM/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCkRNRN3wgzqOfehCMRCscARmI0SQ',
                      title: '『アネモネ』',
                      text: `いつか水だけじゃなく　君のおひさまに`, // title指定時は60文字以内,
                      actions: [
                        {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=uf0erQZ1BrM'}
                        ]
                      },
                      {
                        thumbnailImageUrl: 'https://i.ytimg.com/vi/xo-CWkY1M-o/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAe05qayr04MaQJQbUiBoXwmrKyPg',
                        title: '『Familia』',
                        text: 'Yes. Yes 頷いて　僕の言葉に今近づいて', // title指定時は60文字以内,
                        actions: [
                          {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=xo-CWkY1M-o'}
                          ]
                        },
                        {
                          thumbnailImageUrl: 'https://i.ytimg.com/vi/jYoaGPEhaC0/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBUh3V3tp0MlJyPjGetQDhbLXCuYw',
                          title: '『リグレット』',
                          text: '君の音を聞かせてよ', // title指定時は60文字以内,
                          actions: [
                            {type: "uri", label: "Start", uri: 'https://www.youtube.com/watch?v=jYoaGPEhaC0'}
                            ]
                          }
                        ]
                    } // template
                  }); // bot.queue
              } // if-end

        } //reaction
      }, //menu
    } // required_parameter
  } // constructor

  async finish(bot, event, context){
    await bot.reply({
     type: "text",
     text: `Thank you`
   });
  }
} // end
