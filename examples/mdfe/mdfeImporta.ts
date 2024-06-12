import Mdfe from "../../src/Mdfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Mdfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function mdfeImporta() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const mdfe = new Mdfe(config)

        const fs = require("fs");

        const fileBase64 = fs.readFileSync("caminho_do_arquivo.xml")
        fileBase64.toString("base64")

        const payload = {
            xml: fileBase64
        }

        const resp = await mdfe.importa(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

mdfeImporta()