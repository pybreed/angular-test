angular.module('testApp').service('weatherMap', function () {
  var margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  var width = 960 - margin.left - margin.right,
      height = 640 - margin.top - margin.bottom;

  var svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  return {
    m: margin,
    d: [width, height],
    s: svg
  };
});
