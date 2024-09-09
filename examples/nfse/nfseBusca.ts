import Nfse from "../../src/Nfse";

// import { Nfse, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfseBusca() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfse = new Nfse(config)

        const payload = {
            numero_rps_inicial: 15,
            numero_rps_final: 15,
            serie_rps: "0",
            // numero_nfse_inicial: 1210,
            // numero_nfse_final: 1210,
            // data_inicial: "2019-12-01", // Autorização
            // data_final: "2019-12-31",
            // cancel_inicial: "2019-12-01", // Cancelamento
            // cancel_final: "2019-12-31"
        };

        const resp = await nfse.busca(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfseBusca()