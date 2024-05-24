import Base from './Base';

export default class Cte extends Base {

    public async status(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/status", payload);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/cte/${key}`, payload);
    }

    public async pdf(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/status", payload);
    }

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/cte", payload);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/busca", payload);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/cancela", payload);
    }

    public async correcao(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/correcao", payload);
    }

    public async inutiliza(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/inutiliza", payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/backup", payload);
    }

    public async importa(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/importa", payload);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/preview", payload);
    }

    public async desacordo(payload: any): Promise<any>{
        return this.client.send("POST", "/cte/desacordo", payload);
    }

}