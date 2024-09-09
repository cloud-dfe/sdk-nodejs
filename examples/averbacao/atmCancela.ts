import Averbacao from "../../src/Averbacao";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Averbacao, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function atmXml() {

    try{
        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }
        
        const averbacao = new Averbacao(config);

        const fs = require("fs");

        const fileBase64 = fs.readFileSync("caminho_do_arquivo.xml")
        fileBase64.toString("base64")

        const payload = {
            xml: fileBase64,
            usuario: "login",
            senha: "senha",
            codigo: "codigo",
            chave: "50000000000000000000000000000000000000000000"
        }

        const resp = await averbacao.atmCancela(payload)

        console.log(resp)

    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }

}

atmXml();