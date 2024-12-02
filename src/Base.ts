import Client, { ConfigClient } from "./Client";

interface ConfigBase {
    ambiente: number;
    token: string;
    timeout?: number;
    port?: number;  
    debug?: boolean;  
    options?: {
        timeout?: number;
        port?: number;
        debug?: boolean;
    };
}

export default class Base {
    client: Client;

    constructor(params: ConfigBase) {
        const defaultOptions = {
            timeout: 60,
            port: 443,
            debug: false,
        };

        if (!params || !params.token) {
            throw new Error("O TOKEN é obrigatório.");
        }

        if (params.ambiente !== 1 && params.ambiente !== 2) {
            throw new Error("O AMBIENTE deve ser 1-PRODUÇÃO ou 2-HOMOLOGAÇÃO.");
        }

        const isOptionsDefined = !!params.options && Object.keys(params.options).length > 0;

        const finalConfig = isOptionsDefined
            ? {
                timeout: params.options?.timeout ?? defaultOptions.timeout,
                port: params.options?.port ?? defaultOptions.port,
                debug: params.options?.debug ?? defaultOptions.debug,
            }
            : {
                timeout: params.timeout ?? defaultOptions.timeout,
                port: params.port ?? defaultOptions.port,
                debug: params.debug ?? defaultOptions.debug,
            };

        const config: ConfigClient = {
            ambiente: params.ambiente,
            token: params.token,
            timeout: finalConfig.timeout,
            port: finalConfig.port,
            debug: finalConfig.debug,
        };

        this.client = new Client(config);
    }

    checkKey(payload: any): string {
        let key: string = payload.chave.replace(/[^0-9]/g, "");
        if (!key || key.length !== 44) {
            throw new Error("A chave deve conter 44 dígitos numéricos.");
        }
        return key;
    }
}
