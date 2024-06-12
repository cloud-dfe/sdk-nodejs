import Mdfe from "../../src/Mdfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Mdfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function mdfeCondutor() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const mdfe = new Mdfe(config)

        const payload = {
            chave: "50000000000000000000000000000000000000000000",
            nome: "NOME TESTE",
            cpf: "01234567890"
        }

        const resp = await mdfe.condutor(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

mdfeCondutor()