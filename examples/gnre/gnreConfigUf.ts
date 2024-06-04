import Gnre from "../../src/Gnre";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Gnre, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function gnreConfigUf() {

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

        const gnre = new Gnre(config)

        const payload = {
            uf_favorecida: "RR",
            codigo_receita: null,
            curier: null
        }

        const resp = await gnre.configUf(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

gnreConfigUf()