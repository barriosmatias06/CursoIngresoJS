/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

var numerouno,numerodos;
function SacarResto()
{
	var resto;
    numerouno=document.getElementById('numeroDividendo').value;
    numerodos=document.getElementById('numeroDivisor').value;
    resto=parseInt(numerouno)%parseInt(numerodos);
    alert('El resultado de la división es '+resto);

}
