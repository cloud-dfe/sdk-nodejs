import Base from "./Base";

export default class Nfcom extends Base {

    public async status(): Promise<any>{
        return this.client.send("GET", "/nfcom/status", []);
    }

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/nfcom", payload);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfcom/${key}`, []);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/nfcom/cancela", payload);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/nfcom/busca", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfcom/pdf/${key}`, []);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/nfcom/preview", payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/nfcom/backup", payload);
    }

    public async importa(payload: any): Promise<any>{
        return this.client.send("POST", "/nfcom/importa", payload);
    }

}