import Nfse from "../../src/Nfse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function nfseSubstitui() {

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
            chave: "35210669184612000188901080000000151508136464",
            codigo_cancelamento: "2",
            motivo_cancelamento: "nota emitida com valor errado",
            numero: "1",
            serie: "0",
            tipo: "1",
            status: "1",
            data_emissao: "2017-12-27T17:43:14-03:00",
            tomador: {
                cnpj: "12345678901234",
                cpf: null,
                im: null,
                razao_social: "Fake Tecnologia Ltda",
                endereco: {
                    logradouro: "Rua New Horizon",
                    numero: "16",
                    complemento: null,
                    bairro: "Jardim America",
                    codigo_municipio: "4119905",
                    uf: "PR",
                    cep: "81530945"
                }
            },
            servico: {
                codigo_tributacao_municipio: "10500",
                discriminacao: "Exemplo Serviço",
                codigo_municipio: "4119905",
                valor_servicos: "1.00",
                valor_pis: "1.00",
                valor_cofins: "1.00",
                valor_inss: "1.00",
                valor_ir: "1.00",
                valor_csll: "1.00",
                valor_outras: "1.00",
                valor_aliquota: "1.00",
                valor_desconto_incondicionado: "1.00"
            },
            intermediario: {
                cnpj: "12345678901234",
                cpf: null,
                im: null,
                razao_social: "Fake Tecnologia Ltda"
            },
            obra: {
                codigo: "2222",
                art: "1111"
            }
        };

        const resp = await nfse.substitui(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

nfseSubstitui()