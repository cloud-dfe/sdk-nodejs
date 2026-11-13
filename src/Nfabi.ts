import Base from "./Base";

export default class Nfabi extends Base {

    public async status(): Promise<any>{
        return this.client.send("GET", "/nfabi/status", []);
    }

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi", payload);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfabi/${key}`, []);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi/cancela", payload);
    }

    public async parcela(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi/parcela", payload);
    }

    public async desfazimento(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi/desfazimento", payload);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi/busca", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfabi/pdf/${key}`, []);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi/preview", payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi/backup", payload);
    }

    public async importa(payload: any): Promise<any>{
        return this.client.send("POST", "/nfabi/importa", payload);
    }

}