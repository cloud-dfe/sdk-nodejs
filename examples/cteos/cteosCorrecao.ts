import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";
import CteOs from "../../src/CteOs";

async function cteosCorrecao() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjEyOCwidXNyIjoyLCJ0cCI6MiwiaWF0IjoxNjI0NDgwMDA3fQ.r2H33r0hjWl9jmD97UTgJz_n2QargK0lpJ_vciz_0xY',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cteos = new CteOs(config)

        const payload = {
            grupo_corrigido: "ide",
            campo_corrigido: "natureza_operacao",
            valor_corrigido: "PRESTACAO DE SERVIÇO"
        }

        const resp = await cteos.correcao(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

cteosCorrecao()