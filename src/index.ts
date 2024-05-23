import Client, { configParams } from './Client';

const config: configParams = {
    ambiente: 2,
    token: "teste",
    options: {
        debug: false,
        timeout: 60,
        port: 443
    }
};

const client = new Client(config);

async function testarSend() {
    try {
        const responseData = await client.send('GET', '/get_info/1');
        console.log(responseData);
    } catch (error) {
        console.error(error);
    }
}

testarSend();
