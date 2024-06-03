import Softhouse from "../../src/Softhouse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function softhouseMostraEmitente() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const softhouse = new Softhouse(config)

        const payload = {
            doc: "25447784000121" //CPF ou CNPJ
        };

        const resp = await softhouse.mostraEmitente(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

softhouseMostraEmitente()