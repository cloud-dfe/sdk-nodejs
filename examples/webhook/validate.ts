import Webhook from "../../src/Webhook";

export default function validate() {

    try {

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbXAiOjAsInVzciI6IjgiLCJ0cCI6MSwiaWF0IjoxNTg1NjkxNjA5fQ.s4GHUmafp_8Dkl3Hiiqe9KtHa5RLUg3X_2n6RIEXK34';
    const payload = '{"signature": "ojAm16Ye1cnnSxIM1D/8uUZROFYMitC6YleumaQx5W5IstqC1pdjvlact1q6LbE9f0OEjbtXZeVPYK/PtOfTmw=="}';

    const isValid = Webhook.isValid(token, payload);

    console.log(isValid);

    } catch (e: any) {
        console.error(e.message);
    }

}

validate();