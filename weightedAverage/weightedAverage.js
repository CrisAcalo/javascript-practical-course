let userWeightedAverageArray = [];

function datosUsuario () {

    let valorNumeroDatos =  numeroDatos ();

    //Ciclo que agrega los datos del usuario como objetos independientes a un Array general (userWeightedAverageArray)
    //Procuramos que el valor de i coincida con los valores de los id's de los inputs en HTML
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let course = {course: document.getElementById("materia"+i).value};
        let note = {note: parseInt(document.getElementById("notaMateria"+i).value)};
        let credit = {credit: parseInt(document.getElementById("creditoMateria"+i).value)};

        //Creamos objetos para cada materia que el usuario haya ingresado
        let elements = Object.assign(course,note,credit)
        //enviamos los objetos al array general
        userWeightedAverageArray.push(elements)
    }
}


function calcWeightedAverage() {
    //borrar datos del array 
    userWeightedAverageArray = [];
    //Ejecutamos la funcion que envia los datos del usuario a un Array
    datosUsuario ();

    const notesWithCredit = userWeightedAverageArray.map(function (userWeightedAverageArrayObject) {
        return userWeightedAverageArrayObject.note * userWeightedAverageArrayObject.credit;
    })
    
    const sumOfNotesWithCredits = notesWithCredit.reduce(function (sum = 0, newVal) {
        return sum + newVal;
    })

    const credits = userWeightedAverageArray.map(function (userWeightedAverageArrayObject) {
        return userWeightedAverageArrayObject.credit;
    })

    const sumOfCredits = credits.reduce(function(sum = 0, newVal) {
        return sum + newVal;
    })

    const resultWeightedAverage = (sumOfNotesWithCredits / sumOfCredits).toFixed(2);
    //Imprimimos el resultado
    const weightedAveragePrint = document.getElementById("weightedAveragePrint");
    weightedAveragePrint.innerText = "Tu ponderación es: " + resultWeightedAverage;
}

function numeroDatos() {
    let valorNumeroDatos =  parseInt(document.getElementById("numeroDatos").value);
    return valorNumeroDatos
}

function aggInput () {

    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("aggInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };

    //quitar respuesta
    const weightedAveragePrint = document.getElementById("weightedAveragePrint");
    weightedAveragePrint.innerText = "";

    //colocar los imput dichos por el usuario
    let valorNumeroDatos =  numeroDatos();

    //Ciclo para dar nombres diferentes a los id's de los inputs en HTML
   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {

        let formTitle = document.getElementById("titlePrint");
        formTitle.innerHTML = "Ingrese sus datos"

        var coursesForm = '<div class = "courses"><label for="materia' + i + '"><span>Materia</span><input type="text" id="materia' + i + '" autocomplete="off"></label><label for="notaMateria' + i + '"><span>Nota</span><input type="number" id="notaMateria' + i + '"></label><label for="creditoMateria' + i + '"><span>Credito</span><input type="number" id="creditoMateria' + i + '"></label></div>';

        let inputs = document.getElementById("aggInputs");
        inputs.insertAdjacentHTML('beforeend', coursesForm);

    }
    let button = document.getElementById("aggInputs");
}

function resultStyle() {
    document.getElementById("weightedAveragePrint").style.display = "block";
}

function weightAverageCalcButtonStyle() {
    document.getElementById("weightAverageCalcButton").style.display = "block";
}

function footerStyle() {
    document.getElementById("footer--sections-container").style.position = "relative";
}