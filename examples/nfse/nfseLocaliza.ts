import Nfse from "../../src/Nfse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfseLocaliza() {

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
            data_emissao_inicial: "2020-01-01",
            data_emissao_final: "2020-01-31",
            data_competencia_inicial: "2020-01-01",
            data_competencia_final: "2020-01-31",
            tomador_cnpj: null,
            tomador_cpf: null,
            tomador_im: null,
            nfse_numero: null,
            nfse_numero_inicial: null,
            nfse_numero_final: null,
            rps_numero: "15",
            rps_serie: "0",
            rps_tipo: "1",
            pagina: "1"
        };

        const resp = await nfse.localiza(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

nfseLocaliza()