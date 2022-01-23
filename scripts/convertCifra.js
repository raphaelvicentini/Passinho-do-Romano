///Alfabeto///
var values = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

/// Código/Cifra ///
export const convertCodeCifra = (message, addNumber) => {
    var encryptedMessage = "";
    while (addNumber > values.length) {
        // evita encontrar um índice fora do intervalo do array
        addNumber = addNumber - values.length;
    }
    for (var i = 0; i < message.length; i++) {
        if (message[i] == " ") {
            encryptedMessage += " ";
            continue;
        }
        for (var j = 0; j < values.length; j++) {
            if (message[i] == values[j]) {
                if (j + addNumber > values.length - 1) {
                    // verifica se ao adicionar um valor o array estoura
                    encryptedMessage += values[j + addNumber - values.length];
                } else {
                    encryptedMessage += values[j + addNumber];
                }
            }
        }
    }
    return encryptedMessage;
};

/// Decodificação Cifra ///
export const convertDecodeCifra = (message, addNumber) => {
    var decryptedMessage = "";
    while (addNumber > values.length) {
        // evita encontrar um índice fora do intervalo do array
        addNumber = addNumber - values.length;
    }
    for (var i = 0; i < message.length; i++) {
        if (message[i] == " ") {
            decryptedMessage += " ";
            continue;
        }
        for (var j = 0; j < values.length; j++) {
            if (message[i] == values[j]) {
                if (j - addNumber < 0) {
                    /// verifica se ao reduzir um valor o array estoura///
                    decryptedMessage += values[values.length - Math.abs(j - addNumber)];
                } else {
                    decryptedMessage += values[j - addNumber];
                }
            }
        }
    }
    return decryptedMessage;
};