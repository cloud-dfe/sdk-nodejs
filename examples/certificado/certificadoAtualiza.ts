import Certificado from "../../src/Certificado";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Certificado, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function certificadoAtualiza() {
    
    try {

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const certificado = new Certificado(config)

        const fs = require("fs");

            const fileBase64 = fs.readFileSync("caminho_do_arquivo.pfx")
            fileBase64.toString("base64")

        const payload = {
            certificado: fileBase64,
            senha: "associacao"
        }

        const resp = await certificado.atualiza(payload);

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);
    
    }

}

certificadoAtualiza()