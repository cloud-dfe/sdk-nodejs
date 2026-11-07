import Vpo from "../../src/Vpo";

// import { Vpo, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function vpoCria() {

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
            "numero": "1001",
            "identificacao": "VIAGEM-77",
            "emissor": "SEMPARAR",
            "data_inicio": "2026-11-10 08:00:00",
            "data_fim": "2026-11-12 18:00:00",
            "rota": {
                "id": "58222",
                "indice": "0",
                "distancia_km": "45.279",
                "tipo_combustivel": "DIESEL"
            },
            "veiculo": {
                "placa": "BCD2E34",
                "categoria": "7"
            },
            "transportador": {
                "cnpj": "22333444000181",
                "rntrc": "87654321",
                "nome": "TRANSPORTADOR EXEMPLO LTDA"
            },
            "cte": "1234"
        };

        const resp = await vpo.cria(payload)

        console.log(resp)

        if (resp.sucesso) {
            if (resp.codigo == 5023) {
                // lote em processamento: consultar pela chave ou esperar o webhook
            } else {
                // VPO comprado
            }
        } else {
            // rejeição
        }

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

vpoCria()
