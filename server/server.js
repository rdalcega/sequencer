var express = require( 'express' );

var router = require( './router.js' );

var app = express( );

app.use( router );

console.log( 'listening on 44100' );

app.listen( 44100 );