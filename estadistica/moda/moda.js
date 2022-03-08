function calculoModa (moda) {
    listaCount = {};
    const arrayModa = moda.split(", ");

    //Convertimos el array (arrayModa) en un objeto (listaCount) que contendrá la cantidad de veces que se repiten los elementos comunes. Recorremos el array con .map()

    arrayModa.map(function(element){
        if (listaCount[element]) {
            listaCount[element] += 1; //El contador aumenta según las veces que aparezca el elemento
        } else { //A cada elemento nuevo se le asigna el valor de 1
            listaCount[element] = 1;
            }
        }
    );
    console.log(listaCount)

    /*Convertimos al objeto en un array con Object.entries()
    Contiene arrays con dos elementos cada uno: Elemento[0] las veces que este se repite[1]*/

    const arrayResult = Object.entries(listaCount).sort(
        //Ordenamos los arrays internos de menor a mayor de acuerdo a la cantidad que se repitan los elementos. Por tal el elemento del array que se usa debe ser el [1]
        function (elementoA, elementoB) {
          return elementoA[1] - elementoB[1];
        }
      );
    
    console.log(arrayResult)
    
    const valorModa = arrayResult[arrayResult.length - 1];
    return valorModa;
}

function getModa() {

    const moda = document.getElementById("valoresModa").value;
    result = calculoModa(moda)
    //impresion del resultado
    const printModa = document.getElementById("resultadoModa")
    printModa.innerText = `El valor de la moda es: ${result[0]}
    La cual se repite ${result[1]} veces`
}

