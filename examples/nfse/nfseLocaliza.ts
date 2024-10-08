import Nfse from "../../src/Nfse";

// import { Nfse, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfseLocaliza() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
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

        console.error("Ocorreu um erro:", error);

    }

}

nfseLocaliza()