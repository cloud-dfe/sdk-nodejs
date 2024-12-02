import Services, { ConfigServices } from "./Services";

export interface ConfigClient {
    token: string
    ambiente: number
    timeout?: number
    port?: number
    debug?: boolean
    options?: {
        timeout?: number,
        port?: number,
        debug?: boolean;
    }
}

const URI: { [key: string]: { [key: number]: string } } = {
    "api": {
        1: "https://api.integranotas.com.br/v1",
        2: "https://hom-api.integranotas.com.br/v1"
    }
}; 

export default class Client {

    token: string
    ambiente: number
    timeout: number
    port: number
    debug: boolean

    services: Services

    constructor(config: ConfigClient) {

        if (!config) {
            throw new Error("Devem ser passados os parametros básicos.")
        }

        if (config.ambiente !== 1 && config.ambiente !== 2) {
            throw new Error("O AMBIENTE deve ser 1-PRODUÇÃO ou 2-HOMOLOGAÇÃO.")
        }

        if (!config.token || typeof config.token !== "string" || config.token.trim() === "") {
            throw new Error("O TOKEN é obrigatorio.");
        }
        
        this.ambiente = config.ambiente
        this.token = config.token
        this.timeout = (config.timeout || 60) * 1000
        this.port = (config.port || 443)
        this.debug = (config.debug || false)

        if (config.options) {
            this.timeout = config.options.timeout ?? this.timeout;
            this.port = config.options.port ?? this.port;
            this.debug = config.options.debug ?? this.debug;
        }

        const configServices: ConfigServices = {
            baseUri: URI["api"][this.ambiente],
            timeout: this.timeout,
            port: this.port,
            debug: this.debug,
        }

        this.services = new Services(configServices)

    }

    async send(method: string, url: string, data?: any): Promise<any>
    {
        try{

            const headers = {
                "Authorization": `${this.token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            };

            const responseData = await this.services.request(method, url, data, headers);
            return responseData;
        } catch (error) {
            throw new Error("Erro ao enviar solicitação HTTP");
        }
        
    }

    async sendMultipart(url: string, data?: any): Promise<any>
    {
        try{

            const headers = [
                `Authorization: ${this.token}`,
                "Content-Type: multipart/form-data",
                "Accept: application/json"
            ];

            const responseData = await this.services.request("POST", url, data, headers);
            return responseData;
        } catch (error) {
            throw new Error("Erro ao enviar solicitação HTTP");
        }
        
    }

}