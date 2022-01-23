///Base64///
export const convertCodeBase64 = (message) => {
    var encryptedMessageBase = btoa(message);
    return encryptedMessageBase;
};

export const convertDecodeBase64 = (message) => {
    var decryptedMessageBase = atob(message);
    return decryptedMessageBase;
};