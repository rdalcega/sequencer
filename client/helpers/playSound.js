var playSound = function( buffer, offset ) {

  offset = offset || 0;

  var source = window.context.createBufferSource( );

  source.buffer = buffer;

  source.connect( window.context.destination );

  source.start( offset );

};