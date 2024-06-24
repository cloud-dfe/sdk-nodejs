import Nfcom from "../../src/Nfcom"
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Nfcom, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function nfcomBackup() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfcom = new Nfcom(config)

        const payload = {
            ano: 2021,
            mes: 2,
            emails: ["contato@cloud-dfe.com.br"]
        }

        const resp = await nfcom.backup(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfcomBackup()