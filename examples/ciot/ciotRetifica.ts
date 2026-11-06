import Ciot from "../../src/Ciot";

// import { Ciot, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function ciotRetifica() {

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
            "identificacao": "VIAGEM-0001",
            "data_fim": "2026-11-13",
            "valor_frete": "4800.00",
            "pagamentos": [
                {
                    "forma": "1",
                    "tipo": "5",
                    "cnpj": "22333444000181",
                    "chave_pix": "22333444000181",
                    "vencimento": "2026-11-13",
                    "valor": "4800.00"
                }
            ]
        };

        const resp = await ciot.retifica(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

ciotRetifica()
