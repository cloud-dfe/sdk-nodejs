# SDK em Node.js para API CloudDFe

Este SDK visa simplificar a integração do seu sistema com a nossa API, oferecendo classes com funções pré-definidas para acessar as rotas da API. Isso elimina a necessidade de desenvolver uma aplicação para se comunicar diretamente com a nossa API, tornando o processo mais eficiente e direto.

*Nota: Utilizamos a biblioteca Axios para fazer as requisições de nossa API.*

## Forma de instalação de nosso SDK:

```
npm install cloud-dfe-sdk
```

## Forma de uso:

```ts
import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "../../src/Base";

async function nfeStatus() {

    try{
        // DEFINE OS PARAMETROS BASICOS DA CLASSE

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        // INSTANCIE A CLASSE PARA A OPERAÇÃO DESEJADA

        const nfe = new Nfe(config)

        // REALIZE A OPERAÇÃO DESEJADA

        const resp = await nfe.status()

        // resp RETORNA O OBJETO DE RETORNO DA API

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

// EXECUTA A FUNCÃO CRIADA

nfeStatus()
```

Para saber os detalhes referente ao dados de envio e os retornos consulte nossa documentação [IntegraNotas Documentação](https://integranotas.com.br/doc).

### Veja alguns exemplos de requisições nos link abaixo:

Para ir a pasta de exemplos [CLIQUE AQUI](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples)

[Averbação](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/averbacao)

[Certificado Digital](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/certificado)

[CT-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/cte)

[CT-e OS](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/cteos)

[DF-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/dfe)

[Emitente](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/emitente)

[GNR-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/gnre)

[MDF-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/mdfe)

[NFC-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/nfce)

[NF-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/nfe)

[NFS-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/nfse)

[Softhouse](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/softhouse)