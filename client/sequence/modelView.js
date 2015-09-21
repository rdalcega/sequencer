var SequenceView = Backbone.View.extend({

  className: 'sequence',

  tagName: 'div',

  beatTemplate: _.template([

    '<svg class="beat">',

      '<circle cx="<%- cx %>" class="toggle"',
              
              'cy="<%- cy %>" ',

              'r="<%- r %>" ',

              'stroke="black"',

              'stroke-width="1px"',

              'fill="white"',

      '/>',

    '</svg>'

  ].join('')),

  increaseRadius: function( event ) {

    console.log( event );

  },

  initialize: function( ) {

    this.render( );

    this.$el.on( 'click', '.toggle', this.increaseRadius.bind( this ) );

  },

  render: function( ) {

    var separation = 90 / ( this.model.sequenceLength - 1 );

    var radius = separation / 8 + "%";

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