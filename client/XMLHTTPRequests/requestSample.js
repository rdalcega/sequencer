var requestSample = function( name, callback ) {

  // name: 'clap', 'closedHat', 'kick', etc...

  // callback: function( audioBuffer ) { ... }
  
  var request = new XMLHttpRequest( );

  request.open(

    'GET',

    '/static/samples/' + name + '.wav',

    true

  );

  request.responseType = 'arraybuffer';

  request.onload = function( ) {

    window.context.decodeAudioData(

      request.response,

      callback,

      function( error ) {

        console.error(

          'Error decoding audio data ' +

          'from ' + name + '.wav: ' +

          error

        );

      }

    );

  };

  request.send( );

};