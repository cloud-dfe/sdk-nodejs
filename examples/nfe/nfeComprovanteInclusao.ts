import Nfe from "../../src/Nfe";

// import { Nfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfeComprovanteInclusao() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfe = new Nfe(config)

        const payload = {
            chave: "123456789012345678901234567890123456789012345678901234", // Obrigatória Chave de acesso
            registra: {
                data: "2021-10-12T12:22:33-03:00", // Obrigatório Data e Hora do recebimento. (dhEntrega)
                imagem: "lUHJvYyB2ZXJzYW....", // Opcional Base64 da imagem capturada do Comprovante de Entrega da nNF-e ou uma string de referência
                recebedor_documento: "123456789 SSPRJ", // Obrigatório Número do documento de identificação da pessoa que assinou o Comprovante de Entrega da NF-e. (nDoc)
                recebedor_nome: "NOME TESTE", // Obrigatório Nome da pessoa que assinou o Comprovante de Entrega da NF-e. (xNome)
                coordenadas: { // dados opcionais no caso de cancelamento
                    latitude: -23.628360, // Latitude do ponto de entrega, com 6 decimais. (latGPS)
                    longitude: -46.622109, // Longitude do ponto de entrega, com 6 decimais. (longGPS)
                }
            }
        };

        const resp = await nfe.comprovante(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfeComprovanteInclusao()