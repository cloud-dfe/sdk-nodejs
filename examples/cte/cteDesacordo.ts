import Cte from "../../src/Cte";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function cteDesacordo() {

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
            chave: "50210613188739000110570010000000641214766139",
            justificativa: "Não contratei esse serviço"
        }

        const resp = await cte.desacordo(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

cteDesacordo()