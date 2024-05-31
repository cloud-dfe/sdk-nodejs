import Base from "./Base";

export default class Gnre extends Base {

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/gnre/${key}`, []);
    }

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/gnre", payload);
    }

    public async configUf(payload: any): Promise<any>{
        return this.client.send("POST", "/gnre/configuf", payload);
    }
    
}