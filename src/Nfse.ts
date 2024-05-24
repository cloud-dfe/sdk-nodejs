import Base from './Base';

export default class Nfse extends Base {

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse", payload);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/preview", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfse/pdf/${key}`, []);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfse/${key}`, []);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/cancela", payload);
    }

    public async substitui(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/substitui", payload);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/busca", payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/backup", payload);
    }

    public async localiza(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/consulta", payload);
    }

    public async info(payload: any): Promise<any>{
        return this.client.send("GET", `/nfse/info/${payload.ibge}`, []);
    }

    public async conflito(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/conflito", payload);
    }

    public async offline(payload: any): Promise<any>{
        return this.client.send("POST", "/nfse/offline", payload);
    }

    public async resolve(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfse/resolve/${key}`, []);
    }

}