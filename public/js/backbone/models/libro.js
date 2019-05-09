
/*var Libro = Backbone.Model.extend({
    initialize: function() {
        console.log('Se  ha creado una instancia del modelo');
    },
    defaults: {
        autor: 'Desconocido',
    }
});

var primerLibro = new Libro ({
    titulo: 'La odisea',
    autor: 'Homero',
    categoria: 'Literatura'
})*/
var Libro = Backbone.Model.extend({
    urlRoot: '/libros',

});
 var librosDos = new Libro({
     titulo:'La ciencia en 100 años',
     autor:'Juan de la cruz',
     categoria:'Ciencia'
 });
