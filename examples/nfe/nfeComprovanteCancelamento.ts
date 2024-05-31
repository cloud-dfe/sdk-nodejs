import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfeComprovanteCancelamento() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfe = new Nfe(config)

        const payload = {
            chave: "123456789012345678901234567890123456789012345678901234",
            cancela: true
        };

        const resp = await nfe.comprovante(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfeComprovanteCancelamento()