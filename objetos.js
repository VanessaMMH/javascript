  /*
 var persona={
     name:"Jorge",
     edad:27,
 };
 console.log(persona.name);


 //Creando un obejto con objetos como contenido
 var  vehiculo={
     color:{
         color1:"marron",
         color2:"tier ra"
     },
     propietarios:[
         {
             nombre:"Jorge",
             fecha:"2015"
         },
         {
             nombre:"Daniel",
             fecha:"2018"

         }
     ]
 }
 //console.log(vehiculo.color.color2);
 for(let i=0;i<vehiculo.propietarios.length;i++){
    console.log(vehiculo.propietarios[i].nombre +" => "+ vehiculo.propietarios[i].fecha);
 }
 
 */

//Clase Persona
var clasePersona=function(nombres,edads,dnis,pesos,alturas){
    var persona ={
        nombre:nombres,
        edad:edads,
        dni:dnis,
        peso:pesos,
        altura:alturas,
        

        imc:function(){
            return(`IMC es :${(this.peso)/(this.altura)} `);
        },
        esMayorDeEdad:function(){
            if(this.edad>=17)
                return true;
            return false;
        },
        toString:function(){
            console.log(`Nombre: ${this.nombre}
            Edad : ${this.edad}
            DNI: ${this.dni}
            Peso: ${this.peso}
            Altura: ${this.altura}`);
            
        }
    }
    return persona;
}
 var Luis=clasePersona("Luis",27,12345678,60,160);
Luis.toString();
console.log(Luis.imc());
console.log("Mayor de edad: " + Luis.esMayorDeEdad());


/*
//Clase Electrodomesticos
var claseElectrodomesticos=function(precioBases,colors,consumos,pesos){
    var Electrodomesticos ={
        precioBase:precioBases,
        color:colors,
        consumo:consumos,
        peso:pesos,
        
        

        categoriaConsumo:function(){
            if(this.consumo>=100)
                return(`${this.consumo} => :${(this.peso)/(this.altura)} `);
            else if(this.consumo>=80 && this.consumo<100)
                return(`${this.consumo} => :${(this.peso)/(this.altura)} `);
            else if(this.consumo>=80 && this.consumo<100)
                return(`${this.consumo} => :${(this.peso)/(this.altura)} `);
            else
                return(`${this.consumo} => Consumo invalido `);
        },
        esMayorDeEdad:function(){
            if(this.edad>=17)
                return true;
            return false;
        },
        toString:function(){
            console.log(`Nombre: ${this.nombre}
            Edad : ${this.edad}
            DNI: ${this.edad}
            Peso: ${this.peso}
            Altura: ${this.altura}`);
            
        }
    }
    return persona;
}
 var Luis=clasePersona("Luis",27,12345678,60,160);
Luis.toString();
console.log(Luis.imc());
console.log("Mayor de edad: " + Luis.esMayorDeEdad());
*/




 
 
 
 
 /*
 var persona={
     name:"Jorge",
     edad:27,
 };
 console.log(persona.name);


 //Creando un obejto con objetos como contenido
 var  vehiculo={
     color:{
         color1:"marron",
         color2:"tier ra"
     },
     propietarios:[
         {
             nombre:"Jorge",
             fecha:"2015"
         },
         {
             nombre:"Daniel",
             fecha:"2018"

         }
     ]
 }
 //console.log(vehiculo.color.color2);
 for(let i=0;i<vehiculo.propietarios.length;i++){
    console.log(vehiculo.propietarios[i].nombre +" => "+ vehiculo.propietarios[i].fecha);
 }
 
 */

//Clase Persona
var clasePersona=function(nombres,edads,dnis,pesos,alturas){
    var persona ={
        nombre:nombres,
        edad:edads,
        dni:dnis,
        peso:pesos,
        altura:alturas,
        

        imc:function(){
            return(`IMC es :${(this.peso)/(this.altura)} `);
        },
        esMayorDeEdad:function(){
            if(this.edad>=17)
                return true;
            return false;
        },
        toString:function(){
            console.log(`Nombre: ${this.nombre}
            Edad : ${this.edad}
            DNI: ${this.dni}
            Peso: ${this.peso}
            Altura: ${this.altura}`);
            
        }
    }
    return persona;
}
 var Luis=clasePersona("Luis",27,12345678,60,160);
Luis.toString();
console.log(Luis.imc());
console.log("Mayor de edad: " + Luis.esMayorDeEdad());


/*
//Clase Electrodomesticos
var claseElectrodomesticos=function(precioBases,colors,consumos,pesos){
    var Electrodomesticos ={
        precioBase:precioBases,
        color:colors,
        consumo:consumos,
        peso:pesos,
        
        

        categoriaConsumo:function(){
            if(this.consumo>=100)
                return(`${this.consumo} => :${(this.peso)/(this.altura)} `);
            else if(this.consumo>=80 && this.consumo<100)
                return(`${this.consumo} => :${(this.peso)/(this.altura)} `);
            else if(this.consumo>=80 && this.consumo<100)
                return(`${this.consumo} => :${(this.peso)/(this.altura)} `);
            else
                return(`${this.consumo} => Consumo invalido `);
        },
        esMayorDeEdad:function(){
            if(this.edad>=17)
                return true;
            return false;
        },
        toString:function(){
            console.log(`Nombre: ${this.nombre}
            Edad : ${this.edad}
            DNI: ${this.edad}
            Peso: ${this.peso}
            Altura: ${this.altura}`);
            
        }
    }
    return persona;
}
 var Luis=clasePersona("Luis",27,12345678,60,160);
Luis.toString();
console.log(Luis.imc());
console.log("Mayor de edad: " + Luis.esMayorDeEdad());
*/




 
 
 
