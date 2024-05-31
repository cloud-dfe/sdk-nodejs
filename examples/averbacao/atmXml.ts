import Averbacao from "../../src/Averbacao";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function atmXml() {

    try{
        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }
        
        const averbacao = new Averbacao(config);

        const fs = require("fs")
    
        const payload  = {
            "xml": fs.readFileSync("caminho_do_arquivo.xml").toString("base64"),
            "usuario": "login",
            "senha": "senha",
            "codigo": "codigo",
            "chave": ""
        };

        const resp = await averbacao.atm(payload)

        console.log(resp)

    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }

}

atmXml();