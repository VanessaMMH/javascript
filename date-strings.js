// var fecha= new Date();
// var navidad=new Date(2019,25,12);
// var resto=navidad-fecha;
// document.write(resto);
// var semana=resto/(1000*60*60*24*7);
// document.write(`<p>${semana}</p>`   );
// var nacimiento= new Date(1993,31,01);
// var r=((((((fecha-nacimiento)/1000)/60)/60)/24)/365);
// document.write(`<p>${r}</p>`   );


var cadena=prompt("Ingrese una cadena");
function convertirAmayusculas(cad){
    var totalVocales=0;
    for(let i=0;i<cad.length;i++){
        if(cad.charAt(i)=="a" ||cad.charAt(i)=="e"||cad.charAt(i)=="i"|| cad.charAt(i)=="o"||cad.charAt(i)=="u" )
            totalVocales++;
        if(cad.charAt(i)=="A" ||cad.charAt(i)=="E"||cad.charAt(i)=="I"|| cad.charAt(i)=="O"||cad.charAt(i)=="U")
            totalVocales++;
    }
    console.log("Total vocales => "+totalVocales);
    
}
function invertirCadena(cad){
    var cadInvertida="";
    var tam=cad.length;
   
    console.log(tam);
    
    for(let i=1;i<=tam;i++){
       
        cadInvertida+=cad.charAt(tam-i);   
    }
    
    console.log("La cadena invertida es: "+cadInvertida);
    return cadInvertida
    
}

function seRepiteCad(cad){
    var subcad=prompt("Ingrese la subcadena:");
    var tam=cad.length;
    var tamSub=subcad.length;
    var total=0;

    for(let i=0;i<=tam-tamSub;i++){
       if(cad.substr(i,tamSub)==subcad)
        total++;   
    }
    
    console.log("El total de veces es: "+total);
}
function palindromo(cad){
    var cadInver=invertirCadena(cad);
    var flag=true;
    for(let i=0;i<cad.length;i++){
        if(cad.charAt(i)!=cadInver.charAt(i)){
            flag=false;
            break;
        }  
    }
    if(flag==true){
        console.log("Palidrno");
    }
    else{
        console.log("No palidromo");
    }
}
//Convierte la primera letra de cada palabra a mayuscula
function capitalizar(cad){
    var c=(cad.charAt(0)).toUpperCase();
    var cadena="";
    cadena+=c;
    
    
    for(let i=1;i<cad.length;i++){
        if(cad.charAt(i)==" "){
            cadena+=" ";
            i++;
            
            cadena+=(cad.charAt(i)).toUpperCase();
            
        }
        else
            cadena+=cad.charAt(i);
    }
    console.log(cadena);
  
}
convertirAmayusculas(cadena);
invertirCadena(cadena);

palindromo(cadena);
capitalizar(cadena);
seRepiteCad(cadena);

