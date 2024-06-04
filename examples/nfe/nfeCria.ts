import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Nfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

interface Item {
    numero_item: string;
    codigo_produto: string;
    descricao: string;
    codigo_ncm: string;
    cfop: string;
    unidade_comercial: string;
    quantidade_comercial: number;
    valor_unitario_comercial: string;
    valor_bruto: string;
    unidade_tributavel: string;
    quantidade_tributavel: string;
    valor_unitario_tributavel: string;
    origem: string;
    inclui_no_total: string;
    imposto: {
        valor_aproximado_tributos: number;
        icms: {
            situacao_tributaria: string;
            aliquota_credito_simples: string;
            valor_credito_simples: string;
            modalidade_base_calculo: string;
            valor_base_calculo: string;
            modalidade_base_calculo_st: string;
            aliquota_reducao_base_calculo: string;
            aliquota: string;
            aliquota_final: string;
            valor: string;
            aliquota_margem_valor_adicionado_st: string;
            aliquota_reducao_base_calculo_st: string;
            valor_base_calculo_st: string;
            aliquota_st: string;
            valor_st: string;
        };
        fcp: {
            aliquota: string;
        };
        pis: {
            situacao_tributaria: string;
            valor_base_calculo: number;
            aliquota: string;
            valor: string;
        };
        cofins: {
            situacao_tributaria: string;
            valor_base_calculo: number;
            aliquota: string;
            valor: string;
        };
    };
    valor_desconto: number;
    valor_frete: number;
    valor_seguro: number;
    valor_outras_despesas: number;
    informacoes_adicionais_item: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function nfeCria() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            },
            //utilizar quando for utilizar o SDK por npm ou yarn 
            //configPath: "./src/config.json"
        }

        const nfe = new Nfe(config)

        const payload = {
            natureza_operacao: "VENDA DENTRO DO ESTADO",
            serie: "1",
            numero: "101007",
            data_emissao: "2021-06-26T13:00:00-03:00",
            data_entrada_saida: "2021-06-26T13:00:00-03:00",
            tipo_operacao: "1",
            finalidade_emissao: "1",
            consumidor_final: "1",
            presenca_comprador: "9",
            intermediario: {
                indicador: "0"
            },
            notas_referenciadas: [
                {
                    nfe: {
                        chave: "50191213188739000110550010000012151581978542"
                    }
                }
            ],
            destinatario: {
                cpf: "01234567890",
                nome: "EMPRESA MODELO",
                indicador_inscricao_estadual: "9",
                inscricao_estadual: null,
                endereco: {
                    logradouro: "AVENIDA TESTE",
                    numero: "444",
                    bairro: "CENTRO",
                    codigo_municipio: "4108403",
                    nome_municipio: "Mossoro",
                    uf: "PR",
                    cep: "59653120",
                    codigo_pais: "1058",
                    nome_pais: "BRASIL",
                    telefone: "8499995555"
                }
            },
            itens: [] as Item[],
            frete: {
                modalidade_frete: "0",
                volumes: [
                    {
                        quantidade: "10",
                        especie: null,
                        marca: "TESTE",
                        numero: null,
                        peso_liquido: 500,
                        peso_bruto: 500
                    }
                ]
            },
            cobranca: {
                fatura: {
                    numero: "1035.00",
                    valor_original: "224.50",
                    valor_desconto: "0.00",
                    valor_liquido: "224.50"
                }
            },
            pagamento: {
                formas_pagamento: [
                    {
                        meio_pagamento: "01",
                        valor: "224.50"
                    }
                ]
            },
            informacoes_adicionais_contribuinte: "PV: 3325 * Rep: DIRETO * Motorista:  * Forma Pagto: 04 DIAS * teste de observação para a nota fiscal * Valor aproximado tributos R$9,43 (4,20%) Fonte: IBPT",
            pessoas_autorizadas: [
                {
                    cnpj: "96256273000170"
                }, {
                    cnpj: "80681257000195"
                }
            ]
        };

        const listaItens = [
            {
                numero_item: "1",
                codigo_produto: "000297",
                descricao: "SAL GROSSO 50KGS",
                codigo_ncm: "84159020",
                cfop: "5102",
                unidade_comercial: "SC",
                quantidade_comercial: 10,
                valor_unitario_comercial: "22.45",
                valor_bruto: "224.50",
                unidade_tributavel: "SC",
                quantidade_tributavel: "10.00",
                valor_unitario_tributavel: "22.45",
                origem: "0",
                inclui_no_total: "1",
                imposto: {
                    valor_aproximado_tributos: 9.43,
                    icms: {
                        situacao_tributaria: "102",
                        aliquota_credito_simples: "0",
                        valor_credito_simples: "0",
                        modalidade_base_calculo: "3",
                        valor_base_calculo: "0.00",
                        modalidade_base_calculo_st: "4",
                        aliquota_reducao_base_calculo: "0.00",
                        aliquota: "0.00",
                        aliquota_final: "0.00",
                        valor: "0.00",
                        aliquota_margem_valor_adicionado_st: "0.00",
                        aliquota_reducao_base_calculo_st: "0.00",
                        valor_base_calculo_st: "0.00",
                        aliquota_st: "0.00",
                        valor_st: "0.00"
                    },
                    fcp: {
                        aliquota: "1.65"
                    },
                    pis: {
                        situacao_tributaria: "01",
                        valor_base_calculo: 224.5,
                        aliquota: "1.65",
                        valor: "3.70"
                    },
                    cofins: {
                        situacao_tributaria: "01",
                        valor_base_calculo: 224.5,
                        aliquota: "7.60",
                        valor: "17.06"
                    }
                },
                valor_desconto: 0,
                valor_frete: 0,
                valor_seguro: 0,
                valor_outras_despesas: 0,
                informacoes_adicionais_item: "Valor aproximado tributos R$: 9,43 (4,20%) Fonte: IBPT"
            }
        ];

        listaItens.forEach(item => {
            payload.itens.push(item);
        });

        const resp = await nfe.cria(payload)

        console.log(resp)

        if (resp.sucesso) {
            const chave = resp.chave
            await sleep(5000)
            
            let tentativa = 1

            while (tentativa <= 5) {
                const payload = {
                    chave: chave
                }

                const respC = await nfe.consulta(payload)
                if (respC.codigo != 5023) {
                    if (respC.sucesso) {
                        console.log(respC)
                        break
                    } else {
                        console.log(respC)
                        break
                    }
                }
                await sleep(5000)
                tentativa++
            }

        } else if ([5001, 5002].includes(resp.codigo)) {
            console.log(resp.erros)
        } else if (resp.codigo == 5008 || resp.codigo >= 7000) {
            const chave = resp.chave

            console.log(resp)

            const payload = {
                chave: chave
            }

            const respC = await nfe.consulta(payload)

            if (respC.sucesso) {
                if (respC.codigo = 5023) {
                    console.log(respC)
                }
            } else {
                console.log(respC)
            }
        } else {
            console.log(resp)
        }

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfeCria()