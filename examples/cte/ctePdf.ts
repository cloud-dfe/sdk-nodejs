import Cte from "../../src/Cte";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function ctePdf() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cte = new Cte(config)

        const payload = {
            chave: "50210613188739000110570010000000651936467924"
        }

        const resp = await cte.pdf(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

ctePdf()