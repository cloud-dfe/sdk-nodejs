import CteOs from "../../src/CteOs";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function cteosCorrecao() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
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

        console.error("Ocorreu um erro:", error);

    }

}

cteosCorrecao()