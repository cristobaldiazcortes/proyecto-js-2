let margen = document.getElementById('portada');
a = 0;
console.log(a);
margen.addEventListener("click", function(){
    if (a == 0){
    document.getElementById('portada').style.border="2px solid crimson";
    a = 3;
    }
    else {
        console.log(a);
        document.getElementById('portada').style.border="none";
    a = 0;
    console.log(a);
    }
});