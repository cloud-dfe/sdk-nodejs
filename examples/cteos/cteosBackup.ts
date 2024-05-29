import CteOs from "../../src/CteOs";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function cteosBackup() {

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
            ano: 2021,
            mes: 2
        }

        const resp = await cteos.backup(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

cteosBackup()