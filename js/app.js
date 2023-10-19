// Implementar solución aquí

document.querySelector("body").style.backgroundColor = " #ff6347";
document.getElementById("hexadecimal").innerHTML = " #ff6347";

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * simbolos.length)]; // Math.floor = parseInt
	}
	 document.body.style.background = color;
	 document.getElementById("hexadecimal").innerHTML = color;
     /*document.querySelector("#hexadecimal").textContent = color;*/
}
