let boton = document.getElementById('boton-final');

boton.addEventListener("click", function(){
    let passUno = (document.getElementById('select-a').value);
    let passDos = (document.getElementById('select-b').value);
    let passTres = (document.getElementById('select-c').value);
    
    let resultado = passUno + passDos + passTres
    console.log(resultado)

    if (resultado == 911){
    document.getElementById('mensaje-abajo').innerHTML = "Clave uno correcta";
    document.getElementById('mensaje-arriba').innerHTML = "transiet vir bonae fidei";

    }
    else if (resultado == 714) {
        document.getElementById('mensaje-abajo').innerHTML = "clave dos correcta";
        document.getElementById('mensaje-arriba').innerHTML = "Veritas vos liberabit";

    }
    else {
    document.getElementById('mensaje-abajo').innerHTML = "clave incorrecta";
    document.getElementById('mensaje-arriba').innerHTML = "Homo homini lupus!";
    } 
    
});