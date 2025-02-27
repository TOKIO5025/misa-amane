import didyoumean from 'didyoumean'
import similarity from 'similarity'

export async function before(m, { conn, match, usedPrefix, command }) {
	
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let args = noPrefix.trim().split` `.slice(1)
let text = args.join` `
let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
if (help.includes(noPrefix)) return
let mean = didyoumean(noPrefix, help)
let sim = similarity(noPrefix, mean)
let som = sim * 100
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let caption = `*🪼 𝐇𝐎𝐋𝐀* @${who.split('@')[0]}
𝐄𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐜𝐫𝐞𝐨 𝐪𝐮𝐞 𝐧𝐨 𝐞𝐱𝐢𝐬𝐭𝐞, 𝐩𝐞𝐫𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐨𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐬𝐢𝐦𝐢𝐥𝐚𝐫𝐞𝐬 
✔ *${usedPrefix + mean}*
❕ *Similitud:* _${parseInt(som)}%_`
if (mean) conn.reply(m.chat, caption, m, { mentions: [who]})
}
}