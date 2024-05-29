import Gnre from "../../src/Gnre";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function gnreCria() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjEyOCwidXNyIjoyLCJ0cCI6MiwiaWF0IjoxNjI0NDgwMDA3fQ.r2H33r0hjWl9jmD97UTgJz_n2QargK0lpJ_vciz_0xY',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const gnre = new Gnre(config)

        const payload = {
            numero: "6",
            uf_favoverida: "RO",
            ie_emitente_uf_favorecida: null,
            tipo: "0",
            valor: 12.55,
            data_pagamento: "2022-05-22",
            identificador_guia: "12345",
            receitas: [
                {
                    codigo: "100102",
                    detalhamento: null,
                    data_vencimento: "2022-05-22",
                    convenio: "Convênio ICMS 142/18",
                    numero_controle: "1",
                    numero_controle_fecp: null,
                    documento_origem: {
                        numero: "000000001",
                        tipo: "10"
                    },
                    produto: null,
                    referencia: {
                        periodo: "0",
                        mes: "05",
                        ano: "2022",
                        parcela: null
                    },
                    valores: [
                        {
                            valor: 12.55,
                            tipo: "11"
                        }
                    ],
                    contribuinte_destinatario: {
                        cnpj: null,
                        cpf: null,
                        ie: null,
                        razao: null,
                        ibge: null
                    },
                    extras: [
                        {
                            codigo: "52",
                            conteudo: "32220526434850000191550100000000011015892724"
                        }
                    ]
                }
            ]
        };

        const resp = await gnre.cria(payload)

        console.log(resp)

        if (resp.sucesso) {
            const chave = resp.chave
            await sleep(5000)
            
            let tentativa = 1

            while (tentativa <= 5) {
                const payload = {
                    chave: chave
                }

                const respC = await gnre.consulta(payload)
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

            const respC = await gnre.consulta(payload)

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

        console.error('Ocorreu um erro:', error);

    }

}

gnreCria()