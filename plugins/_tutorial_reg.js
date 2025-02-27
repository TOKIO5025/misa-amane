// si vas usar el comando deja créditos Codigo creado por 🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘾𝙤𝙙𝙚🐲 
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
    let img = await (await fetch(`https://files.catbox.moe/0abxes.mp4`)).buffer()
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    let txt = `*Aquí tienes el tutorial de cómo registrarte*`
    await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
    await m.react('💫')  // Reacción del bot con el emoji 💫
}
handler.help = ['tutorialreg']
handler.tags = ['tutorialreg']
handler.command = /^(tutorialreg)$/i
export default handler