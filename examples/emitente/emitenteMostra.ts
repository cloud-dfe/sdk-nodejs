import Emitente from "../../src/Emitente";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Emitente, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function emitenteMostra() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const emitente = new Emitente(config)

        const resp = await emitente.mostra()

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

emitenteMostra()