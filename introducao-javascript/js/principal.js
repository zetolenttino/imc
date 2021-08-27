var titulo = document.querySelector (".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".pacientes");

for(var i = 0; i < pacientes.length; i++ ) {
    console.log(pacientes[i]);

var pacientes = pacientes[i];
    
var tdPeso = pacientes.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = pacientes.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = pacientes.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if(alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

else {
        tdImc.textContent = "Altura e/ou peso inválidos !"
    }

}

