import Averbacao from "../../src/Averbacao";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

async function main() {

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

        const fs = require("fs")
    
        const payload  = {
            "xml": fs.readFileSync("./teste.xml").toString('base64'),
            "usuario": "login",
            "senha": "senha",
            "codigo": "codigo",
            "chave": ""
        };

        const resp = await averbacao.atm(payload)

        console.log(resp)

    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }

}

main();