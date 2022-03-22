//asignacion de valores para el calculo de la Mediana General
function calcTotalMediana(){
    const country = document.getElementById("countryOptions").value;
    const countrySalaryArraySorted = countryIdentrifier(country); 
    const generalMedian = calcMedianaCases(countrySalaryArraySorted);
    const top10Median = top10Salaries(countrySalaryArraySorted);
    const results = [generalMedian, top10Median]
    return results;
}

//Calculo de mediana del top 10% de salarios
function top10Salaries (salaries){
    const startValueTop10Salaries = parseInt((salaries.length * 90)/100);
    const top10SalariesArray = salaries.slice(startValueTop10Salaries, salaries.length)
    const result = calcMedianaCases(top10SalariesArray);
    return result;
}

//Identificamos que País escoge el usuario y asignamos los datos correspondientes
function countryIdentrifier(country) {
    switch (country){
        case "Ecuador":
            return dataExtract(ecuador);
        case "Colombia":
            return dataExtract(colombia);
        case "Perú":
            return dataExtract(peru);
    }
}

//funcion para la creacion de una lista solo con los valores de los salarios ordenados
function dataExtract(country){
    const countrySalaries = country.map(function (objectOfCountrySalaries) {
        return objectOfCountrySalaries.salary;
    }) ;
    //ordenamos la lista con sort()
    const countrySalariesSorted = countrySalaries.sort((a,b) => a - b);
    return countrySalariesSorted;
}

//calculo de la mediana de los dos casos posibles (lista par, lista impar)
function calcMedianaCases(salaries) {
    const middle = parseInt(salaries.length / 2);
    if (salaries.length % 2 == 0) {
        const firstValueMediana = salaries[middle - 1];
        const secondValueMediana = salaries[middle];
        const medianaSalaries = [firstValueMediana,secondValueMediana];
        const averageOfMediana = average(medianaSalaries);
        return averageOfMediana;
    }else{
        const medianaValue = salaries[middle];
        return medianaValue;
    }
}

//funcion para el promedio de la mediana en el caso de que sea una lista par
function average(medianArray){
    //suma de los dos valores de la mediana con reduce()
    const sumOfMedianArray = medianArray.reduce((sum = 0, newVal) => sum + newVal)
    const averageMedianResult = sumOfMedianArray / medianArray.length;
    return averageMedianResult;
}

function resultGeneralMediaPrinted() {
    const impresion = document.getElementById("generalMediaPrinted")
    const country = document.getElementById("countryOptions").value;
    impresion.innerHTML = 'La mediana de salarios de ' + country + ' es de: ' + calcTotalMediana()[0];
}
function resultGeneralMediaTop10Printed() {
    const impresion = document.getElementById("top10Printed")
    const country = document.getElementById("countryOptions").value;
    impresion.innerHTML = 'La mediana del top 10% de salarios de ' + country + ' es de: ' + calcTotalMediana()[1];
}