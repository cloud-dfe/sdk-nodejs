import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

async function nfeComprovanteCancela() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjcwLCJ1c3IiOiIyIiwidHAiOjIsImlhdCI6MTU4MDkzNzM3MH0.KvSUt2x8qcu4Rtp2XNTOINqR-3c5V8iyITDmLoUF_SE',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfe = new Nfe(config)

        const payload = {
            chave: '123456789012345678901234567890123456789012345678901234', // Obrigatória Chave de acesso
            registra: {
                data: '2021-10-12T12:22:33-03:00', // Obrigatório Data e Hora do recebimento. (dhEntrega)
                imagem: "lUHJvYyB2ZXJzYW....", // Opcional Base64 da imagem capturada do Comprovante de Entrega da nNF-e ou uma string de referência
                recebedor_documento: "123456789 SSPRJ", // Obrigatório Número do documento de identificação da pessoa que assinou o Comprovante de Entrega da NF-e. (nDoc)
                recebedor_nome: 'Fulano de Tal', // Obrigatório Nome da pessoa que assinou o Comprovante de Entrega da NF-e. (xNome)
                coordenadas: { // dados opcionais no caso de cancelamento
                    latitude: -23.628360, // Latitude do ponto de entrega, com 6 decimais. (latGPS)
                    longitude: -46.622109, // Longitude do ponto de entrega, com 6 decimais. (longGPS)
                }
            }
        };

        const resp = await nfe.comprovante(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

nfeComprovanteCancela()