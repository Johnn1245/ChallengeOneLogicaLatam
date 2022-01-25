var mensaje = document.querySelector("#input-texto");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");
var rstFinal = document.querySelector("#msg");


function encriptarReemplazo (letra) {
     if (letra == 'a') {
        letra = 'ai';
        return letra;
    } else if (letra == 'e') {
        letra = 'enter';
        return letra;
    } else if (letra == 'i') {
        letra = 'imes';
        return letra;
    } else if (letra == 'o') {
        letra = 'ober';
        return letra;
    } else if (letra == 'u') {
        letra = 'ufat';
        return letra;
    }
}

function desencriptarReemplazo(letra) {
    if (letra == 'ai') {
        letra = 'a';
        return letra;
    } else if (letra == 'enter') {
        letra = 'e';
        return letra;
    } else if (letra == 'imes') {
        letra = 'i';
        return letra;
    } else if (letra == 'ober') {
        letra = 'o';
        return letra;
    } else if (letra == 'ufat') {
        letra = 'u';
        return letra;
    }
}

function encriptar(texto) {
    var msgEncriptado = texto.replace(/a|e|i|o|u/g, encriptarReemplazo);
    return msgEncriptado;
}

btnEncriptar.addEventListener('click',function (event) {
    event.preventDefault();
    var texto = mensaje.value;
    var msgFinal = encriptar(texto);
    // console.log(msgFinal);
    rstFinal.value = msgFinal;
})

function desencriptar(texto) {
    var msgDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, desencriptarReemplazo);
    return msgDesencriptado;
}

btnDesencriptar.addEventListener('click', function (event) {
    event.preventDefault();
    var texto = mensaje.value;
    var msgFinal2 = desencriptar(texto);
    rstFinal.value = msgFinal2;
})

btnCopiar.addEventListener('click', function (event) {
    event.preventDefault();
    rstFinal.select();
    navigator.clipboard.writeText(rstFinal.value); 

})