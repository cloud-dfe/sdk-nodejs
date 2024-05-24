import Client, { ConfigParams } from "./Client"

interface ConfigBase {
    ambiente: number,
    token: string
    options: {
        timeout: number,
        port: number
    }
}

export const AMBIENTE_PRODUCAO = 1;
export const AMBIENTE_HOMOLOGACAO = 2;

export default class Base{
     
    client: Client

    constructor(params: ConfigBase) {

        const options = {
            "timeout": 60,
            "port": 443,
        }

        if (!params.options || Object.keys(params.options).length === 0) {
            params.options = {...options}
        }

        if (!params.ambiente) {
            params.ambiente = AMBIENTE_HOMOLOGACAO
        }

        if (params.ambiente !== AMBIENTE_HOMOLOGACAO && params.ambiente !== AMBIENTE_PRODUCAO) {
            throw new Error("O AMBIENTE deve ser 1-PRODUÇÃO ou 2-HOMOLOGAÇÃO.")
        }

        const config: ConfigParams = {
            ambiente: params.ambiente,
            token: params.token,
            options: {
                timeout: params.options.timeout,
                port: params.options.port
            }
            }

        this.client = new Client(config)
    
    }
        
    checkKey(payload: any): string {
        let key: string = payload.chave.replace(/[^0-9]/g, '');
        if (!key || key.length !== 44) {
            throw new Error("A chave deve conter 44 dígitos numéricos");
        }
        return key;
    }
        

}
