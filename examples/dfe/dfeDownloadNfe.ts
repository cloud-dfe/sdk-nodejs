import Dfe from "../../src/Dfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function dfeDownloadNfe() {

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
            chave: "41190806338788000127550010000010011537233885"
        }

        const resp = await dfe.downloadNfe(payload)

        console.log(resp)

        if (resp.sucesso) {
            const xml = Buffer.from(resp.doc.xml, 'base64').toString('utf-8');
            const pdf = Buffer.from(resp.doc.pdf, 'base64').toString('utf-8');
        }

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

dfeDownloadNfe()