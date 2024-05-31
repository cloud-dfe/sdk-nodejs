import Base from "./Base";

export default class CteOs extends Base {

    public async status(): Promise<any>{
        return this.client.send("GET", "/cteos/status", []);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/cteos/${key}`, []);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/cteos/pdf/${key}`, []);
    }

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos", payload);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/busca", payload);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/cancela", payload);
    }

    public async correcao(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/correcao", payload);
    }

    public async inutiliza(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/inutiliza", payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/backup", payload);
    }

    public async importa(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/importa", payload);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/preview", payload);
    }

    public async desacordo(payload: any): Promise<any>{
        return this.client.send("POST", "/cteos/desacordo", payload);
    }


}