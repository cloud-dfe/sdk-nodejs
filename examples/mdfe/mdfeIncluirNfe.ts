import Mdfe from "../../src/Mdfe";

// import { Mdfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function mdfeIncluirNfe() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const mdfe = new Mdfe(config)

        const payload = {
            chave: "50000000000000000000000000000000000000000000",
            codigo_municipio_carregamento: "2408003",
            nome_municipio_carregamento: "Mossoró",
            codigo_municipio_descarregamento: "5200050",
            nome_municipio_descarregamento: "Abadia de Goiás",
            chave_nfe: "50000000000000000000000000000000000000000000"
        };

        const resp = await mdfe.nfe(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

mdfeIncluirNfe()