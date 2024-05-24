import HttpAxios, { ConfigHttpAxios } from './HttpAxios';

export interface ConfigParams {
    ambiente: number
    token: string
    options: {
        timeout: number,
        port: number
    }
}

const AMBIENTE_PRODUCAO = 1;
const AMBIENTE_HOMOLOGACAO = 2;
export default class Client{
    
    params: ConfigParams
    ambiente: number
    token: string
    options: object
    uri: string
    client: HttpAxios

    constructor(params: ConfigParams ) {

        this.params = params

        if (!params) {
            throw new Error("Devem ser passados os parametros básicos.")
        }

        if (params.ambiente !== AMBIENTE_HOMOLOGACAO && params.ambiente !== AMBIENTE_PRODUCAO) {
            throw new Error("O AMBIENTE deve ser 1-PRODUÇÃO ou 2-HOMOLOGAÇÃO.")
        }

        if (!params.token) {
            throw new Error("O TOKEN é obrigatorio.")
        }
        
        this.ambiente = (params.ambiente || 2)
        this.token = (params.token || "")
        this.options = (params.options || [])
        
        const fs = require("fs")
        const fileConfig = JSON.parse(fs.readFileSync("./config.json"));

        this.uri = fileConfig.api[this.ambiente]
        
        const config: ConfigHttpAxios = {
            baseUri: this.uri,
            token: this.token,
            options: this.options
        };

        this.client = new HttpAxios(config)
    }

    async send(method: string, route: string, payload:any): Promise<any>
    {
        try{
            const responseData = await this.client.request(method, route, payload);
            return responseData;
        } catch (error) {
            throw new Error("Erro ao enviar solicitação HTTP");
        }
    }

}