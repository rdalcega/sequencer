var requestSample = function( name, callback ) {

  // name: 'clap', 'closedHat', 'kick', etc...

  // callback: function( audioBuffer ) { ... }
  
  var request = new XMLHttpRequest( );

  request.open(

    'GET',

    '/static/samples/' + name + '.aif',

    true

  );

  request.responseType = 'arrayBuffer';

  request.onload = function( ) {

    context.decodeAudioData(

      request.response,

      callback,

      function( error ) {

        console.error(

          'Error decoding audio data ' +

          'from ' + name + '.aif: ' +

          error

        );

      }

    );

  };

  request.send( );

};