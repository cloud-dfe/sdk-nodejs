import Softhouse from "../../src/Softhouse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function softhouseDeletaEmitente() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjcwLCJ1c3IiOiIyIiwidHAiOjIsImlhdCI6MTU4MDkzNzM3MH0.KvSUt2x8qcu4Rtp2XNTOINqR',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const softhouse = new Softhouse(config)

        const payload = {
            doc: "25447784000121" // CPF OU CNPJ
        };

        const resp = await softhouse.deletaEmitente(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

softhouseDeletaEmitente()