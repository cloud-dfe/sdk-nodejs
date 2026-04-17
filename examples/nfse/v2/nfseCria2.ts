import Nfse from "../../src/Nfse";

// import { Nfse, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function nfseCria() {

    function sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    try {

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            version: "2",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const nfse = new Nfse(config)

        const payload = {
            numero: "",
            serie: "",
            tipo: "",
            status: "",
            data_emissao: "",

            tomador: {
                cnpj: "",
                cpf: "",
                im: "",
                razao_social: "",

                endereco: {
                    logradouro: "",
                    numero: "",
                    complemento: "",
                    bairro: "",
                    codigo_municipio: "",
                    uf: "",
                    cep: ""
                }
            },

            servico: {
                endereco_local_prestacao: {
                    codigo_municipio: "",
                    codigo_municipio_prestacao: "",
                    codigo_pais: ""
                },

                codigo: "",
                codigo_tributacao_municipio: "",
                discriminacao: "",
                valor_servicos: "",
                valor_desconto_incondicionado: "",

                tributos_municipais: {
                    iss_retido: "",
                    responsavel_retencao: "",
                    valor_base_calculo_iss: "",
                    aliquota_iss: "",
                    valor_iss: ""
                },

                tributos_nacionais: {
                    valor_pis: "",
                    valor_cofins: "",
                    valor_inss: "",
                    valor_ir: "",
                    valor_csll: "",
                    valor_outras: ""
                }
            }
        };

        const resp = await nfse.cria(payload)

        console.log(resp)

        if (resp.sucesso) {
            await sleep(15000)
            const payload = {
                chave: resp.chave
            }

            const respC = await nfse.consulta(payload)
            if (respC.codigo != 5023) {
                if (respC.sucesso) {
                    // autorizado
                    console.log(respC)
                } else {
                    // rejeição
                    console.log(respC)
                }
            } else {
                // nota em processamento
                // recomendamos que seja utilizado o metodo de consulta manual ou o webhook
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
                } else {
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

nfseCria()