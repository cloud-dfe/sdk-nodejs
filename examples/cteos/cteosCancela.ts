import CteOs from "../../src/CteOs";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { CteOs, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function cteosCancela() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cteos = new CteOs(config)

        const payload = {
            chave: "41210222545265000108670010001010021121093113",
            justificativa: "teste de cancelamento."
        }

        const resp = await cteos.cancela(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

cteosCancela()