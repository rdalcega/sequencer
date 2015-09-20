var TempoView = Backbone.View.extend({

  className: "tempo",

  tagName: "div",

  template: _.template([

    '<input class="tempoSlider" ',

           'type="range" ',

           'min="40" ',

           'max="240" ',

           'step="1" ',

           'value="120"',

   '>'

  ].join('')),

  events: {

    "change": "updateModel"

  },

  updateModel: function( event ) {

    this.model.tempo = +event.target.value;

  },

  initialize: function( ) {

    this.render( );

  },

  render: function( ) {

    this.el.innerHTML = this.template();

  }

});