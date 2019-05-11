var Libro = Backbone.Model.extend({
    initialize: function () {
        console.log('Se ha creado una nueva instancia');
        this.on('change', function(){
            alert('El modelo ha cambiado');
        })
    },
    defaults: {
        Editorial: 'Planeta',
        minimoPaginas: 150,
        portada: 'requerida',
        edadAutor: 'desconocida'
    }
});  

var primerLibro = new Libro ({
    titulo: 'La Odisea',
    autor: 'Juan Antonio',
    categoria: 'Ficcion'
});
console.log(primerLibro.toJSON());
console.log(primerLibro.get('titulo'));
console.log(primerLibro.get('autor'));

primerLibro.set({
    titulo: 'Networking Estrategico',
    autor: 'Desconocido'
});
console.log('se ha cambiado el titulo y el autor');
console.log(primerLibro.get('titulo'));
console.log(primerLibro.get('autor'));

var segundoLibro = new Libro();

segundoLibro.set({
    edadAutor:18
});
console.log(segundoLibro.toJSON());

var tercerLibro = new Libro({
    titulo: 'El codigo secreto'
});

console.log('Muestra valores por defecto');
console.log(tercerLibro.toJSON());

//Sincronizar los datos con el servidor -> utilizamos la propiedad urlRoot

var Libros = Backbone.Model.extend({
    urlRoot : '/libros',
});

var libroUno = new Libros ({
    id: '1'
});
//libroUno.fetch(); //no funciona 

console.log('Los siguientes Datos bienen de la base de datos');
console.log(libroUno.toJSON()); 




/* var Libro = Backbone.Model.extend({
    urlRoot: '/libros',

});
 var librosDos = new Libro({
     titulo:'La ciencia en 100 años',
     autor:'Juan de la cruz',
     categoria:'Ciencia'
 }); */
