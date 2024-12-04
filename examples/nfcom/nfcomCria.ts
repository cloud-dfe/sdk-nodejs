import Nfcom from "../../src/Nfcom";

// import { Nfcom, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe";

interface Item {
    numero_item: string,
    codigo_produto: string,
    descricao: string,
    codigo_classificacao: string,
    cfop: string,
    unidade_medida: string,
    quantidade: string,
    valor_unitario: string,
    valor_desconto: string,
    valor_outras_despesas: string,
    valor_bruto: string,
    indicador_devolucao: string,
    informacoes_adicionais: string,
    imposto: {
        icms: {
            situacao_tributaria: string,
            valor_base_calculo: string,
            aliquota: string,
            valor: string
        },
        fcp: {
            aliquota: null,
            valor: null
        }
    }
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function nfcomCria() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfcom = new Nfcom(config)

        const payload = {
            numero: "3",
            serie: "1",
            data_emissao: "2024-06-20T13:23:00-03:00",
            finalidade_emissao: "0",
            tipo_faturamento: "0",
            indicador_prepago: "0",
            indicador_cessao_meios_rede: "0",
            destinatario: {
                nome: "HELIO WOLFF",
                cpf: "06844990960",
                cnpj: "",
                id_outros: "",
                inscricao_estadual: null,
                indicador_inscricao_estadual: "9",
                endereco: {
                    logradouro: "LOJA",
                    complemento: null,
                    numero: "SN",
                    bairro: "BANANAL",
                    codigo_municipio: "4314035",
                    nome_municipio: "Pareci Novo",
                    uf: "RS",
                    codigo_pais: "1058",
                    nome_pais: "Brasil",
                    cep: "95783000",
                    telefone: null,
                    email: null
                }
            },
            assinante: {
                codigo: "123",
                tipo: "3",
                servico: "4",
                numero_contrato: "12345678",
                data_inicio: "2022-01-01",
                data_fim: "2022-01-01",
                numero_terminal: null,
                uf: null
            },
            itens: [] as Item[],
            cobranca: {
                data_competencia: "2024-06-01",
                data_vencimento: "2024-06-30",
                codigo_barras: "19872982798277298279287298728278272872872"
            },
            informacoes_adicionais_contribuinte: ""
        };
        
        const listaItens = [
            {
                numero_item: "1",
                codigo_produto: "123",
                descricao: "LP 1MB",
                codigo_classificacao: "0400401",
                cfop: "5301",
                unidade_medida: "1",
                quantidade: "1",
                valor_unitario: "10.00",
                valor_desconto: "0",
                valor_outras_despesas: "0",
                valor_bruto: "10.00",
                indicador_devolucao: "0",
                informacoes_adicionais: "teste",
                imposto: {
                    icms: {
                        situacao_tributaria: "00",
                        valor_base_calculo: "10.00",
                        aliquota: "18.00",
                        valor: "1.80"
                    },
                    fcp: {
                        aliquota: null,
                        valor: null
                    }
                }
            }
        ];

        listaItens.forEach(item => {
            payload.itens.push(item);
        });

        const resp = await nfcom.cria(payload)

        console.log(resp)

        if (resp.sucesso) {
            const chave = resp.chave
            await sleep(5000)
            
            let tentativa = 1

            while (tentativa <= 5) {
                const payload = {
                    chave: chave
                }

                const respC = await nfcom.consulta(payload)
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
        } else if (resp.codigo == 5008) {
            const chave = resp.chave

            console.log(resp)

            const payload = {
                chave: chave
            }

            const respC = await nfcom.consulta(payload)

            if (respC.codigo != 5023) {
                if (respC.sucesso) {
                    console.log(respC)
                    return respC
                } else {
                    console.log(respC)
                    return respC
                }
            } else {
                console.log(respC)
                return respC
            }
            
        } else {
            console.log(resp)
        }

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

nfcomCria()