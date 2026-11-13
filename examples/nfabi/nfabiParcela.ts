import Nfabi from "../../src/Nfabi";

// import { Nfabi, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function nfabiCancela() {

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
            "chave": "41261210944071000104770010000001231012345679",
            "codigo": "01",
            "valor_parcela": "10000.00",
            "valor_total_parcela": "10000.00",
            "data_pagamento": "2027-01-10",
            "tributacao": {
                "cst": "200",
                "classificacao_tributaria": "200046",
                "valor_operacao": "10000.00",
                "base_calculo": "10000.00",
                "ibs_uf": {
                    "aliquota": "0.1000",
                    "reducao_aliquota": "50.0000",
                    "aliquota_efetiva": "0.0500",
                    "valor": "5.00"
                },
                "ibs_municipal": {
                    "aliquota": "0.0000",
                    "reducao_aliquota": "50.0000",
                    "aliquota_efetiva": "0.0000",
                    "valor": "0.00"
                },
                "cbs": {
                    "aliquota": "0.9000",
                    "reducao_aliquota": "50.0000",
                    "aliquota_efetiva": "0.4500",
                    "valor": "45.00"
                }
            }
        };

        const resp = await nfabi.parcela(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfabiCancela()