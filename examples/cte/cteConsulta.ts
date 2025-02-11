import Cte from "../../src/Cte";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Cte, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function cteConsulta() {

    /**
     * Este exemplo de uma chamada a API usando este SDK
     *
     * Este método consulta a situação de uma CTe na nossa base de dados. É realizada após a criação da CTe (processo ASSINCRONO) e em caso de sucesso serão retornados os dados da CTE autorizada.
     *
     * Porém em caso de falha o CTe será removido de nossa base de dados para que assim que os dados incorretos sejam corrigidos pelo emitente ele posa criar outro CTe.
     */

    try{

        // Variaveis para definição de configurações iniciais para o uso da SDK
        // Ambiente: Ambiente do qual o serviço vai ser executado (1- Produção / 2- Homologação)
        // Token: Token do emitente (distribuído pela CloudDFe se baseando no ambiente: homologação/produção)
        // Options: Opções para configuração da chamada da SDK
        // Timeout: Tempo de espera para a execução da chamada
        // Port: Porta de comunicação

        const config = {
            ambiente: 2, // IMPORTANTE: 1 - Produção / 2 - Homologação
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        // Instanciamento da classe Cte

        const cte = new Cte(config)

        // Payload: Informações que serão enviadas para a API da IntegraNotas

        // OBS: Não utilize o payload de exemplo abaixo, ele é apenas um exemplo. Consulte a documentação para construir o payload para sua aplicação.

        const payload = {
            chave: "50000000000000000000000000000000000000000000",
        }

        // Chamada para o método consulta na classe cte

        const resp = await cte.consulta(payload)

        console.log(resp)

        if (resp.sucesso) {
            if (resp.codigo == 5023) {
                // Lote em processamento
                // aguardar a chave e consultar/ou esperar o webhook notificar quando for processada pela sefaz

                console.log("Lote em processamento. Aguarde a chave e consulte novamente ou aguarde o webhook notificar quando for processada pela sefaz")

            } else {
                // CTe autorizada
                console.log(resp)
            }
        } else {
            // rejeição
            console.log(resp)
        }

    } catch (error) {

        // Em caso de erros será lançado uma exceção com a mensagem de erro

        console.error("Ocorreu um erro:", error);

    }

}

cteConsulta()