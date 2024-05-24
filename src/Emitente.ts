import Base from './Base';

export default class Emitente extends Base {

    public async token(payload: any): Promise<any>{
        return this.client.send("GET", "/emitente/token", payload);
    }

    public async atualiza(payload: any): Promise<any>{
        return this.client.send("PUT", "/emitente", payload);
    }

    public async mostra(payload: any): Promise<any>{
        return this.client.send("GET", "/emitente", payload);
    }

}