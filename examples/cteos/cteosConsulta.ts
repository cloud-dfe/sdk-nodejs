import CteOs from "../../src/CteOs";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { CteOs, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function cteosConsulta() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cteos = new CteOs(config)

        const payload = {
            chave: "50000000000000000000000000000000000000000000",
        }

        const resp = await cteos.consulta(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

cteosConsulta()