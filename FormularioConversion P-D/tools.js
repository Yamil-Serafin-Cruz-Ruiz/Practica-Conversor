var valdol;
var valpes;
var numdolares;
var numpesos;
var res;
var form = document.getElementById("frmdols");
var btn1 = document.getElementById("D-P");
var btn2 = document.getElementById("P-D")
var btn3 = document.getElementById("Borrar")

btn1.addEventListener("click", function(){

    valdol = document.getElementById("valdolar").value;
    valdol = Number.parseFloat(valdol);
    console.log("Valor de Dolar es: "+valdol);
    caja = document.getElementById("Dolares");
    
    numdolares = document.getElementById("dolares").value;
    numdolares = Number.parseFloat(numdolares);
    console.log("Dolares a convertir: "+numdolares);
    res = valdol * numdolares;
    console.log("Los dolares son: "+res)
    caja.textContent ="  "+res +" ";
})

btn2.addEventListener("click", function(){

    valpes = document.getElementById("valpeso").value;
    valpes = Number.parseFloat(valpes);
    console.log("Valor de Peso es: "+valpes);
    caja = document.getElementById("Pesos");

    numpesos = document.getElementById("pesos").value;
    numpesos = Number.parseFloat(numdolares);
    console.log("Pesos a convertir: "+numpesos);
    res = valpes * numpesos;
    console.log("Los dolares son: "+res)
    caja.textContent ="  "+res +" ";

})

btn3.addEventListener("click", function(){
    
    document.getElementById("valdolar").value = '';
    document.getElementById("dolares").value = '';
    document.getElementById("valpeso").value = '';
    document.getElementById("pesos").value = '';
})