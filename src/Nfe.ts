import Base from "./Base";

export default class Nfe extends Base {

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe", payload);
    }

    public async preview(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/preview", payload);
    }

    public async status(): Promise<any>{
        return this.client.send("GET", "/nfe/status", []);
    }

    public async consulta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfe/${key}`, []);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/busca", payload);
    }
    
    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/cancela", payload);
    }

    public async correcao(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/correcao", payload);
    }

    public async inutiliza(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/inutiliza", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfe/pdf/${key}`, []);
    }

    public async etiqueta(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfe/pdf/etiqueta/${key}`, []);
    }

    public async manifesta(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/manifesta", payload);
    }

    public async backup(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/backup", payload);
    }

    public async download(payload: any): Promise<any>{
        const key = this.checkKey(payload)
        return this.client.send("GET", `/nfe/download/${key}`, []);
    }

    public async recebidas(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/recebidas", payload);
    }

    public async interessado(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/interessado", payload);
    }

    public async importa(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/importa", payload);
    }

    public async comprovante(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/comprovante", payload);
    }
    
    public async cadastro(payload: any): Promise<any>{
        return this.client.send("POST", "/nfe/cadastro", payload);
    }

}