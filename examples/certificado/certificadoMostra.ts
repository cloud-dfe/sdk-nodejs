import Certificado from "../../src/Certificado";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Certificado, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function certificadoMostra() {

    // Exemplo de chamada a API usando o SDK

    // Este método retorna os dados do certificado atual do emitente

    try {

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

        // Instanciamento da classe Certificado

        const certificado = new Certificado(config)

        // Chamada para o método mostra na classe certificado

        const resp = await certificado.mostra();

        console.log(resp)

    } catch (error) {

        // Em caso de erros será lançado uma exceção com a mensagem de erro

        console.error("Ocorreu um erro:", error);
    
    }
}

certificadoMostra()