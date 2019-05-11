var Libreria = Backbone.View.extend({
    tagName: 'span',
    className: 'nombreClase',
    id: 'nombreId'
});

var appView = new Libreria();

console.log('vistas');
console.log(appView.el);
console.log('---------------');

var Libreria2 = Backbone.View.extend({
    el: '.vista'
});
var appView2 = new Libreria2();
console.log(appView2.el);
console.log('appView2.$el nos devuelve un elemento DOM con el cual podemos interactuar con JQUERY');
console.log(appView2.$el);
appView2.$el.text('Hola Mundo desde jQUERY y Backbone');
appView2.$el.append('<h1>Feliz Dia</h1>');
appView2.$el.css('background','green');
appView2.$el.css('color','white');
appView2.$el.css('margin','30px');
appView2.$el.css('padding','30px');
appView2.$el.css('border-radius','10px');
appView2.$el.css('text-align','center');


var Libreria4 = Backbone.View.extend({
    el: '.botella',
    render: function() {
        this.$el.html('<h4>Este es el metodo render con jquery</h4>');
    },
    initialize: function(){
        this.render();
    }
});
var appView4 = new Libreria4();



 var Libreria3 = Backbone.View.extend({
    el: '.vistaL',
    events: {
        'mouseover .cambiarColor': 'cambiarColorF',
        'click .cambiarColor': 'cambiarColorQ'

    },
    cambiarColorF:function() {
        this.$el.css('background','orange')
        this.$el.css('color','white')
        this.$el.css('border','1px solid black')
        this.$el.css('margin','15px')
        this.$el.css('border-radius','5px')
    },
    cambiarColorQ:function() {
        alert('Feliz Dia. Hoy has realizado un cambio bastante grande en tu vida, Felicidades');
    }
});
var appView = new Libreria3();
 