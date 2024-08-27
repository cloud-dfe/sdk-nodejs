import Mdfe from "../../src/Mdfe";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Mdfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function mdfeCria() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const mdfe = new Mdfe(config)

        const payload = {
            tipo_operacao: "2",
            tipo_transporte: null,
            numero: "27",
            serie: "1",
            data_emissao: "2021-06-26T09:21:42-00:00",
            uf_inicio: "RN",
            uf_fim: "GO",
            municipios_carregamento: [
                {
                    codigo_municipio: "2408003",
                    nome_municipio: "Mossoró"
                }
            ],
            percursos: [
                { uf: "PB" },
                { uf: "PE" },
                { uf: "BA" }
            ],
            municipios_descarregamento: [
                {
                    codigo_municipio: "5200050",
                    nome_municipio: "Abadia de Goiás",
                    nfes: [
                        {
                            chave: "50000000000000000000000000000000000000000000"
                        }
                    ]
                }
            ],
            valores: {
                valor_total_carga: "100.00",
                codigo_unidade_medida_peso_bruto: "01",
                peso_bruto: "1000.000"
            },
            informacao_adicional_fisco: null,
            informacao_complementar: null,
            modal_rodoviario: {
                rntrc: "57838055",
                ciot: [],
                contratante: [],
                vale_pedagio: [],
                veiculo: {
                    codigo: "000000001",
                    placa: "FFF1257",
                    renavam: "335540391",
                    tara: "0",
                    tipo_rodado: "01",
                    tipo_carroceria: "00",
                    uf: "MT",
                    condutores: [
                        {
                            nome: "NOME TESTE",
                            cpf: "01234567890"
                        }
                    ]
                },
                reboques: []
            }
        };

        const resp = await mdfe.cria(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

mdfeCria()