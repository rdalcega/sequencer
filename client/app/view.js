var AppView = Backbone.View.extend({

  initialize: function( ) {

    this.$el = $('body');

    this.tempoView = new TempoView({

      model: this.model.tempo

    });

    this.sequencesView = new SequencesView({

      model: this.model.sequences

    });

    this.render( );

  },

  render: function( ) {

    console.log( $('.sequencer') );

    this.$el.find('.sequencer').append( this.sequencesView.$el );

  }

});