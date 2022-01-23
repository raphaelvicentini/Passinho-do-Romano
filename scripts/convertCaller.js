import { convertCodeBase64, convertDecodeBase64 } from "./convertBase64.js";

import { convertCodeCifra, convertDecodeCifra } from "./convertCifra.js";

export const convert = (
    message,
    addValue,
    currentBase,
    codeOrDecode,
    messageAppearBox
) => {
    /* Cifra/código */
    if (currentBase == true && codeOrDecode == true) {
        var cifraEncryptedMessage = "";
        cifraEncryptedMessage = convertCodeCifra(message.toLowerCase(), addValue);
        messageAppearBox.value = `Mensagem encriptada com Cifra de César: ${cifraEncryptedMessage}`;
    } /* Cifra/decodifica */ else if (
        currentBase == true &&
        codeOrDecode == false
    ) {
        var cifraDecryptedMessage = "";
        cifraDecryptedMessage = convertDecodeCifra(message.toLowerCase(), addValue);
        messageAppearBox.value = `Mensagem descriptada com Cifra de César: ${cifraDecryptedMessage}`;
    } /* Base64/codifica */ else if (
        currentBase == false &&
        codeOrDecode == true
    ) {
        var baseEncryptedMessage = "";
        baseEncryptedMessage = convertCodeBase64(message);
        messageAppearBox.value = `Mensagem encriptada com Base64: ${baseEncryptedMessage}`;
    } /* Base64/decodifica */ else if (
        currentBase == false &&
        codeOrDecode == false
    ) {
        var baseDecryptedMessage = "";
        baseDecryptedMessage = convertDecodeBase64(message);
        messageAppearBox.value = `Mensagem descriptada com Base64: ${baseDecryptedMessage}`;
    }
};