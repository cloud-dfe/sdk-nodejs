const fs = require('fs');
const zlib = require('zlib');

export default class Util{

    static encode(data: string) {
        return Buffer.from(data).toString('base64');
    }

    static decode(data: string) {
        const decoded = Buffer.from(data, 'base64');
        try {
            const gz = zlib.gunzipSync(decoded);
            return gz.toString();
        } catch (e) {
            return decoded.toString();
        }
    }

    static readFile(file: string) {
        return fs.readFileSync(file, 'utf8');
    }

}