var playSound = function( buffer, offset ) {

  offset = offset || 0;

  var source = context.createBufferSource( );

  source.buffer = buffer;

  source.connect( context.destination );

  source.start( offset );

};