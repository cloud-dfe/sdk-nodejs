import Base from './Base';

export default class Gnre extends Base {

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe", payload);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/preview", payload);
    }

    public async status(): Promise<any>{
        return this.client.send("GET", "/mdfe/status", []);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/mdfe/${key}`, []);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/busca", payload);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/cancela", payload);
    }

    public async encerrra(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/encerra", payload);
    }

    public async condutor(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/condutor", payload);
    }

    public async offline(): Promise<any>{
        return this.client.send("GET", "/mdfe/offline", []);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/mdfe/${key}`, payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/backup", payload);
    }

    public async nfe(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/nfe", payload);
    }

    public async abertos(): Promise<any>{
        return this.client.send("GET", "/mdfe/abertos", []);
    }

    public async importa(payload: any): Promise<any>{
        return this.client.send("POST", "/mdfe/importa", payload);
    }

}