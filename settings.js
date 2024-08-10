//base by SuckD
//re-upload? recode? copy code? give credit ya :)
//YouTube: @SuckD
//Instagram: ur_mama
//Telegram: t.me/suckdbotinc
//GitHub: @SuckD
//WhatsApp: +436508326391111
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@SuckD

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: SuckD" //ur yt chanel name
global.socialm = "GitHub: SuckD" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'SuckD Bot  V1' //ur bot name
global.ownernumber = ['436508326391111'] //ur owner number, dont add more than one
global.ownername = 'SuckD' //ur owner name
global.websitex = "https://youtu.be/tLq8_qOOGFo"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD2044"
global.themeemoji = '🪀'
global.wm = "SuckD Inc."
global.botscript = 'https://github.com/SuckD/CheemsBot-MD15' //script link
global.packname = "Sticker By"
global.author = "SuckD\n\n+436508326391111"
global.creator = "436508326391111@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["436508326391111"] // Premium User

//channel id
global.xchannel = {
	jid: '120363222395675670@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});