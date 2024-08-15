# SDK em Node.js para API Integra Notas

Este SDK visa simplificar a integração do seu sistema com a nossa API, oferecendo classes com funções pré-definidas para acessar as rotas da API. Isso elimina a necessidade de desenvolver uma aplicação para se comunicar diretamente com a nossa API, tornando o processo mais eficiente e direto.

*Nota: Utilizamos a biblioteca Axios para fazer as requisições de nossa API.*

## Forma de instalação de nosso SDK:

```
npm i sdk-cloud-dfe
```
ou
```
yarn add sdk-cloud-dfe
```

## Forma de uso:

```ts

// Se estiver utilizando o SDK baixado

import Nfe from "../../src/Nfe";
import { AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "../../src/Base";

// Se estiver utilizando o SDK pelas instalações dos comandos npm ou yarn

import { Nfe, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

async function nfeStatus() {

    try{
         // DEFINIÇÕES DOS PARAMETROS BASICOS

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443,
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

### Sobre dados de envio e retornos

Para saber os detalhes referente ao dados de envio e os retornos consulte nossa documentação [IntegraNotas Documentação](https://integranotas.com.br/doc).

### Veja alguns exemplos de consumi de nossa API nos link abaixo:

[Pasta de Exemplos](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples)

[Utilitários](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/utils)

[Averbação](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/averbacao)

[Certificado Digital](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/certificado)

[CT-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/cte)

[CT-e OS](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/cteos)

[DF-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/dfe)

[Emitente](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/emitente)

[GNR-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/gnre)

[MDF-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/mdfe)

[NFC-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/nfce)

[NFCom](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/nfcom)

[NF-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/nfe)

[NFS-e](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/nfse)

[Softhouse](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/softhouse)

[Webhook](https://github.com/cloud-dfe/sdk-nodejs/tree/master/examples/webhook)