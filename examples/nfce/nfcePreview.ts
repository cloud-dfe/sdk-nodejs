import Nfce from "../../src/Nfce";

// import { Nfce, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";
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

export default async function nfcePreview() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfce = new Nfce(config)

        const payload = {
            natureza_operacao: "VENDA DENTRO DO ESTADO",
            serie: "1",
            numero: "101003",
            data_emissao: "2021-02-12T10:40:00-03:00",
            data_entrada_saida: "2021-02-12T10:40:00-03:00",
            tipo_operacao: "1",
            presenca_comprador: "1",
            itens: [] as Item[],
            frete: {
                modalidade_frete: "9"
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
                },
                {
                    cnpj: "80681257000195"
                }
            ]
        };
        
        // Carrega os itens
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

        const resp = await nfce.preview(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfcePreview()