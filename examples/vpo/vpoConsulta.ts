import Vpo from "../../src/Vpo";

// import { Vpo, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function vpoConsulta() {

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
            "chave": "41261122333444000181930010000010011360347860"
        };

        const resp = await vpo.consulta(payload)

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

vpoConsulta()
