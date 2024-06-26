import axios, { AxiosResponse, AxiosError } from "axios";

export interface ConfigHttpAxios {
    baseUri: string;
    token: string;
    options: {
        timeout?: number;
        port?: number;
        debug?: boolean;
    };
}

export default class HttpAxios {
    baseUri: string;
    token: string;
    headers: object;
    options: object;
    timeout: number;
    port: number;
    debug: boolean;

    constructor(config: ConfigHttpAxios){
        this.baseUri = config.baseUri
        this.token = config.token

        this.headers = {
            "Authorization": `${config.token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        this.options = config.options;
        this.timeout = (config.options.timeout || 60) * 1000
        this.port = (config.options.port || 443)
        this.debug = (config.options.debug || false)

    }

    async request(method: string, route: string, payload: any = null): Promise<any> {
        try {

            const response: AxiosResponse = await axios({
                method: method,
                url: route,
                baseURL: this.baseUri,
                timeout: this.timeout,
                headers: this.headers,
                data: payload
            });
            
            if (this.debug) {
                console.log(`Método: ${method} - URL:${this.baseUri}${route}`)
            }

            return response.data
            
        } catch (error: any) {

            if(this.debug) {
                console.log(`Método: ${method} - URL:${this.baseUri}${route} - Status Code: ${error.response.status}`)
            }

            if (error.response) {
                return error.response.data
            } else {
                if (axios.isAxiosError(error)) {
                    const AxiosError: AxiosError = error;
                    throw new Error(`Falha de comunicação: ${AxiosError.message}`)
                } else {
                    throw new Error(`Erro inesperado: ${error}`)
                }
            }

        }
    }

    async send(route:string, payload:object){
        
        return this.request("POST", route, JSON.stringify(payload));
    }

    async sendMultipart(route:string, payload:any){

        const FormData = require("form-data");
        const fs = require("fs");

        const data = new FormData();
        data.append("arquivo", fs.createReadStream(payload.arquivo));
        data.append("tipo", payload.tipo);
        data.append("ano", payload.ano);
        data.append("mes", payload.mes);
            
        this.headers = [
            `Authorization: ${this.token}`,
            "Content-Type: multipart/form-data",
            "Accept: application/json"
        ];

        return this.request("POST", route, data)

    }


}