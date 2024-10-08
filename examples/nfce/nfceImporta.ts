import Nfce from "../../src/Nfce";

// import { Nfce, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfceImporta() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfce = new Nfce(config)

        const fs = require("fs");

        const fileBase64 = fs.readFileSync("caminho_do_arquivo.xml")
        fileBase64.toString("base64")

        const payload = {
            xml: fileBase64
        }

        const resp = await nfce.importa(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfceImporta()