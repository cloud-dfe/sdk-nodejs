import Certificado from "../../src/Certificado";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function certificadoAtualiza() {
    
    try {

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjgsInVzciI6NiwidHAiOjIsImlhdCI6MTU3MjU0NzkyOX0.lTh431ejzV13RybU9Mck2OrgQnofhsePwvZttn3kZig',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const certificado = new Certificado(config)

        const fs = require('fs');

            const fileBase64 = fs.readFileSync('./examples/certificado/zcertificado.pfx')
            fileBase64.toString("base64")

        const payload = {
            certificado: fileBase64,
            senha: "associacao"
        }

        const resp = await certificado.atualiza(payload);

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);
    
    }

}