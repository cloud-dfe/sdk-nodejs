import Base from "./Base";

export default class Vpo extends Base {

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/vpo/ailog", payload);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/vpo/ailog/${key}`, []);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/vpo/ailog/busca", payload);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/vpo/ailog/cancela", payload);
    }

    public async reemite(payload: any): Promise<any>{
        return this.client.send("POST", "/vpo/ailog/reemite", payload);
    }

    public async rota(payload: any): Promise<any>{
        return this.client.send("POST", "/vpo/ailog/rota", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/vpo/ailog/pdf/${key}`, []);
    }

    public async veiculo(payload: any): Promise<any>{
        return this.client.send("POST", "/vpo/ailog/veiculo", payload);
    }


}
