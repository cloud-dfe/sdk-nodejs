import Dfe from "../../src/Dfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function dfeBuscaNfes() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjEyOCwidXNyIjoyLCJ0cCI6MiwiaWF0IjoxNjI0NDgwMDA3fQ.r2H33r0hjWl9jmD97UTgJz_n2QargK0lpJ_vciz_0xY',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const dfe = new Dfe(config)

        const payload = {
            periodo: "2020-10",
            data: "2020-10-15",
            cnpj: "06338788000127"
        }

        const resp = await dfe.buscaNfse(payload)

        console.log(resp)

        if (resp.sucesso) {
            
            resp.docs.forEach((doc: any) => {
                const chave = doc.chave;
                console.log(chave)
            })

        }

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

dfeBuscaNfes()