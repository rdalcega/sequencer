var createContext = function( ) {

  var Context = 

    window.AudioContext ||

    window.webkitAudioContext ||

    window.mozAudioContext ||

    window.oAudioContext ||

    window.msAudioContext;

  window.context = new Context( );

};