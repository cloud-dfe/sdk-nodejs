import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Nfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfeInteressado() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            },
            //utilizar quando for utilizar o SDK por npm ou yarn 
            //configPath: "./src/config.json"
        }

        const nfe = new Nfe(config)

        const payload = {
            chave: "50000000000000000000000000000000000000000000",
            tipo_autor: "1",
            permite: true,
            numero_evento: 1,
            cpf: "01234567890"
        };

        const resp = await nfe.interessado(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfeInteressado()