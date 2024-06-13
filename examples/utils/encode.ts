import Util from "../../src/Util";

export default function encode() {

    try {
        const data = "texto a ser codificado";
        const resp = Util.encode(data);
    
        console.log(resp);
    } catch (e: any) {
        console.error(e.message);
    }
    
}

encode()