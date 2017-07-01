function Mostrar()
{
//tomo la edad  

   var edad;
   edad=document.getElementById('edad').value;
   if (parseInt(edad)>=18)
   {
    alert('Esta persona es Mayor de edad');
 
   }
   else
   {
    alert('Esta persona es Menor de edad');
    
   }
}//FIN DE LA FUNCIÓN