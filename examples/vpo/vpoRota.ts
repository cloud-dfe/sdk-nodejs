import Vpo from "../../src/Vpo";

// import { Vpo, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function vpoRota() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const vpo = new Vpo(config)

        const payload = {
            "enderecos": [
                {
                    "codigo_municipio": "3543402",
                    "nome_municipio": "Ribeirão Preto",
                    "uf": "SP"
                },
                {
                    "codigo_municipio": "3505906",
                    "nome_municipio": "Batatais",
                    "uf": "SP"
                }
            ],
            "categoria": "7",
            "data_inicio": "2026-11-10 08:00:00",
            "tipo_combustivel": "DIESEL"
        };

        const resp = await vpo.rota(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

vpoRota()
