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
    }
}
