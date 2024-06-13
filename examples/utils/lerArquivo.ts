import Util from "../../src/Util";

export default function lerArquivo() {

    try {

        const resp = Util.readFile("caminho_do_arquivo.xml");
    
        console.log(resp);
    } catch (e: any) {
        console.error(e.message);
    }
    
}

lerArquivo()