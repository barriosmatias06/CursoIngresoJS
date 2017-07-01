/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numerouno,numerodos;
    var resultado;


    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;
    resultado=parseInt(numerouno)+parseInt(numerodos);

    alert('El Resultado es'+resultado);



}

