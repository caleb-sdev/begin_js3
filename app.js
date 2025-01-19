//variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
while(numeroUsuario != numeroSecreto ) {
    numeroUsuario = prompt("Digite seu numero");

    console.log(numeroUsuario);
    /*
    Este codigo realiza
    la comparacion
     */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario} y tus intentos fueron ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        intentos = intentos + 1;
        palabraVeces = 'veces';
        if (intentos > 3) {
            alert('Llegaste al numero maximo de intentos');
            break;
        }
    }
}

/*
let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}
 */
/*
let numeroSecreto = Math.floor(Math.random() * 10);
for (let intentos = 0; intentos < 5; intentos++) {
    let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
    if (intento == numeroSecreto) {
        alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
        break;
    }
}
/*