import Base from "./Base";

export default class Ciot extends Base {

    public async cria(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot", payload);
    }

    public async consulta(payload: any): Promise<any>{
        const identificacao = this.checkIdentificacao(payload)
        return this.client.send("GET", `/ciot/${identificacao}`, []);
    }

    public async busca(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/busca", payload);
    }

    public async cancela(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/cancela", payload);
    }

    public async encerra(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/encerra", payload);
    }

    public async retifica(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/retifica", payload);
    }

    public async pdf(payload: any): Promise<any>{
        const identificacao = this.checkIdentificacao(payload)
        return this.client.send("GET", `/ciot/pdf/${identificacao}`, []);
    }

    public async transportador(payload: any): Promise<any>{
        return this.client.send("POST", "/ciot/transportador", payload);
    }

    // o CIOT é identificado pela identificação informada na criação, não por chave de acesso
    private checkIdentificacao(payload: any): string {
        const identificacao: string = String(payload?.identificacao ?? "").trim();
        if (!/^[A-Za-z0-9._-]{1,40}$/.test(identificacao)) {
            throw new Error("A identificação do CIOT deve ter de 1 a 40 caracteres: letras, números, ponto, hífen ou sublinhado.");
        }
        return encodeURIComponent(identificacao);
    }

}
