import Nfse from "../../src/Nfse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfseConflito() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjEyNSwidXNyIjoyLCJ0cCI6MiwiaWF0IjoxNjIzOTQwNjg5fQ.Ag3y6wTmiCFb9LExLcc57WfUnP34kQM8jj2Vx91DZL8',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfse = new Nfse(config)

        const fs = require('fs');

        const fileBase64 = fs.readFileSync('./examples/nfse/zcertificado.xml')
        fileBase64.toString("base64")

        let payload = {
            chave: "50191213188739000110650010000012151581978542",
            xml: fileBase64
        }

        const resp = await nfse.conflito(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

nfseConflito()