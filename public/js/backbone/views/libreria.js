var Libreria = Backbone.View.extend({
    el: '.vista',
    events: {
        'click .cambiarColor': 'cambiarColor'
    },
    cambiarColor:function() {
        this.$el.css('background','orange')
        this.$el.css('color','white')
        this.$el.css('border','1px solid black')
        this.$el.css('margin','15px')
        this.$el.css('border-radius','5px')
    }
});
var appView = new Libreria();
