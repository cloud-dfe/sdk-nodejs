import Cte from "../../src/Cte";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Cte, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function ctePreview() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cte = new Cte(config)

        const payload = {
            cfop: "5353",
            natureza_operacao: "PRESTACAO DE SERVIÇO",
            numero: "64",
            serie: "1",
            data_emissao: "2021-06-22T03:00:00-03:00",
            tipo_operacao: "0",
            codigo_municipio_envio: "2408003",
            nome_municipio_envio: "MOSSORO",
            uf_envio: "RN",
            tipo_servico: "0",
            codigo_municipio_inicio: "2408003",
            nome_municipio_inicio: "Mossoró",
            uf_inicio: "RN",
            codigo_municipio_fim: "2408003",
            nome_municipio_fim: "Mossoró",
            uf_fim: "RN",
            retirar_mercadoria: "1",
            detalhes_retirar: null,
            tipo_programacao_entrega: "0",
            sem_hora_tipo_hora_programada: "0",
            remetente: {
                cnpj: "15493526000128",
                inscricao_estadual: "239084510",
                nome: "EMPRESA MODELO",
                razao_social: "MODELO LTDA",
                telefone: "8433163070",
                endereco: {
                    logradouro: "AVENIDA TESTE",
                    numero: "444",
                    bairro: "CENTRO",
                    codigo_municipio: "2408003",
                    nome_municipio: "MOSSORÓ",
                    uf: "RN"
                }
            },
            valores: {
                valor_total: "0.00",
                valor_receber: "0.00",
                valor_total_carga: "224.50",
                produto_predominante: "SAL",
                quantidades: [
                    {
                        codigo_unidade_medida: "01",
                        tipo_medida: "Peso Bruto",
                        quantidade: "500.00"
                    }
                ]
            },
            imposto: {
                icms: {
                    situacao_tributaria: "20",
                    valor_base_calculo: "0.00",
                    aliquota: "12.00",
                    valor: "0.00",
                    aliquota_reducao_base_calculo: "50.00"
                }
            },
            nfes: [
                {
                    chave: "50000000000000000000000000000000000000000000"
                }
            ],
            modal_rodoviario: {
                rntrc: "02033517"
            },
            destinatario: {
                cpf: "01234567890",
                inscricao_estadual: null,
                nome: "EMPRESA MODELO",
                telefone: "8499995555",
                endereco: {
                    logradouro: "AVENIDA TESTE",
                    numero: "444",
                    bairro: "CENTRO",
                    codigo_municipio: "2408003",
                    nome_municipio: "Mossoró",
                    cep: "59603330",
                    uf: "RN",
                    codigo_pais: "1058",
                    nome_pais: "BRASIL",
                    email: "teste@teste.com.br"
                }
            },
            componentes_valor: [
                {
                    nome: "teste2",
                    valor: "1999.00"
                }
            ],
            tomador: {
                tipo: "3",
                indicador_inscricao_estadual: "1"
            },
            observacao: ""
        };

        const resp = await cte.preview(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

ctePreview()