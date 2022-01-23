import { convert } from "./scripts/convertCaller.js";

var cifraOption = document.querySelector("#cifra");
var base64Option = document.querySelector("#base64");
var addOption = document.querySelector(".add-box");
var addInput = document.querySelector("#blocks-added");
var convertBtn = document.querySelector("#convert-button");
var codeSelection = document.querySelector("#code");
var decodeSelection = document.querySelector("#decode");
var messageAppearBox = document.querySelector("textarea");
var currentBase = true;
var codeOrDecode = true;

/// Ao clicar na seleção Cifra | alternar a aparência de AddInput | currentBase = true se cifra, false se base64 ///
cifraOption.addEventListener("click", () => {
  currentBase = true;
  if (addOption.classList.contains("display-selection")) {
    addOption.classList.remove("display-selection");
  } else {
    addOption.classList.add("display-selection");
  }
});

/// Ao clicar na seleção Base64 | alternar o desaparecimento de AddInput | currentBase = true se cifra, false se base64 ///
base64Option.addEventListener("click", () => {
  currentBase = false;
  if (!addOption.classList.contains("display-selection")) {
    addOption.classList.add("display-selection");
  } else {
    return;
  }
});

/// Seleção de código ou decodificação ao clicar: true if code || false se decodificar ///
codeSelection.addEventListener("click", () => {
  codeOrDecode = true;
});
decodeSelection.addEventListener("click", () => {
  codeOrDecode = false;
});

/// Ação de conversão ///
convertBtn.addEventListener("click", (evento) => {
  evento.preventDefault();
  var messageInput = document.querySelector("#message");
  var message = messageInput.value;
  var addValue = parseInt(addInput.value);
  convert(message, addValue, currentBase, codeOrDecode, messageAppearBox);
});