function criptografar() {
    const input = document.getElementById("input").value;
    let output = "";

    // Deslocar as letras
    for (let i = 0; i < input.length; i++) {
        let codigoAscii = input.charCodeAt(i);
        if ((codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122)) {
        codigoAscii += 3;
        }
        output += String.fromCharCode(codigoAscii);
    }
    console.log("Deslocando as letras: " + output)

    // Inverter a linha
    output = output.split("").reverse().join("");
    console.log("Invertendo a linha: " + output)

    // Deslocar os caracteres da metade em diante
    const metade = Math.floor(output.length / 2);
    for (let i = metade + 1; i < output.length; i++) {
        let codigoAscii = output.charCodeAt(i);
        if ((codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122)) {
        codigoAscii -= 1;
        output = output.substring(0, i) + String.fromCharCode(codigoAscii) + output.substring(i + 1);
        }
    }
    console.log("Deslocando da metade em diante: " + output)
    console.log("_____________________________________________________")

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = output;
    document.getElementById("output").style.display = "block";
}

function pressEnterInput(tecla){
    if(tecla.keyCode == 13){
        criptografar();
    }
}