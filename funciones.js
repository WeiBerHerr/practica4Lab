function redireccion(){
    alert("Usted esta siendo redireccionado")
}
function enviarformulario(){
    alert ("GRACIAS POR SU RESPUESTA, VOLVIENDO A HOME")
}

function sumar()
{
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    operacion=document.getElementById("operaciones").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var resultado;

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Pone numeros carnero");
    }
    if (operacion=="suma"){
        resultado= num1 + num2;
        
    } 
    if (operacion =="resta") {
        
        resultado= num1 - num2;
    }
    if (operacion =="multiplicar") {
        
        resultado= num1 * num2;
    }
    if (operacion =="dividir") {
        
        resultado= num1 / num2;
    }
    
    document.getElementById("resultado").innerHTML = "El resultado es: "+resultado;
}
function borrar()
{
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    
}


function elegirMayor(){
    var e1 = document.getElementById("e1").value;
    var e2 = document.getElementById("e2").value;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    e1 = parseInt(e1);
    e2 = parseInt(e2);

    mostrar=document.getElementById("mostrar").value;

    //n1 = toString(n1);
    //n2=  toString(n2);   

    if(!isNaN(n1) || !isNaN(n2) || isNaN(e1) || isNaN(e2))
    {
        alert("Faltan Datos");
    }
    if (e1 > e2){
        
    document.getElementById("mostrar").innerHTML = "El mayor es: " + n1 + " con " + e1 +" de edad.";
    }
    if (e1 < e2){
        
    document.getElementById("mostrar").innerHTML = "El mayor es: " + n2 + " con " + e2 +" de edad.";

    }
    if (e1 == e2){
        
    document.getElementById("mostrar").innerHTML = n1 + " tiene la misma edad que " + n2;
    }
}