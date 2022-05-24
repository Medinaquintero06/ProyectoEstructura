function recibirdatos() //conectar funcion
{
    //alert("ESTA ES LA FUNCION");

    var nombre = (document.getElementById("boxname").value) //definir variable
    console.log(nombre); //saltar alerta  en consola F12

    var apellido = (document.getElementById("boxlastname").value) //definir variable
    console.log(apellido); //saltar alerta  en consola F12

    var email = (document.getElementById("boxemail").value) //definir variable
    console.log(email); //saltar alerta  en consola F12

    var documento = (document.getElementById("boxdocument").value) //definir variable
    console.log(documento); //saltar alerta  en consola F12

    alert("NOMBRE COMPLETO ES "+nombre+"  "+apellido); //saltar alerta
    alert("SU EMAIL Y DOCUMENTO ES "+email+"  "+documento) //saltar alerta
    if(nombre=="Mateo" && documento==1023523440) //condicional si
   
    {
        alert("HOLA Mateo") //saltar alerta
    }
}
function funcionvelocidad() //conectar funcion
{
    var distancia = (document.getElementById("boxdistancia").value); //definir variable
    
    var tiempo = (document.getElementById("boxtiempo").value); //definir variable
    
    console.log=(distancia/tiempo); //saltar alerta  en consola F12

    alert("LA VELOCIDAD EN M/S ES "+(distancia/tiempo)); //saltar alerta
    
}
function funciontrabajo () //conectar funcion
{

var fuerza= parseFloat(document.getElementById("cajafuerza").value ); //definir variable

var distancia= parseFloat(document.getElementById("cajadistancia").value ); //definir variable

var angulo= parseFloat(document.getElementById("cajaangulo").value ); //definir variable

angulo=(angulo*Math.PI)/180 //proceso matematico

console.log(angulo); //saltar alerta en consola F12

var trabajo= fuerza*distancia*(Math.cos(angulo)); //definir variable

alert("EL TRABAJO EN JOULES ES "+trabajo); //saltar alerta
}
function funcionlibro()
{
var libro=(document.getElementById("boxlibro").value ); //definir variable

var autor=(document.getElementById("boxautor").value ); //definir variable
    
var cantidad= parseInt(document.getElementById("boxcantidad").value ); //definir variable

var valor= parseFloat(document.getElementById("boxvalor").value ); //definir variable //definir variable


var desc;
var valortotal=0

    
if (libro=="A" && autor=="X" | autor=="Y" && cantidad>=1 & cantidad<=10 )
{
var desc=1500*cantidad;
valortotal=(cantidad*valor)-desc
}
if (libro=="A" && autor=="Z"  && cantidad>=1 & cantidad<=5 )
{
var desc=1000*cantidad;
valortotal=(cantidad*valor)-desc
}
if (libro=="B" && autor=="X"  && cantidad>=1 & cantidad<=5 )
{
var desc=900*cantidad;
valortotal=(cantidad*valor)-desc
}
if (libro=="C" && autor=="Z"  && cantidad>=1 & cantidad<=3 )
{
var desc=750*cantidad;
valortotal=(cantidad*valor)-desc
}
if (libro=="C" && autor=="X"  && cantidad>=1 & cantidad<=5)
{
var desc=600*cantidad;
valortotal=(cantidad*valor)-desc
}


alert("EL VALOR ES" +valortotal )
alert("EL DESCUENTO ES" +desc)

}

function funcionParimpar()
{
   
    var numero = parseFloat (document.getElementById("paresimpares").value);
    console.log(numero);
    if(numero % 2 == 0)
{
     alert("el numero1 es par")
}
else{
    alert("el numero es impar")
}
}

function funcionnumeromayor()
{
    var numero1 = parseFloat(document.getElementById("numero1").value);
    console.log(numero1);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    console.log(numero2);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    console.log(numero3);
    if (numero1>numero2 & numero1>numero3)
 {
    alert("El numero 1 es el mayor ")
}
if (numero2>numero1 & numero2>numero3)
{
   alert("El numero 2 es el mayor ")
}
if (numero3>numero2 & numero3>numero1)
{
   alert("El numero 3 es el mayor ")
}
if (numero1<numero2 & numero1<numero3)
{
   alert("El numero 1 es el menor ")
}
if (numero2<numero1 & numero2<numero3)
{
   alert("El numero 2 es el menor ")
}
if (numero3<numero2 & numero3<numero1)
{
   alert("El numero 3 es el menor ")
}
}
function funcionporcentaje()//conectar funcion
{
    var cantidad1 = parseFloat(document.getElementById("numero1").value);//definir variable, convirtiendo en flotante, seleccionar id 
    console.log(cantidad1);//mostrar alerta en consola F12
    var cantidad2 = parseFloat(document.getElementById("numero2").value);//definir variable, corvirtiendo en flotante, seleccionar id
    console.log(cantidad2);//mostrar alerta en consola F12
    total=cantidad1+cantidad2//proceso matematico
    {
        alert("El porcentaje de mujeres es" + (cantidad1*100/total)+"%")//saltar alerta
    }
    {
        alert("El porcentaje de hombres es" + (cantidad2*100/total)+"%")//saltar alerta
    }


}
function funciondescuento()
{
    var articulo =(document.getElementById("boxarticulo").value ); //definir variable
    console.log(articulo)
    var clave= parseInt(document.getElementById("boxclave").value ); //definir variable
    
    var precio= parseFloat(document.getElementById("boxprecio").value );
    console.log(precio);

    var desc;
    var valortotal=0


    if (clave=="01" )
    {
    var desc=precio*0.1;
    valortotal=(precio-desc)
}
    if (clave=="02" )
{
    var desc=precio*0.2;
    valortotal=(precio-desc)

}
{
    alert("EL ARTICULO ES" +articulo)
    alert("EL VALOR ES" +valortotal )
    alert("EL DESCUENTO ES" +desc)
   

}
}
