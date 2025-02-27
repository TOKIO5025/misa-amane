let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*👑 𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒*
ᴍɪsᴀ-ᴀᴍᴀɴᴇ-ʙᴏᴛ-ᴍᴅ 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋
┃🧸❏ ${gp1}

*𝙈𝙄𝙎𝘼-𝘼𝙈𝘼𝙉𝙀-𝘽𝙊𝙏-𝙈𝘿 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋*
┃🧸❏ https://chat.whatsapp.com/GD0al1LF7Ux2dmPF0fDFYZ
*_𝐂𝐚𝐧𝐚𝐥 𝐎𝐟𝐢𝐜𝐢𝐚𝐥_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `𝐓𝐄𝐀𝐌 misa y lithg yagami` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['𝙈𝙄𝙎𝘼-𝘼𝙈𝘼𝙉𝙀-𝘽𝙊𝙏-𝙈𝘿', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler