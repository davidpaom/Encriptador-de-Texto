var buttonEncriptar = document.querySelector("#buttonEnc");
var buttonDesencriptar = document.querySelector("#buttonDesc");
var buttonCopiar = document.querySelector("#buttonCop");
var mensaje = document.querySelector("#msg")
var letter = ""
var mensajeEncriptado = new Array;
var mensajeamostrar = ""
mensaje.value = mensajeamostrar

function verificar(letra){
    letter = letra
    if (letter == "a"){
        letter="ai"
    }
    if (letter == "e"){
        letter="enter"
    }
    if (letter == "i"){
        letter="imes"
    }
    if (letter == "o"){
        letter="ober"
    }
    if (letter == "u"){
        letter="ufat"
    }
}

function encriptar() {
    var cadena = document.querySelector("#input-texto")
    var cadenaMensaje = cadena.value;
    var cadenaArreglo = Array.from(cadenaMensaje)

    if(cadena.value!=""){
        for(var contador = 0; contador < cadenaArreglo.length ; contador++){
            verificar(cadenaArreglo[contador]);
            mensajeEncriptado.push(letter);
        }
    mensajeamostrar = mensajeEncriptado.join("");
    mensaje.value = mensajeamostrar;
  } else{
	  alert("Introduzca un mensaje a encriptar.")
  }
  mensajeEncriptado = []
}

function desencriptar(){
    var mensajeadesencriptar = document.querySelector("#input-texto")
    var cadenamensajeadesencriptar = mensajeadesencriptar.value;

	if(mensajeadesencriptar.value!=""){

    console.log("Botón funciona")

    var arr = Array.from(cadenamensajeadesencriptar) 
	console.log(arr); 

	var arreglo = new Array

	for (contador = 0; contador < arr.length - 1 ; contador++){
	arreglo.push(arr[contador]+arr[contador+1])
	}

	console.log(arreglo)

	var arreglofinal = new Array
	var encontrado = 0

	for (conteo = 0; conteo <= arreglo.length - encontrado; conteo ++){
		if(arreglo[conteo+encontrado] == "ai"){
			arreglofinal[conteo] = "a";
			encontrado = encontrado+1
		} else {
			arreglofinal[conteo] = arr[conteo+encontrado]
		}
	}

	console.log(arreglofinal)

	var arreglo1 = new Array
	for (contador = 0; contador < arreglofinal.length - 3 ; contador++){
	arreglo1.push(arreglofinal[contador]+arreglofinal[contador+1]+arreglofinal[contador+2]+arreglofinal[contador+3])
	}

	console.log(arreglo1)

	var arreglofinal1 = new Array
	var encontrado = 0

	for (conteo = 0; conteo < arreglofinal.length - encontrado; conteo ++){
		if(arreglo1[conteo+encontrado] == "ober" || arreglo1[conteo+encontrado] == "ufat" || arreglo1[conteo+encontrado] == "imes"){
			if(arreglo1[conteo+encontrado] == "ober"){
				arreglofinal1[conteo] = "o";
			}
			if(arreglo1[conteo+encontrado] == "ufat"){
				arreglofinal1[conteo] = "u";
			}
			if(arreglo1[conteo+encontrado] == "imes"){
				arreglofinal1[conteo] = "i";
			}
			encontrado = encontrado+3
		} else {
			arreglofinal1[conteo] = arreglofinal[conteo+encontrado]
		}
	}

	console.log(arreglofinal1)

	var arreglo2 = new Array
	for (contador = 0; contador < arreglofinal1.length - 4 ; contador++){
	arreglo2.push(arreglofinal1[contador]+arreglofinal1[contador+1]+arreglofinal1[contador+2]+arreglofinal1[contador+3]+arreglofinal1[contador+4])
	}

	console.log(arreglo2)

	var arreglofinal2 = new Array
	var encontrado = 0

	for (conteo = 0; conteo < arreglofinal1.length - encontrado; conteo ++){
		if(arreglo2[conteo+encontrado] == "enter"){
				arreglofinal2[conteo] = "e";
			encontrado = encontrado+4
		} else {
			arreglofinal2[conteo] = arreglofinal1[conteo+encontrado]
		}
	}

	console.log(arreglofinal2)
	var mensajedesencriptado = arreglofinal2.join("")
	mensaje.value = mensajedesencriptado;
	} else {
		alert("Introduzca mensaje a desencriptar")
	}
}

function copiar(){

	//var mensaje = document.querySelector("#msg")
	//mensaje.select();
	let s =  window.getSelection().toString();

	if(s) {
		document.execCommand('copy');
	} else {
		var mensaje = document.querySelector("#msg")
		mensaje.select();
		document.execCommand('copy');
	}
	
}

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopiar.onclick = copiar;

