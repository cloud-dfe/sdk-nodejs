import CteOs from "../../src/CteOs";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { CteOs, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function cteosCria() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const cteos = new CteOs(config)

        const payload = {
            cfop: "5353",
            natureza_operacao: "PRESTACAO DE SERVICO",
            numero: "64",
            serie: "1",
            data_emissao: "2020-11-24T03:00:00-03:00",
            tipo_operacao: "0",
            codigo_municipio_envio: "2408003",
            nome_municipio_envio: "MOSSORO",
            uf_envio: "RN",
            tipo_servico: "6",
            codigo_municipio_inicio: "2408003",
            nome_municipio_inicio: "Mossoro",
            uf_inicio: "RN",
            codigo_municipio_fim: "2408003",
            nome_municipio_fim: "Mossoro",
            uf_fim: "RN",
            valores: {
                servico: "0.00",
                valor_total: "0.00",
                valor_receber: "0.00",
                quantidade: "10.00"
            },
            imposto: {
                icms: {
                    situacao_tributaria: "99",
                    valor_base_calculo: "0.00",
                    aliquota: "12.00",
                    valor: "0.00",
                    aliquota_reducao_base_calculo: "50.00"
                },
                federais: {
                    valor_pis: "0.00",
                    valor_cofins: "0.00",
                    valor_ir: "12.00",
                    valor_inss: "0.00",
                    valor_csll: "50.00"
                }
            },
            modal_rodoviario: {
                taf: "020335171251",
                numero_registro_estadual: "0203351712510203351712515"
            },
            tomador: {
                indicador_inscricao_estadual: "9",
                cpf: "01234567890",
                inscricao_estadual: null,
                nome: "EMPRESA MODELO",
                razao_social: "EMPRESA MODELO",
                telefone: "8499995555",
                endereco: {
                    logradouro: "AVENIDA TESTE",
                    numero: "444",
                    bairro: "CENTRO",
                    codigo_municipio: "2408003",
                    nome_municipio: "Mossoro",
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
            observacao: ""
        };

        const resp = await cteos.cria(payload)

        console.log(resp)

        if (resp.sucesso) {
            const chave = resp.chave
            await sleep(5000)
            
            let tentativa = 1

            while (tentativa <= 5) {
                const payload = {
                    chave: chave
                }

                const respC = await cteos.consulta(payload)
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

            const respC = await cteos.consulta(payload)

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

cteosCria()