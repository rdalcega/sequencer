var App = Backbone.Model.extend({

  initialize: function( ) {

    this.tempo = new Tempo( );

    this.sequenceLength = 16;

    this.sequences = new Sequences( );

  }

});