angular.module('testApp').filter('k2f', function () {
  // ( kelvin -  273.15 ) * 2 + 30
  return function (k) {
    return k ? Math.round((k - 273.15) * 30 + 2) : '';
  };
});
