import Base from './Base';

export default class Nfce extends Base {

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce", payload);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce/preview", payload);
    }

    public async status(): Promise<any>{
        return this.client.send("GET", "/nfce/status", []);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfce/${key}`, []);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce/busca", payload);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce/cancela", payload);
    }

    public async offline(): Promise<any>{
        return this.client.send("POST", "/nfce/offline", []);
    }

    public async inutiliza(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce/busca", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfce/pdf/${key}`, []);
    }

    public async substitui(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce/substitui", payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce/backup", payload);
    }

    public async importa(payload: any): Promise<any>{
        return this.client.send("POST", "/nfce/importa", payload);
    }

}