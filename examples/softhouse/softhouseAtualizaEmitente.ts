import Softhouse from "../../src/Softhouse";
import { AMBIENTE_HOMOLOGACAO } from "../../src/Base";

export default async function softhouseAtualizaEmitente() {

    try{

        const config = {
            ambiente: AMBIENTE_HOMOLOGACAO,
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjcwLCJ1c3IiOiIyIiwidHAiOjIsImlhdCI6MTU4MDkzNzM3MH0.KvSUt2x8qcu4Rtp2XNTOINqR',
            options: {
                timeout: 60,
                port: 443
            }
        }

        const softhouse = new Softhouse(config)

        const payload = {
            nome: 'EMPRESA TESTE',
            razao: 'EMPRESA TESTE',
            cnae: '12369875',
            crt: '1',
            ie: '12369875',
            im: '12369875',
            suframa: '12369875',
            csc: '...', // token para emissão de NFCe
            cscid: '000001',
            tar: 'C92920029-12', // tar BPe
            login_prefeitura: null,
            senha_prefeitura: null,
            client_id_prefeitura: null,
            client_secret_prefeitura: null,
            telefone: '46998895532',
            email: 'empresa@teste.com',
            rua: 'TESTE',
            numero: '1',
            complemento: 'NENHUM',
            bairro: 'TESTE',
            municipio: 'CIDADE TESTE', // IBGE
            cmun: '5300108', // IBGE
            uf: 'PR', // IBGE
            cep: '85000100',
            logo: 'useyn56j4mx35m5j6_JSHh734khjd...saasjda', // BASE 64
            webhook: 'https://seusite.com.br/notifications'
        };

        const resp = await softhouse.atualizaEmitente(payload)

        console.log(resp)

    } catch (error) {

        console.error('Ocorreu um erro:', error);

    }

}

softhouseAtualizaEmitente()