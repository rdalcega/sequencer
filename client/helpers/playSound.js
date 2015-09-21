var playSound = function( buffer, when, detune ) {

  when = when || 0;

  detune = detune || 0;

  var source = window.context.createBufferSource( );

  source.buffer = buffer;

  source.connect( window.context.destination );

  source.detune.value = 100 * detune;

  source.start( when );

};