import Certificado from "../../src/Certificado";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function certificadoMostra() {

    try {

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const certificado = new Certificado(config)

        const resp = await certificado.mostra();

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);
    
    }
}

certificadoMostra()