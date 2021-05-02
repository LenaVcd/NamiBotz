const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { return`╭──────「 *_ᴘᴇʀᴀᴛᴜʀᴀɴ_* 」
┴
│× 𝐒𝐩𝐚𝐦
│× 𝐓𝐞𝐥𝐞𝐩𝐨𝐧
│𝐌𝐞𝐥𝐚𝐧𝐠𝐠𝐚𝐫? 𝐁𝐥𝐨𝐤! 
│𝐊𝐞𝐭𝐢𝐤 #𝐦𝐞𝐧𝐮
│𝐔𝐧𝐭𝐮𝐤 𝐦𝐞𝐥𝐢𝐡𝐚𝐭 𝐟𝐢𝐭𝐮𝐫² 𝐝𝐢 𝐛𝐨𝐭 𝐢𝐧𝐢
┬
╰──────「 *_𝐍𝐚𝐦𝐢𝐁𝐨𝐭_* 」
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (6060));
  var minutes = Math.floor(seconds % (6060) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

// info bot 
const bottt = (prefix) => {
return `
*𝐉𝐢𝐤𝐚 𝐢𝐧𝐠𝐢𝐧 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐛𝐨𝐭 𝐢𝐧𝐢 𝐬𝐢𝐡𝐥𝐚𝐤𝐚𝐧 𝐤𝐞𝐭𝐢𝐤 #𝐦𝐞𝐧𝐮*

https://chat.whatsapp.com/KPRfXJba3UH7RHyY5DMDqh
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭──────「 *_𝐃𝐨𝐧𝐚𝐬𝐢_* 」
┴
│√ 𝐏𝐮𝐥𝐬𝐚 : 81211651261
│√ 𝐒𝐚𝐰𝐞𝐫𝐢𝐚 : https://saweria.co/Melysa
│
│\`\`\`𝐏𝐮𝐥𝐬𝐚\`\`\`
│𝟔𝐤 𝐛𝐢𝐬𝐚 𝐦𝐚𝐬𝐮𝐤𝐢𝐧 𝐛𝐨𝐭 𝐢𝐧𝐢 𝟑 𝐛𝐮𝐥𝐚𝐧
┬
╰──────「 *_𝐍𝐚𝐦𝐢𝐁𝐨𝐭𝐳_* 」
`
}
exports.donasi = donasi
// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command ${prefix}tts

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*𝐌𝐚𝐚𝐟 ${pushname2} 𝐋𝐢𝐦𝐢𝐭 𝐡𝐚𝐫𝐢 𝐢𝐧𝐢 𝐡𝐚𝐛𝐢𝐬*\ɴ*𝐋𝐢𝐦𝐢𝐭 𝐝𝐢 𝐫𝐞𝐬𝐞𝐭 𝐬𝐞𝐭𝐢𝐚𝐩 12:00 𝐰𝐢𝐛 𝐭𝐞𝐧𝐠𝐚𝐡 𝐦𝐚𝐥𝐚𝐦 𝐤𝐚𝐤*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: *${limitCounts}*
`
}

exports.limitend = limitend
exports.limitcount = limitcount