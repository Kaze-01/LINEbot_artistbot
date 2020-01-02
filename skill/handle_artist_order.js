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
          text: `${value}ですね！`
          });
        }
      },
    }
  }
  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: `ここでおすすめを教える(スクレイピング)`
    });
  }
}
