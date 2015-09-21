var Sequence = Backbone.Model.extend({

  initialize: function( name, sequenceLength ) {

    this.name = name;

    this.sequenceLength = sequenceLength;

    this.sequence = new Int8Array(this.sequenceLength);

  }

});