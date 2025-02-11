import Cte from "../../src/Cte";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Cte, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function cteCria() {
  /**
   * Este exemplo de uma chamada a API usando este SDK
   *
   * Este método cria uma cte
   */

  try {
    // Variaveis para definição de configurações iniciais para o uso da SDK
    // Ambiente: Ambiente do qual o serviço vai ser executado (1- Produção / 2- Homologação)
    // Token: Token do emitente (distribuído pela CloudDFe se baseando no ambiente: homologação/produção)
    // Options: Opções para configuração da chamada da SDK
    // Timeout: Tempo de espera para a execução da chamada
    // Port: Porta de comunicação

    const config = {
      ambiente: 2, // IMPORTANTE: 1 - Produção / 2 - Homologação
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
      options: {
        timeout: 60,
        port: 443,
      },
    };

    // Instanciamento da classe Cte

    const cte = new Cte(config);

    // Payload: Informações que serão enviadas para a API da IntegraNotas

    // OBS: Não utilize o payload de exemplo abaixo, ele é apenas um exemplo. Consulte a documentação para construir o payload para sua aplicação.

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
          uf: "RN",
        },
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
            quantidade: "500.00",
          },
        ],
      },
      imposto: {
        icms: {
          situacao_tributaria: "20",
          valor_base_calculo: "0.00",
          aliquota: "12.00",
          valor: "0.00",
          aliquota_reducao_base_calculo: "50.00",
        },
      },
      nfes: [
        {
          chave: "50000000000000000000000000000000000000000000",
        },
      ],
      modal_rodoviario: {
        rntrc: "02033517",
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
          email: "teste@teste.com.br",
        },
      },
      componentes_valor: [
        {
          nome: "teste2",
          valor: "1999.00",
        },
      ],
      tomador: {
        tipo: "3",
        indicador_inscricao_estadual: "9",
      },
      observacao: "",
    };

    // Chamada para o método cria na classe cte

    const resp: any = await cte.cria(payload);

    //Verificação do retorno

    if (resp.sucesso) {
      await sleep(15000);
      const payload = {
        chave: resp.chave,
      };

      const respC = await cte.consulta(payload);
      if (respC.codigo != 5023) {
        if (respC.sucesso) {
          // autorizado
          console.log(respC);
        } else {
          // rejeição
          console.log(respC);
        }
      } else {
        // nota em processamento
        // recomendamos que seja utilizado o metodo de consulta manual ou o webhook
      }
    } else if ([5001, 5002].includes(resp.codigo)) {
      console.log(resp.erros);
    } else if (resp.codigo == 5008) {
      const chave = resp.chave;

      // >= 7000 erro de timout ou de conexão
      // 5008 documento já criado

      console.log(resp);

      const payload = {
        chave: chave,
      };

      // recomendamos fazer a consulta pela chave para sincronizar o documento

      const respC = await cte.consulta(payload);

      if (respC.codigo != 5023) {
        if (respC.sucesso) {
          // autorizado
          console.log(respC);
        } else {
          // rejeição
          console.log(respC);
        }
      } else {
        // em processamento
        console.log(respC);
      }
    } else {
      // outros erros
      console.log(resp);
    }
  } catch (error) {
    // Em caso de erros será lançado uma exceção com a mensagem de erro

    console.error("Ocorreu um erro:", error);
  }
}

cteCria();
