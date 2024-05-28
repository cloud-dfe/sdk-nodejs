import Base from './Base';

export default class Emitente extends Base {

    public async token(): Promise<any>{
        return this.client.send("GET", "/emitente/token", []);
    }

    public async atualiza(payload: any): Promise<any>{
        return this.client.send("PUT", "/emitente", payload);
    }

    public async mostra(): Promise<any>{
        return this.client.send("GET", "/emitente", []);
    }

}