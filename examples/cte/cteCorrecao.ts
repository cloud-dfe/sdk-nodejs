import Cte from "../../src/Cte";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Cte, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function cteCorrecao() {
  /**
   * Este exemplo de uma chamada a API usando este SDK
   *
   * Este método solicita a criação de uma carta de correção
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

    // grupo_corrigido: Indicar o grupo de informações que pertence o campo alterado.
    // campo_corrigido: Nome do campo modificado do CT-e Original.
    // valor_corrigido: Conteudo correspondente à alteração.

    const payload = {
      chave: "50000000000000000000000000000000000000000000",
      correcoes: {
        grupo_corrigido: "ide",
        campo_corrigido: "natOp",
        valor_corrigido: "PRESTACAO DE SERVIÇO",
      },
    };

    // Chamada para o método correcao na classe cte

    const resp = await cte.correcao(payload);

    console.log(resp);
  } catch (error) {
    // Caso ocorra algum erro, será mostrado no console.

    console.error("Ocorreu um erro:", error);
  }
}

cteCorrecao();
