import Nfse from "../../src/Nfse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfseCancela() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfse = new Nfse(config)

        const payload = {
            chave: "35210669184612000188901080000000151508136464",
            justificativa: "teste de cancelamento"
        };

        const resp = await nfse.cancela(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfseCancela()