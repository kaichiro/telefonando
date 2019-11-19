const axios = require("axios");
const TotalVoice = require("totalvoice-node");
require("dotenv").config();

const client = new TotalVoice(process.env.TOTALVOICE_API_KEY);

const servers = [
    {
        name: "Servidor 1",
        url: `${process.env.URL_BASE}:${process.env.PORT_SERVER1}`,
        developer: {
            name: "Kaichiro Fukuda",
            telephone: process.env.TELEPHONE
        }
    },
    {
        name: "Servidor 2",
        url: `${process.env.URL_BASE}:${process.env.PORT_SERVER2}`,
        developer: {
            name: "Kaichiro Fukuda",
            telephone: process.env.TELEPHONE
        }
    }
];

// setInterval(
(async function () {
    console.log(new Date());
    for (const server of servers) {
        await axios({
            url: server.url,
            method: "get"
        }).then((response) => {
            console.log(`${server.name} está no ar!`);
        }).catch(() => {
            console.log(`${server.name} está fora ar!`);
            const message = `${server.developer.name}, o ${server.name}-(${server.url}) está fora do ar! Favor verificar este evento!!`;
            const options = {
                velocidade: 2,
                tipo_voz: "br-Vitoria"
            };
            client.tts.enviar(server.developer.telephone, message, options)
                .then(() => {
                    console.log(`${server.developer.name} já foi avisado.`)
                });
        });
    }
    console.log(`=====`);
})();
// , 2000);
