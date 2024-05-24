import Base from './Base';

export default class Dfe extends Base {

    public async buscaCte(payload: any): Promise<any>{
        return this.client.send("POST", "/dfe/cte", payload);
    }

    public async buscaNfe(payload: any): Promise<any>{
        return this.client.send("POST", "/dfe/nfe", payload);
    }

    public async downloadNfe(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/dfe/nfe/${key}`, payload);
    }

    public async buscaNfse(payload: any): Promise<any>{
        return this.client.send("POST", "/dfe/nfse", payload);
    }

    public async downloadNfse(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/dfe/nfse/${key}`, payload);
    }

    public async downloadCte(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/dfe/cte/${key}`, payload);
    }
    
    public async eventos(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/dfe/eventos/${key}`, payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/dfe/backup", payload);
    }

}