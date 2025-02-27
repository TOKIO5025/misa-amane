import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('🎩');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "🐉NeoTokyo Beats🐲",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: ᴡɪʟʟᴢᴇᴋ-ᴏғɪᴄɪᴀʟ🍭\nitem1.TEL;waid=50248019799:50248019799\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: albertodovi100@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/crowbot_wa\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Nicaragua;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'һ᥆ᥣᥲ s᥆ᥡ 🐉NeoTokyo Beats🐲 ᥱᥣ mᥱȷ᥆r',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/185de7.jpg',
                sourceUrl: 'https://wa.me/50557865603?text=Vengo+Del+Comando+.owner',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi creador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creator'];
handler.tags = ['main'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;