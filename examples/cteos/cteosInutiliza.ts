import CteOs from "../../src/CteOs";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function cteosInutiliza() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjgsInVzciI6NiwidHAiOjIsImlhdCI6MTU3MjU0NzkyOX0.lTh431ejzV13RybU9Mck2OrgQnofhsePwvZttn3kZig",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cteos = new CteOs(config)

        const payload = {
            numero_inicial: "101004",
            numero_final: "101004",
            serie: "1",
            justificativa: "teste de inutilização"
        }

        const resp = await cteos.inutiliza(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

cteosInutiliza()