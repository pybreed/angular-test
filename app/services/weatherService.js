angular.module('testApp').factory('weatherService', ['$http', '$q', 'weatherMap',
  function ($http, $q, WeatherMap) {
    return {
      find: function (city) {
        var q = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city)
          .then(function (response) {
            //TODO: check response.status and data.cod
            q.resolve(response.data);
          });

        return q.promise;
      },
      map: function (latLon) {
        return new WeatherMap(latLon);
      }
    };
  }
]);
