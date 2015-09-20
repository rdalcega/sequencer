var loadSamples = function( ) {

  window.sampleBuffers = {};

  var sampleNames = [
    
    'clap',

    'closedHat',

    'kick',

    'openHat',

    'snare'

  ];

  sampleNames.forEach( function( name ) {

    requestSample( name, function( audioBuffer ) {

      window.sampleBuffers[ name ] = audioBuffer;

    });

  });

};
