import Base from "./Base";

export default class Ciot extends Base {

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/ailog", payload);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/ciot/ailog/${key}`, []);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/ailog/busca", payload);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/ailog/cancela", payload);
    }

    public async encerra(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/ailog/encerra", payload);
    }

    public async retifica(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/ailog/retifica", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/ciot/ailog/pdf/${key}`, []);
    }

    public async transportador(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/ailog/transportador", payload);
    }


}
