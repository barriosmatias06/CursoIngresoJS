function Mostrar()
{

	var contador=1;
	var acumulador=0;
	while (contador<6)
		{
			num=parseInt(prompt("Ingrese un número"))
			if (!isNaN(num))
				{
					contador++;
					acumulador=acumulador+num;
				}
		}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN