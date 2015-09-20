var Context = 

  window.AudioContext ||

  window.webkitAudioContext ||

  window.mozAudioContext ||

  window.oAudioContext ||

  window.msAudioContext;

var context = new Context( );