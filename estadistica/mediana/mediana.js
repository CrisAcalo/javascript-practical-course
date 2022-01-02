listaUsuario = [];

//Crear lista con los elementos del usuario
function creacionListaUsuario() {
    let nuevoElemento = Number(document.getElementById("valorAAgregar").value);
    listaUsuario.push(nuevoElemento);
    //Ordenar lista
    listaUsuario.sort((a,b)=> a - b);
    // Impresion de lista
    const impresionLista = document.getElementById("impresionLista");
    impresionLista.innerText = `${listaUsuario}`
}

//Identificador de una lista par o impar
function mediana() {
    if(listaUsuario.length % 2 != 0){
        return calculoMedianaCaso1(listaUsuario)
    }else{
        return calculoMedianaCaso2(listaUsuario)
    }
}

/*Una lista par se nombrará como lista1 y una impar como lista2*/

function calculoMedianaCaso1(lista1){
    const valorMedianaCaso1 = parseInt(lista1.length / 2);
    const medianaCaso1 = lista1[valorMedianaCaso1];
    return medianaCaso1;
}

function calculoMedianaCaso2(lista2) {
    const valor1MedianaCaso2 = parseInt((lista2.length / 2) - 1);
    const valor2MedianaCaso2 = parseInt((lista2.length / 2));

    listaCaso2 = [lista2[valor1MedianaCaso2], lista2[valor2MedianaCaso2]];

    let sumaListaCaso2 = listaCaso2.reduce((valorPorDefecto=0, nuevoNumero) => valorPorDefecto + nuevoNumero);
    const medianaCaso2 = sumaListaCaso2 / listaCaso2.length;
    return medianaCaso2;
}

/*Para que el calculo se ejecute en segundo plano
  creamos una función solo para imprimir el resultado*/
function impresionMediana(){
    const impresion = document.getElementById("valorMediana");
    impresion.innerText = mediana();
}