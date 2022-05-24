function ver(n) 
{  
 
document.getElementById("subseccion"+n).style.display="block" 

}  
 

function ocultar(n) 
{ 

    document.getElementById("subseccion"+n).style.display="none" 

} 
function funcion150480()
{
    if(x.matches)
    {
        console.log("150-480");
        //alert("tamaño entre 100 y 480");
       //document.body.style.backgroundColor="red";
        document.getElementById("titulo").style.fontSize="80%";
        document.getElementById("titulo1").style.fontSize="80%";
        document.getElementById("titulo2").style.fontSize="80%";

        document.getElementById("seccion6").style.marginRight="20%";
        document.getElementById("seccion7").style.marginRight="20%";
    }
    else
    {
        document.getElementById("titulo").style.fontSize="150%";
        document.getElementById("titulo1").style.fontSize="150%";
        document.getElementById("titulo2").style.fontSize="150%";

        document.getElementById("seccion6").style.marginRight="5%";
        document.getElementById("seccion7").style.marginRight="5%";


    }
}



function funcion481900()
{
    if(y.matches)
    {
        console.log("481-900");
        //alert("tamaño entre 360 y 480");
       //document.body.style.backgroundColor="red";
        document.getElementById("titulo").style.fontSize="80%";
        document.getElementById("titulo1").style.fontSize="80%";
        document.getElementById("titulo2").style.fontSize="80%";

        document.getElementById("seccion6").style.marginRight="20%";
        document.getElementById("seccion7").style.marginRight="20%";
    }
    else
    {
        document.getElementById("titulo").style.fontSize="150%";
        document.getElementById("titulo1").style.fontSize="150%";
        document.getElementById("titulo2").style.fontSize="150%";

        document.getElementById("seccion6").style.marginRight="5%";
        document.getElementById("seccion7").style.marginRight="5%";


    }
}


var x = window.matchMedia("(min-width : 150px) and (max-width : 480px)");
var y = window.matchMedia("(min-width : 481px) and (max-width : 900px)");
funcion150480(x);
funcion481900(y);
x.addListener(funcion150480);
y.addListener(funcion481900);
