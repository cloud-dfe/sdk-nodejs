import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

async function nfeInutiliza() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjcwLCJ1c3IiOiIyIiwidHAiOjIsImlhdCI6MTU4MDkzNzM3MH0.KvSUt2x8qcu4Rtp2XNTOINqR-3c5V8iyITDmLoUF_SE',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfe = new Nfe(config)

        const payload = {
            numero_inicial: '101006',
            numero_final: '101006',
            serie: '1',
            justificativa: 'teste de inutilização'
        };

        const resp = await nfe.inutiliza(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

nfeInutiliza()