import Base from "./Base";

export default class Averbacao extends Base {
    public async atm(payload: any): Promise<any> {
        return this.client.send("POST", "/averbacao/atm", payload);
    }

    public async elt(payload: any): Promise<any> {
        return this.client.send("POST", "/averbacao/elt", payload);
    }

    public async portoSeguro(payload: any): Promise<any> {
        return this.client.send("POST", "/averbacao/portoseguro", payload);
    }
}
