const personajes = {
    rem: { nombre: "Rem", fuente: "Re:Zero", valor: 80 },
    emilia: { nombre: "Emilia", fuente: "Re:Zero", valor: 100 },
    goku: { nombre: "Goku", fuente: "Dragon Ball", valor: 150 },
    luffy: { nombre: "Monkey D. Luffy", fuente: "One Piece", valor: 120 },
    naruto: { nombre: "Naruto Uzumaki", fuente: "Naruto", valor: 130 },
    mikasa: { nombre: "Mikasa Ackerman", fuente: "Attack on Titan", valor: 110 },
    gojo: { nombre: "Satoru Gojo", fuente: "Jujutsu Kaisen", valor: 200 },
    nezuko: { nombre: "Nezuko Kamado", fuente: "Demon Slayer", valor: 90 },
};

async function comprar(msg, { args }) {
    let usuario = msg.sender;
    let personajeId = args[0]?.toLowerCase();

    if (!personajeId || !personajes[personajeId]) {
        return msg.reply("❌ Personaje no encontrado. Usa `!personajes` para ver la lista.");
    }

    let personaje = personajes[personajeId];

    let saldo = await obtenerSaldo(usuario);

    if (saldo < personaje.valor) {
        return msg.reply(`❌ No tienes suficientes monedas. Necesitas ${personaje.valor} 💰.`);
    }

    await actualizarSaldo(usuario, saldo - personaje.valor);
    await registrarCompra(usuario, personajeId);

    msg.reply(`🎉 ¡Felicidades! Compraste a *${personaje.nombre}* de *${personaje.fuente}* por ${personaje.valor} 💰.`);
}

// Funciones ficticias que debes implementar con base de datos
async function obtenerSaldo(usuario) { return 100; } // Simulación
async function actualizarSaldo(usuario, nuevoSaldo) { /* Actualiza saldo */ }
async function registrarCompra(usuario, personajeId) { /* Registra en la base de datos */ }

let handler = {
    command: ['comprar'],
    tags: ['anime'],
    group: true,
    execute: comprar,
};

export default handler;