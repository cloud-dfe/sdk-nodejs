import Base from './Base';

export default class Softhouse extends Base {

    public async criaEmitente(payload: any): Promise<any>{
        return this.client.send("POST", "/soft/emitente", payload);
    }

    public async atualizaEmitente(payload: any): Promise<any>{
        return this.client.send("PUT", "/soft/emitente", payload);
    }

    public async mostraEmitente(payload: any): Promise<any>{

        if (!payload || !payload.doc) {
            throw new Error("Deve ser passado um CNPJ ou um CPF para visualizar o emitente.");
        }
    
        return this.client.send("GET", `/soft/emitente/${payload.doc}`, []);
    }

    public async listaEmitentes(payload: any): Promise<any>{

        let status = (payload.status || "");
        let rota = "/soft/emitente";

        if (status == "deletados" || status == "inativos") {
            rota = "/soft/emitente/deletados"
        }

        return this.client.send("GET", rota, []);
    }

    public async deletaEmitente(payload: any): Promise<any>{

        if (!payload || !payload.doc) {
            throw new Error("Deve ser passado um CNPJ ou um CPF para efetuar a deleção do emitente.");
        }

        return this.client.send("DELETE", `/soft/emitente/${payload.doc}`, []);
    }

}