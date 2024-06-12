import Cte from "../../src/Cte";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Cte, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function cteCria() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cte = new Cte(config)

        const payload = {
            cfop: "5932",
            natureza_operacao: "PRESTACAO DE SERVIÇO",
            numero: "66",
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
                cpf: "01234567890",
                inscricao_estadual: null,
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
                indicador_inscricao_estadual: "9"
            },
            observacao: ""
        };

        const resp: any = await cte.cria(payload)

        if (resp.sucesso) {
            const chave = resp.chave
            await sleep(5000)

            let tentativa = 1

            while (tentativa <= 5) {
                const payload = {
                    chave: chave
                }

                const respC = await cte.consulta(payload)
                
                if (respC.codigo != 5023) {
                    if (respC.sucesso) {
                        console.log(respC)
                        break
                    } else {
                        console.log(respC)
                        break
                    }
                }
                tentativa++
            }

        } else if ([5001, 5002].includes(resp.codigo)) {
            console.log(resp.erros);

        } else if (resp.codigo == 5008 || resp.codigo >= 7000) {
            const chave = resp.chave

            console.log(resp)
            const payload = {
                chave: chave
            }

            const respC = await cte.consulta(payload)
            
            if (respC.sucesso) {
                if (respC.codigo == 5023) {
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

cteCria()