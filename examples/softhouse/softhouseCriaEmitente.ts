import Softhouse from "../../src/Softhouse";

// import { Softhouse, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function softhouseCriaEmitente() {

    try{

        const config = {
            ambiente: 2,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            }
        }

        const softhouse = new Softhouse(config)

        const payload = {
            nome: "EMPRESA TESTE",
            razao: "EMPRESA TESTE",
            cnpj: "47853098000193",
            cpf: "12345678901",
            cnae: "12369875",
            crt: "1",
            ie: "12369875",
            im: "12369875",
            suframa: "12369875",
            csc: "...", // token para emissão de NFCe
            cscid: "000001",
            tar: "C92920029-12", // tar BPe
            login_prefeitura: null,
            senha_prefeitura: null,
            client_id_prefeitura: null,
            client_secret_prefeitura: null,
            telefone: "46998895532",
            email: "empresa@teste.com",
            rua: "TESTE",
            numero: "1",
            complemento: "NENHUM",
            bairro: "TESTE",
            municipio: "CIDADE TESTE", // IBGE
            cmun: "5300108", // IBGE
            uf: "PR", // IBGE
            cep: "85000100",
            logo: "useyn56j4mx35m5j6_JSHh734khjd...saasjda", // BASE 64
            plano: "Emitente",
            documentos: {
                nfe: true,
                nfce: true,
                nfse: true,
                mdfe: true,
                cte: true,
                cteos: true,
                bpe: true,
                dfe_nfe: true,
                dfe_cte: true,
                sintegra: true,
                gnre: true
            }
        };

        const resp = await softhouse.criaEmitente(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

softhouseCriaEmitente()