var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, '🎌 *Ingresa el nick (nombre)*\n\nEjemplo, !setnamebot kira', m, fake, )
try {
await conn.updateProfileName(text)
conn.reply(m.chat, '✅ *Se actualizó el nombre con éxito*', m, fake, )
} catch (e) {
console.log(e)
return conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )
}

}
handler.help = ['setbotname']
handler.tags = ['own']
handler.command = /^(setbotname|cambianombre)$/i

handler.owner = true

export default handler