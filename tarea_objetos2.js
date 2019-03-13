//Clase Serie
var claseSerie=function(titulos,alquilados,generos,creadors){
    var serie ={
        titulo:titulos,
        nroTemporadas:[
            {
            _titulo:" ",
            _descripcion:" ",
            }
        ],
        alquilado:alquilados,
        genero:generos,
        creador:creadors,
        numeroTemporadas:0,
        
        crearTemporadas:function(){
            var n=+prompt(`Ingrese numero de Temporadas:`);
            var tituloTemporada;
            var  descripcionTemporada;

            for(let i=0;i<n;i++){
                tituloTemporada=prompt(`Ingrese el titulo de la Temporada [${i+1}]:`);
                descripcionTemporada=prompt(`Ingrese la descripcion de la Temporada [${i+1}]:`);
 
                let temp = {
                    titulo:tituloTemporada,
                    descripcion:descripcionTemporada,
                }
                this.nroTemporadas.push(temp);
            }
            this.numeroTemporadas=n;  
                           
        },

        alquilar:function(){
            if(this.alquilado==true)
            console.log(`La serie esta alquilada  `);
            else{
                this.alquilado=true,
                console.log(`Alquilado`);
                
            }
        },
        verInfoDeTemporada:function(numero){
            console.log( this.nroTemporadas.titulo);
            console.log( this.nroTemporadas.descripcion);
            
        },
        toString:function(){
            
            console.log(`Titulo: ${this.titulo}`);
            for(let i=1;i<=this.numeroTemporadas;i++){
                console.log(`Titulo de la temporada [${i}]: ${this.nroTemporadas[i].titulo}`);
                console.log(`Descripcion de la temporada [${i}]: ${this.nroTemporadas[i].descripcion}`);                
            }
            console.log(`Genero de la serie: ${this.genero}`);
            console.log(`Creador de la serie: ${this.creador}`);
            console.log(`Alquilado: ${this.alquilado} `);
            
        },
    }
    return serie;
};
function ingresarDatosSerie(){
    
    console.log("========== CLASE SERIE ==========");
    
    var tituloSerie=prompt(`Ingrese el titulo de la Serie:`);   
    var generoSerie=prompt(`Ingrese el genero de la Serie:`);
    var creadorSerie=prompt(`Ingrese el creador de la Serie:`);
    var serie=claseSerie(tituloSerie,true,generoSerie,creadorSerie);
    serie.crearTemporadas();
    serie.toString();
}
ingresarDatosSerie();


