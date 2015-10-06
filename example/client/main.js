Template.body.onRendered(function() {
  var map = new Datamap({
    element : this.find('.world-map'),
    height  : 500,
  });
});