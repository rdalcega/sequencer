var SequencesView = Backbone.View.extend({

  className: 'sequences',

  tagName: 'div',

  initialize: function( ) {

    this.render( );

  },

  render: function( ) {

    for( var i = 0; i < this.model.length; i++ ) {

      var sequenceView = new SequenceView({

        model: this.model.at( i )

      });

      this.$el.append( sequenceView.$el );

    }

  }

});