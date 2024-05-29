import Dfe from "../../src/Dfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function dfeDownloadNfse() {

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
            chave: "35220533722532000191903080000001051050520224"
        }

        const resp = await dfe.downloadNfse(payload)

        console.log(resp)

        if (resp.sucesso) {
            const xml = Buffer.from(resp.doc.xml, 'base64').toString('utf-8');
        }

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

dfeDownloadNfse()