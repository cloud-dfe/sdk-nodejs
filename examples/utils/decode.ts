import Util from "../../src/Util";

export default function decode() {

    try {
        // exemplo base64 + compactado/zipado
        const data = 'H4sIAAAAAAAACgtJrSjJV0jOzy1ITC5JTMnXr8osAFIATnk5SBcAAAA=';
        
        // exemplo de base64
        //const data = 'dGV4dG8gYSBzZXIgZGVjb2RpZmljYWRv';
    
        const resp = Util.decode(data);
    
        console.log(resp);
    } catch (e: any) {
        console.error(e.message);
    }
    
}

decode()