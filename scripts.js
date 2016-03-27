
console.log("inicio programa");
var numeroUsuario =prompt("ingrese un numero del 1 al 5");
var numeroAdivinar = 3;
if (parseInt(numeroUsuario)===numeroAdivinar)
{
	adivinoCorrectamente = true;

}
else if  (parseInt(numeroUsuario) > numeroAdivinar)

{
	alert("el numero que ingresaste es mayor");
	var nuevointento = prompt("intento de nuevo,ingrese un numero del 1 al 5");
	if (parseInt(nuevointento)===numeroAdivinar)
	{
	adivinoCorrectamente = true;
}
 else
 {
    adivinoCorrectamente = false;
}
}
else if ((parseInt(numeroUsuario) < numeroAdivinar))
{
   alert("el numero que ingresaste es menor");
	var nuevointento = prompt("intento de nuevo,ingrese un numero del 1 al 5");
	if (parseInt(nuevointento)===numeroAdivinar)
	{
	adivinoCorrectamente = true;
}  
else
{
adivinoCorrectamente = false;
}
}
if (adivinoCorrectamente)
{
	document.write("<p>ADIVINASTE. BUEN TRABAJO.!!!</P>");

}
else
{
	document.write("<p>NO ADIVINASTE. INTENTALO DE NUEVO =</P>");
}
console.log("PROGRAMA COMPLETO");





