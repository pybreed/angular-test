angular.module('testApp').directive('itemThing', ['$timeout',
  function ($timeout) {
    return {
      restrict: 'E',
      template: '<input placeholder="Enter Item" ng-model="itemName">',
      link: function (scope, element) {
        $timeout(function () {
          element.children('input')[0].focus();
        });
        element.on('click', function () {
          angular.element(this).parent()[0].submit();
        });
      }
    };
  }
]);
