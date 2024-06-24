import Nfcom from "../../src/Nfcom";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Nfcom, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function nfcomBusca() {

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
            numero_inicial: 1210,
            numero_final: 1210,
            serie: 1,
            data_inicial: "2019-12-01",
            data_final: "2019-12-31",
            cancel_inicial: "2019-12-01",
            cancel_final: "2019-12-31",
            status: "1"
        }

        const resp = await nfcom.busca(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfcomBusca()