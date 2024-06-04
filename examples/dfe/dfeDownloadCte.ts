import Dfe from "../../src/Dfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Dfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function dfeDownloadCte() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            },
            //utilizar quando for utilizar o SDK por npm ou yarn 
            //configPath: "./src/config.json"
        }

        const dfe = new Dfe(config)

        const payload = {
            chave: "41190806338788000127570010000010011537233885"
        }

        const resp = await dfe.downloadCte(payload)

        console.log(resp)

        if (resp.sucesso) {
            const xml = Buffer.from(resp.doc.xml, "base64").toString("utf-8");
            const pdf = Buffer.from(resp.doc.pdf, "base64").toString("utf-8");
        }

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

dfeDownloadCte()