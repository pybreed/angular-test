angular.module('testApp').factory('Item', function () {
  return function (name) {
    this.name = name;
    return this;
  };
});
