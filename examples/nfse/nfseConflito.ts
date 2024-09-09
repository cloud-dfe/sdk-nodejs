import Nfse from "../../src/Nfse";

// import { Nfse, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfseConflito() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfse = new Nfse(config)

        const fs = require("fs");

        const fileBase64 = fs.readFileSync("caminho_do_arquivo.xml")
        fileBase64.toString("base64")

        let payload = {
            chave: "50000000000000000000000000000000000000000000",
            xml: fileBase64
        }

        const resp = await nfse.conflito(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfseConflito()