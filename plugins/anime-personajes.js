async function personajesLista(msg) {
    let lista = Object.entries(personajes)
        .map(([id, p]) => `🚩 *${p.nombre}* (${p.fuente}) - 💰 ${p.valor}`)
        .join("\n");

    msg.reply(`📜 *Lista de personajes disponibles:*\n${lista}`);
}

let handler = {
    command: ['personajes'],
    tags: ['anime'],
    group: true,
    execute: personajesLista,
};

export default handler;