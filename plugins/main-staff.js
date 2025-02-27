let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️ *Versión:* ${global.vs}

👑 *Propietario:*

• Ivan
🍟 *Rol:* Propietario
🚩 *Número:* wa.me/50248019799
✨️ *GitHub:* https://github.com/TOKIO5023

🌸  *Colaboradores:*

• 🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/50248019799

• EMER
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/51935016869`

await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
