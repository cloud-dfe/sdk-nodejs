import Certificado from "../../src/Certificado";

// Se estiver utilizando o SDK instalado por instalação dos comandos npm ou yarn
// import { Certificado, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function certificadoAtualiza() {

    // Exemplo de chamada a API usando o SDK

    // Serve para atualizar o certificado do emitente, enviando o novo certificado para substituir o anterior

    
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

        // Conversão de um arquivo PFX do caminho especificado (caminho_do_arquivo.pfx), para uma string codificada em base64.

        const fs = require("fs");

            const fileBase64 = fs.readFileSync("caminho_do_arquivo.pfx")
            fileBase64.toString("base64")

        // Payload: Informações que serão enviadas para a API da IntegraNotas
        
        // OBS: Não utilize o payload de exemplo abaixo, ele é apenas um exemplo. Consulte a documentação para construir o payload para sua aplicação.
        
        // OBS: O CONTEÚDO DO CERTIFICADO DEVE SER ENVIADO EM BASE64
        
        const payload = {
            certificado: fileBase64,
            senha: "associacao" // Senha do certificado digital
        }

        // Chamada para o método atualiza na classe certificado

        const resp = await certificado.atualiza(payload);

        console.log(resp)

    } catch (error) {

        // Em caso de erros será lançado uma exceção com a mensagem de erro

        console.error("Ocorreu um erro:", error);
    
    }

}

certificadoAtualiza()