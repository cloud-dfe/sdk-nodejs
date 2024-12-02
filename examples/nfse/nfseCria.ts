import Nfse from "../../src/Nfse";

// import { Nfse, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfseCria() {

    function sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfse = new Nfse(config)

        const payload = {
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
                codigo_municipio: "4119905",
                itens: {
                    codigo_tributacao_municipio: "10500",
                    discriminacao: "Exemplo Serviço",
                    valor_servicos: "1.00",
                    valor_pis: "1.00",
                    valor_cofins: "1.00",
                    valor_inss: "1.00",
                    valor_ir: "1.00",
                    valor_csll: "1.00",
                    valor_outras: "1.00",
                    valor_aliquota: "1.00",
                    valor_desconto_incondicionado: "1.00"
                }
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

        const resp = await nfse.cria(payload)

        console.log(resp)

        if (resp.sucesso) {
            const chave = resp.chave
            await sleep(5000)
            
            let tentativa = 1

            while (tentativa <= 5) {
                const payload = {
                    chave: chave
                }

                const respC = await nfse.consulta(payload)
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

            const respC = await nfse.consulta(payload)

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

nfseCria()