import Dfe from "../../src/Dfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Dfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function dfeBackup() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const dfe = new Dfe(config)

        const payload = {
            tipo: "nfe",
            ano: "2020",
            mes: "10"
        }

        const resp = await dfe.backup(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

dfeBackup()