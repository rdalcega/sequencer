var sampleBuffers = {};

var sampleNames = [
  
  'clap',

  'closedHat',

  'kick',

  'openHat',

  'snare'

];

sampleNames.forEach( function( name ) {

  requestSample( name, function( audioBuffer ) {

    samplesBuffers[ name ] = audioBuffer;

  });

});