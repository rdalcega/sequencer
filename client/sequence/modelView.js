var SequenceView = Backbone.View.extend({

  className: 'sequence',

  tagName: 'div',

  beatTemplate: _.template([

    '<svg class="beat">',

      '<circle cx="<%- cx %>" ',
              
              'cy="<%- cy %>" ',

              'r="<%- r %>" ',

              'stroke="black"',

              'stroke-width="1px"',

              'fill="white"',

      '/>',

    '</svg>'

  ].join('')),

  initialize: function( ) {

    this.render( );

  },

  render: function( ) {

    var separation = 90 / ( this.model.sequenceLength - 1 );

    var radius = separation / 4 + "%";

    for( var i = 0; i < this.model.sequenceLength; i++ ) {

      this.$el.append( this.beatTemplate({

        cx: 5 + separation * i + "%",

        cy: "50%",

        r: radius

      }));

      this.$el.addClass(this.model.name);

    }
    
  }

});