import Base from "./Base";

export default class Certificado extends Base {

    public async atualiza(payload: any): Promise<any> {
        return this.client.send("POST", "/certificado", payload);
    }

    public async mostra(): Promise<any> {
        return this.client.send("GET", "/certificado", "[]");        
    }

}