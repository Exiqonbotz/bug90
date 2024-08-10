//base by SuckD
//re-upload? recode? copy code? give credit ya :)
//YouTube: @SuckD
//Instagram: ur_mama
//Telegram: t.me/suckdbotinc
//GitHub: @SuckD
//WhatsApp: +436508326391111
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@SuckD

const { join } = require('path');
const gtts = require('node-gtts');
const { readFileSync, unlinkSync } = require('fs');

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(__dirname, '..XeonMedia/trash', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

module.exports = { tts }