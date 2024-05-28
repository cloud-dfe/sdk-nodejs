import Emitente from "../../src/Emitente";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

async function emitenteMostra() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjgsInVzciI6NiwidHAiOjIsImlhdCI6MTU3MjU0NzkyOX0.lTh431ejzV13RybU9Mck2OrgQnofhsePwvZttn3kZig',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const emitente = new Emitente(config)

        const resp = await emitente.token()

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

emitenteMostra()