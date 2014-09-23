angular.module('testApp').controller('MainManager', ['$rootScope', '_', '$document',
  function ($rootScope, _, $document) {
    var document = $document[0];

    $rootScope.$watch('document', function () {
      $rootScope.data = _.chain(document.getElementsByTagName('*'))
        .filter(function (v) {
          return v.nodeType === 3;
        })
        .sort()
        .value();

      $rootScope.weather = _.chain(document.getElementsByTagName('*'))
        .filter(function (v) {
          return v.nodeType === 1;
        })
        .sort()
        .value();

      
      $rootScope.container = _.map($rootScope.weather, function (v) {
        /*jshint unused: vars */
        return _.reduce($rootScope.data[v], function (res, val, key) {
          return res + val;
        });
        /*jshint unused: true */
      });
      
    });
  }
]);
