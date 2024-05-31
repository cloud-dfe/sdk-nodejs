import Dfe from "../../src/Dfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function dfeBuscaNfe() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
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

        const resp = await dfe.buscaNfe(payload)

        console.log(resp)

        if (resp.sucesso) {
            
            resp.docs.forEach((doc: any) => {
                const chave = doc.chave;
                console.log(chave)
            })

            resp.eventos_proprios.forEach((doc: any) => {
                const chave = doc.chave;
                console.log(chave)
            })

        }

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

dfeBuscaNfe()