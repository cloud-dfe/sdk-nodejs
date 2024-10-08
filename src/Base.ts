import Client, { ConfigParams } from "./Client"

interface ConfigBase {
    ambiente: number,
    token: string
    options: {
        timeout: number,
        port: number,
        debug?: boolean
    }
}

export default class Base{
     
    client: Client

    constructor(params: ConfigBase, direction?: string) {

        const options = {
            "timeout": 60,
            "port": 443,
            "debug": false
        }

        if (!params.options || Object.keys(params.options).length === 0) {
            params.options = {...options}
            
        }

        if (!params.ambiente) {
            params.ambiente = 2
        }

        if (params.ambiente !== 1 && params.ambiente !== 2) {
            throw new Error("O AMBIENTE deve ser 1-PRODUÇÃO ou 2-HOMOLOGAÇÃO.")
        }

        const config: ConfigParams = {
            ambiente: params.ambiente,
            token: params.token,
            options: {
                timeout: params.options.timeout,
                port: params.options.port,
                debug: params.options.debug
            }
            }

        this.client = new Client(config, direction)
    
    }
        
    checkKey(payload: any): string {
        let key: string = payload.chave.replace(/[^0-9]/g, "");
        if (!key || key.length !== 44) {
            throw new Error("A chave deve conter 44 dígitos numéricos");
        }
        return key;
    }
        

}
