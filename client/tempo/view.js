var TempoView = Backbone.View.extend({

  className: "tempo",

  tagName: "div",

  template: _.template([

    '<label for="tempoSlider">',

      'BPM <b><%- value %></b>',

    '</label>',

    '<input id="tempoSlider" ',

           'type="range" ',

           'min="40" ',

           'max="240" ',

           'step="1" ',

           'value="<%- value %>"',

   '>'

  ].join('')),

  events: {

    "change": "updateModel"

  },

  updateModel: function( event ) {

    this.model.tempo = +event.target.value;

    this.render( );

  },

  initialize: function( ) {

    this.render( );

  },

  render: function( ) {

    this.el.innerHTML = this.template({

      value: this.model.tempo

    });

  }

});