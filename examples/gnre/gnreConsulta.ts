import Gnre from "../../src/Gnre";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

async function gnreConsulta() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjgsInVzciI6NiwidHAiOjIsImlhdCI6MTU3MjU0NzkyOX0.lTh431ejzV13RybU9Mck2OrgQnofhsePwvZttn3kZig',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const gnre = new Gnre(config)

        const payload = {
            chave: '50210613188739000110570010000000641214766139'
        }

        const resp = await gnre.consulta(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

gnreConsulta()