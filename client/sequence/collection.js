var Sequences = Backbone.Collection.extend({

  model: Sequence,

  initialize: function( ) {

    this.sampleNames = [

      'clap',

      'closedHat',

      'kick',

      'openHat',

      'snare'

    ];

    for( var i = 0; i < this.sampleNames.length; i++ ) {

      var sequence = new Sequence( this.sampleNames[ i ], 16 );

      this.push( sequence );

    }

  }

});