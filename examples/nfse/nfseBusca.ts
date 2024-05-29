import Nfse from "../../src/Nfse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfseBusca() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjcwLCJ1c3IiOiIyIiwidHAiOjIsImlhdCI6MTU4MDkzNzM3MH0.KvSUt2x8qcu4Rtp2XNTOINqR-3c5V8iyITDmLoUF_SE',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfse = new Nfse(config)

        const payload = {
            numero_rps_inicial: 15,
            numero_rps_final: 15,
            serie_rps: "0",
            // numero_nfse_inicial: 1210,
            // numero_nfse_final: 1210,
            // data_inicial: "2019-12-01", // Autorização
            // data_final: "2019-12-31",
            // cancel_inicial: "2019-12-01", // Cancelamento
            // cancel_final: "2019-12-31"
        };

        const resp = await nfse.busca(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

nfseBusca()