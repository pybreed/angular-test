angular.module('testApp').controller('RokkCtrl', ['$scope', 'weatherService', 'Item',
  function RokkCtrl($scope, weatherService, Item) {

    $scope.searchWeather = function () {
      weatherService.find($scope.cityName).then(function (status) {
        $scope.status = status;
      });
    };

    // DO NOT CHANGE START
    $scope.addItem = function () {
      var t = new Item($scope.itemName);
      $scope.items.push(t);
      $scope.itemName = '';
    };
    // DO NOT CHANGE END

    $scope.items = [];
    /*jshint unused: vars */
    $scope.$watch('items', function (newItems, old) {
      $scope.itemCount = newItems.length;
    });
    /*jshint unused: true */
  }
]);
