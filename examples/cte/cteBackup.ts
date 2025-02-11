import Cte from "../../src/Cte";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Cte, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function cteBackup() {

    /**
    * Este exemplo de uma chamada a API usando este SDK
    *
    * Este método recupera o backup da CTe emitidas para o período informado
    *
    * NOTA: os backup tem a finalidade de garantir mais uma camada de segurança na guarda dos documentos para a softhouse.
    * NOTA: os backups são gerados no primeiro domingo de cada mês, e não estarão disponíveis até serem gerados.
    **/

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

        // Ano e mês do backup que deseja recuperar (Devem ser do tipo integer)

        const payload = {
            ano: 2021,
            mes: 2
        }

        // Chamada para o método backup na classe cte

        const resp = await cte.backup(payload)

        console.log(resp)

    } catch (error) {

        // Em caso de erros será lançado uma exceção com a mensagem de erro

        console.error("Ocorreu um erro:", error);

    }

}

cteBackup()