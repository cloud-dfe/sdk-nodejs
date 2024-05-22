// Importando a classe HttpAxios
import HttpAxios, { ConfigHttpAxios } from './HttpAxios';

// Definindo a configuração para a classe HttpAxios
const config: ConfigHttpAxios = {
    debug: false,
    baseUri: 'http://127.0.0.1:5000',
    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDUyMDc2MDAxNzM3MzE0OTc3NjQiLCJ1c2VybmFtZSI6IkdhYnJpZWwgQXJhbnRkIEZlbGlwZSIsImVtYWlsIjoiZ3JhbnRkLmN0dEBnbWFpbC5jb20iLCJpc19hZG1pbiI6dHJ1ZSwiZXhwIjoxNzE2Mzk5OTQ4fQ.gg-17o5sNVM_eR3JKHMyXSQO9BYP64FFCTYZdj1jAig',
    options: {
        timeout: 10000,
        port: 443
    }
};

const http = new HttpAxios(config);

async function testarHttpAxios() {
    const responseData = await http.send('GET', '/event/get-list');
    console.log(responseData);
}

testarHttpAxios();
