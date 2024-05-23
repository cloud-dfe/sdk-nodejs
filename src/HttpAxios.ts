import axios, { AxiosResponse, AxiosError } from 'axios';

export interface ConfigHttpAxios {
    debug: boolean;
    baseUri: string;
    token: string;
    options: {
        timeout?: number;
        port?: number;
    };
}

export default class HttpAxios {
    debug: boolean;
    baseUri: string;
    token: string;
    headers: object;
    options: object;
    timeout: number;
    port: number;
    error: any;

    constructor(config: ConfigHttpAxios){
        this.debug = config.debug
        this.baseUri = config.baseUri
        this.token = config.token

        this.headers = {
            'Authorization': `${config.token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        this.options = config.options;
        this.timeout = (config.options.timeout || 60) * 1000
        this.port = (config.options.port || 443)
    }

    print() {
        console.log(this.token, "e")
    }

    async send(method: string, route: string, payload: any = null): Promise<any> {
        try {

            const response: AxiosResponse = await axios({
                method: method,
                url: route,
                baseURL: this.baseUri,
                timeout: this.timeout,
                headers: this.headers,
                data: payload
            });
            
            return response.data

        } catch (error: any) {

            if (axios.isAxiosError(error)) {
                const AxiosError: AxiosError = error;
                throw new Error(`Falha de comunicação: ${AxiosError.message}`)
            } else {
                throw new Error(`Erro inesperado: ${error}`)
            }

        }
    }

    /* 
        async sendMultipart(route:string, payload:string){

            const std = JSON.parse(payload)

            const newPayload = {
                tipo: std.tipo,
                ano: std.ano,
                mes: std.mes,
                arquivo: std.arquivo
            };
            
            this.headers = [
                `Authorization: ${this.token}`,
                "Content-Type: multipart/form-data",
                "Accept: application/json"
            ];

            return this.send("POST", route, newPayload)

        }

    */

}