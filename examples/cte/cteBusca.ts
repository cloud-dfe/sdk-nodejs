import Cte from "../../src/Cte";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function cteBusca() {

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
            numero_inicial: 1214,
            numero_final: 101002,
            serie: 1
        }

        const resp = await cte.busca(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

cteBusca()