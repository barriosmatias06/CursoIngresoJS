/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno,numerodos;
    var suma;
    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;
    suma=parseInt(numerouno)+parseInt(numerodos);
    alert('El resultado es'+suma);
}

function restar()
{
	var numerouno,numerodos;
    var resta;
    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;
    resta=parseInt(numerouno)-parseInt(numerodos);
    alert('El Resultado es'+resta);
}

function multiplicar()
{ 
   var numerouno,numerodos;
   var multi;
   numerouno=document.getElementById('numeroUno').value;
   numerodos=document.getElementById('numeroDos').value;
   multi=parseInt(numerouno)*parseInt(numerodos);
   alert('El resultado de la Multiplicación es '+multi);

}

function dividir()
{
	var numerouno,numerodos;
    var divi;
    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;
    divi=parseInt(numerouno)/parseInt(numerodos);
    alert('El resultado de la multiplicación es '+divi);

}

