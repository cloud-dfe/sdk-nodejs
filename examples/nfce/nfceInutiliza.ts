import Nfce from "../../src/Nfce";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Nfce, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfceInutiliza() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfce = new Nfce(config)

        const payload = {
            numero_inicial: "101006",
            numero_final: "101006",
            serie: "1",
            justificativa: "teste de inutilização"
        };

        const resp = await nfce.inutiliza(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfceInutiliza()