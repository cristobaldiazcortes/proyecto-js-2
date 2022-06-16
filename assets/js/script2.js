
let boton = document.getElementById('boton-final');

boton.addEventListener("click", function(){
    let numUno = Number(document.getElementById('input-a').value);
    let numDos = Number(document.getElementById('input-b').value);
    let numTres = Number(document.getElementById('input-c').value);
    console.log (numUno)

    console.log(numDos)
    let resultado = numUno + numDos + numTres
    console.log(resultado)

    if (resultado > 10){
    document.getElementById('mensaje-abajo').innerHTML = "No puedes llevar mas de 10 stickers";
    document.getElementById('mensaje-arriba').innerHTML = "Fuiste bueno!";

    }
    else {
    document.getElementById('mensaje-abajo').innerHTML = "Tú compra a sido aceptada, llevas "  + resultado +  " stickers";
    document.getElementById('mensaje-arriba').innerHTML = "Muchas gracias!";
    } 
    
});