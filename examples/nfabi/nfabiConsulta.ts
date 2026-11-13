import Nfce from "../../src/Nfce";

// import { Nfce, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

export default async function nfabiConsulta() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfabi = new Nfce(config)

        const payload = {
            chave: "41261210944071000104770010000001231012345679",
        };

        const resp = await nfabi.consulta(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfabiConsulta()