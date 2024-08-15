import crypto from 'crypto';

class Webhook {
    
    static isValid(token: string, payload: string): boolean {
        const std = JSON.parse(payload);

        const convertKey = (token: string): string => {
            const key = token.slice(0, 16).padEnd(16, '0');
            return key;
        }

        const decryptTime = (ciphertext_raw: any, token: any, iv: any) => {
            const decipher = crypto.createDecipheriv('aes-128-cbc', token, iv);
        
            let decrypted = decipher.update(ciphertext_raw, 'base64', 'utf8');
            decrypted += decipher.final('utf8');
        
            return parseFloat(decrypted);
        }

        if (!std) {
            throw new Error('Payload incorreto.');
        }
    
        if (!std.signature) {
            throw new Error('Payload incorreto não contêm a assinatura.');
        }
    
        if (!token) {
            throw new Error('Token vazio.');
        }

        const key = convertKey(token);

        const c = Buffer.from(std.signature, 'base64');

        const ivlen = 16;

        const iv = c.subarray(0, ivlen);
        const hmac = c.subarray(ivlen, ivlen + 32);
        const ciphertextRaw = c.subarray(48, c.length);

        const originalTime = decryptTime(ciphertextRaw, key, iv);

        const calcmac = crypto.createHmac('sha256', token).update(ciphertextRaw).digest();

        if (crypto.timingSafeEqual(hmac, calcmac)) {
            const currentTime = Math.floor(Date.now() / 1000);
            const dif = (currentTime - originalTime)
            
            if (dif < 300) {
                return true;
            }
            throw new Error('Assinatura expirou.');

        }
        throw new Error('Token ou assinatura incorreta.');
        
    }
}

export default Webhook;