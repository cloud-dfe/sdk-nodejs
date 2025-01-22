import axios, { AxiosResponse, AxiosError } from "axios";

export interface ConfigServices {
    baseUri: string;
    timeout?: number;
    port?: number;
    
    debug?: boolean;
    options?: {
        timeout?: number;
        port?: number;
        debug?: boolean;
    };
}

export interface ErrorService {
    code?: any;
    message?: any;
}

export default class Services {
    baseUri: string;
    timeout: number;
    port: number;
    debug: boolean;
    error: ErrorService;

    constructor(config: ConfigServices){
        this.baseUri = config.baseUri;
        this.timeout = (config.timeout || 60) * 1000;
        this.port = (config.port || 443);
        this.debug = (config.debug || false);
        this.error = {};
    }

    async request(method: string, route: string, payload: any = null, headers: object = {}): Promise<any> {
        
        
        try {
            const response: AxiosResponse = await axios({
                method: method,
                url: route,
                baseURL: this.baseUri,
                timeout: this.timeout,
                headers: headers,
                data: payload
            });

            return response.data;

        } catch (error: any) {

            if (error.response) {
                return error.response.data;
            }

            if (axios.isAxiosError(error)) {
                const AxiosError: AxiosError = error;
                this.error.code = AxiosError.code;
                this.error.message = AxiosError.message;

                throw new Error(`Ocorreu o seguinte erro: ${this.error.message, this.error.code}`);
            }

            throw new Error(`Não foi possível identificar o erro: ${error}`);
        }
    } 

}