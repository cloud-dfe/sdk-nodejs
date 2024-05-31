import Mdfe from "../../src/Mdfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function mdfeBusca() {

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

        const payload = {
            numero_inicial: 1,
            numero_final: 100,
            serie: 1,
            //data_inicial: "2019-12-01",
            //data_final: "2019-12-31",
            //cancel_inicial: "2019-12-01", // Cancelamento
            //cancel_final: "2019-12-31"
        }

        const resp = await mdfe.busca(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

mdfeBusca()