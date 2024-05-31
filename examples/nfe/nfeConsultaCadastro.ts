import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfeConsultaCadastro() {

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
            uf: "SP",
            cnpj: "12345678901234",
            //ie: "123456789",
            //cpf: "12345678901"
        };

        const resp = await nfe.cadastro(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfeConsultaCadastro()