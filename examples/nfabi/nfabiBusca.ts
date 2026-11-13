import Nfabi from "../../src/Nfabi";

// import { Nfabi, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function nfabiBusca() {

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
            numero_inicial: 1210,
            numero_final: 1210,
            serie: 1,
            data_inicial: "2019-12-01",
            data_final: "2019-12-31",
            cancel_inicial: "2019-12-01",
            cancel_final: "2019-12-31",
            status: "1"
        }

        const resp = await nfabi.busca(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfabiBusca()