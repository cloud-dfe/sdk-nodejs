import Averbacao from "../../src/Averbacao";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

async function portoSeguroXml() {

    try{
        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjgsInVzciI6NiwidHAiOjIsImlhdCI6MTU3MjU0NzkyOX0.lTh431ejzV13RybU9Mck2OrgQnofhsePwvZttn3kZig',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const averbacao = new Averbacao(config);

        const fs = require('fs');

        const fileBase64 = fs.readFileSync('./teste.xml')
        fileBase64.toString("base64")

        const payload = {
            xml: fileBase64,
            usuario: "login",
            senha: "senha",
            chave: ""
        }

        const resp = await averbacao.portoSeguro(payload);

        console.log(resp)

    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }

}

portoSeguroXml()