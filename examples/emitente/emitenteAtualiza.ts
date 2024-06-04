import Emitente from "../../src/Emitente";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

// import { Emitente, AMBIENTE_HOMOLOGACAO, AMBIENTE_PRODUCAO } from "sdk-cloud-dfe/dist";

export default async function emitenteAtualiza() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOiJ0b2tlbl9leGVtcGxvIiwidXNyIjoidGsiLCJ0cCI6InRrIn0.Tva_viCMCeG3nkRYmi_RcJ6BtSzui60kdzIsuq5X-sQ",
            options: {
                timeout: 60,
                port: 443
            },
            //utilizar quando for utilizar o SDK por npm ou yarn 
            //configPath: "./src/config.json"
        }

        const emitente = new Emitente(config)

        const payload = {
            nome: "EMPRESA TESTE2",
            razao: "EMPRESA TESTE2",
            // cnae: "12369875",
            // crt: "1", // Regime tributário
            // ie: "12369875",
            // im: "12369875",
            // suframa: "12369875",
            // csc: "...", // token para emissão de NFCe
            // cscid: "000001",
            // tar: "C92920029-12", // tar BPe
            // login_prefeitura: null,
            // senha_prefeitura: null,
            // client_id_prefeitura: null,
            // client_secret_prefeitura: null,
            // telefone: "46998895532",
            // email: "empresa@teste.com",
            // rua: "TESTE",
            // numero: "1",
            // complemento: "NENHUM",
            // bairro: "TESTE",
            // municipio: "CIDADE TESTE", // IBGE
            // cmun: "5300108", // IBGE
            // uf: "PR", // IBGE
            // cep: "85000100",
            // logo: "useyn56j4mx35m5j6_JSHh734khjd...saasjda", // BASE 64
        };

        const resp = await emitente.atualiza(payload)

        console.log(resp)

    } catch (error) {

        console.error("Ocorreu um erro:", error);

    }

}

emitenteAtualiza()