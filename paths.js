var path = require( 'path' );

module.exports = {

  samples: path.join(

    __dirname,

    'client/samples'

  ),

  client: path.join(

    __dirname,

    'client'

  ),

  dependencies: path.join(

    __dirname,

    'bower_components'

  )

};