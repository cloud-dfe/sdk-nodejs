import Nfabi from "../../src/Nfabi"

// import { Nfabi, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function nfabiBackup() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfabi = new Nfabi(config)

        const payload = {
            ano: 2021,
            mes: 2,
            emails: ["contato@cloud-dfe.com.br"]
        }

        const resp = await nfabi.backup(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfabiBackup()