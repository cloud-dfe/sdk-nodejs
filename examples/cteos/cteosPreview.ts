import CteOs from "../../src/CteOs";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { CteOs, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function cteosPreview() {

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
            natureza_operacao: "PRESTACAO DE SERVIÇO",
            numero: "64",
            serie: "1",
            data_emissao: "2020-11-24T03:00:00-03:00",
            tipo_operacao: "0",
            codigo_municipio_envio: "2408003",
            nome_municipio_envio: "MOSSORO",
            uf_envio: "RN",
            tipo_servico: "6",
            codigo_municipio_inicio: "2408003",
            nome_municipio_inicio: "Mossoró",
            uf_inicio: "RN",
            codigo_municipio_fim: "2408003",
            nome_municipio_fim: "Mossoró",
            uf_fim: "RN",
            valores: {
                servico: "0.00",
                valor_total: "0.00",
                valor_receber: "0.00",
                quantidade: "10.00"
            },
            imposto: {
                icms: {
                    situacao_tributaria: "20",
                    valor_base_calculo: "0.00",
                    aliquota: "12.00",
                    valor: "0.00",
                    reducao_base_calculo: "50.00"
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
                indicador_inscricao_estadual: "1",
                cnpj: "15495526000128",
                inscricao_estadual: "212055510",
                nome: "EMPRESA MODELO",
                razao_social: "EMPRESA MODELO",
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
            observacao: ""
        };

        const resp = await cteos.preview(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

cteosPreview()