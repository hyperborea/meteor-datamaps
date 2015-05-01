Package.describe({
  summary: "Meteor wrapper for DataMaps - World Maps for D3.js",
  version: "1.0.0",
  name: "hyperborea:datamaps",
  git: "https://github.com/hyperborea/meteor-datamaps.git",
});

Package.onUse(function (api) {
  api.use('d3js:d3@3.5.5', 'client');
  api.addFiles('topojson/topojson.js', 'client');
  api.addFiles('datamaps/dist/datamaps.world.js', 'client');
});