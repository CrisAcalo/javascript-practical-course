//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}
console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTrianguloIsosceles(lado1, base) {
    return Math.sqrt((lado1 ** 2) - (base ** 2) / 4)
}

console.groupEnd();

//Código del circulo
console.group("Círculo");

    //Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

    //Pi
const PI =  Math.PI;

    //Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

    // Área
function areaCirculo(radio) {
    return (radio ** 2) * PI;
};

console.groupEnd();

//Interacción con HTML

    //Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

    //Triángulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const valueLado1 = inputLado1.value * 1;

    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const valueLado2 = inputLado2.value * 1;

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.value * 1;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {

    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const valueLado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);

    if(valueLado1 === valueLado2 && valueLado1 != valueBase && valueLado1 + valueLado2 != 0 && valueAltura == 0) {
        const altura = alturaTrianguloIsosceles(valueLado1, valueBase);

        const area = areaTriangulo(valueBase, altura);
        alert("Se trata de un triángulo Isóseles y su área es: " + area);
    }else{
        const area = areaTriangulo(valueBase, valueAltura);
        alert("El área de tu triángulo es de: " + area);
    };
}

function calcularCirculo() {

    const inputRadio = document.getElementById("inputCirculoRadio");
    const valueRadio = Number(inputRadio.value);

    const diametro = diametroCirculo(valueRadio);

    const perimetro = perimetroCirculo(diametro);

    const area = areaCirculo(valueRadio);

    alert("El perímetro del círculo es de: " + perimetro + " Y su área tiene un valor de: " + area);
}

// function calcularAreaCirculo() {

//     const inputRadio = document.getElementById("inputCirculoRadio");
//     const valueRadio = Number(inputRadio.value);

//     const area = areaCirculo(valueRadio);

//     alert("El área del círculo es de: " + area)
// }