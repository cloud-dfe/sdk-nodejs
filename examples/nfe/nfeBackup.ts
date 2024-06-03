import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfeBackup() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfe = new Nfe(config)

        const payload = {
            ano: 2021,
            mes: 2
        }

        const resp = await nfe.backup(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfeBackup()