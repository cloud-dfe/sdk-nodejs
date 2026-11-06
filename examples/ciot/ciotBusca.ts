import Ciot from "../../src/Ciot";

// import { Ciot, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function ciotBusca() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const ciot = new Ciot(config)

        const payload = {
            "data_inicial": "2026-11-01",
            "data_final": "2026-11-30",
            "situacao": "ABERTO",
            "pagina": "1"
        };

        const resp = await ciot.busca(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

ciotBusca()
