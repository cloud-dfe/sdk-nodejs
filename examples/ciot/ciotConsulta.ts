import Ciot from "../../src/Ciot";

// import { Ciot, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function ciotConsulta() {

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
            "identificacao": "VIAGEM-0001"
        };

        const resp = await ciot.consulta(payload)

        console.log(resp)

        if (resp.sucesso) {
            if (resp.codigo == 5023) {
                // lote em processamento: consultar pela identificação ou esperar o webhook
            } else {
                // CIOT declarado
            }
        } else {
            // rejeição
        }

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

ciotConsulta()
