function Mostrar()
{
    var num=prompt('Ingrese un numero');
    var cont=0;
    for(i=0;i<=num;i++)
    {
        if(i%2==0)
     {
         cont++;
         console.log(i);
     }
    }
    console.log('La cantidad de pares es '+ cont);
}//FIN DE LA FUNCIÓN