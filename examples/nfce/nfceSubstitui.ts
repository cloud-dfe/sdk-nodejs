import Nfce from "../../src/Nfce";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfceSubstitui() {

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
            chave: "41210622545265000108650010001010071119056471",
            chave_referenciada: "41210622545265000108650010001010081409791910",
            justificativa: "teste de substituicao"
        };

        const resp = await nfce.substitui(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfceSubstitui()