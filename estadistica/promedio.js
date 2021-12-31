let listaUsuario = [];

function generacionLista(numero){
    numero = Number(document.getElementById("valorAAgregar").value);
    listaUsuario.push(numero);

    const impresionLista = document.getElementById("listaImpresa");
    impresionLista.innerText = `${listaUsuario}`
};

function calcularMediaAritmetica(){
    sumaValues = listaUsuario.reduce( function (valorPorDefecto = 0, nuevoElemento){
        return valorPorDefecto + nuevoElemento;
    });

    mediaAritmeticaFinal = (sumaValues / listaUsuario.length).toFixed(2);
    const resultadoMediaAritmetica = document.getElementById("resultadoMediaAritmetica");
    resultadoMediaAritmetica.innerText = `${mediaAritmeticaFinal}`
}