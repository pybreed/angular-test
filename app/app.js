/* jshint indent:2 */

angular.module('testApp', ['ngRoute', 'angular-underscore'])
  .config(['$routeProvider',
    function ($routeProvider) {

      $routeProvider.when('/', {
        controller: 'RokkCtrl',
        templateUrl: '/weather-find.html'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ])
  .value('_', _);
// happyHunting...
//                        88        88        ad888888b,
//    sc@                 88        88       d8"     "88
//                        88        88               a8P
// 8b,dPPYba,  ,adPPYba,  88   ,d8  88   ,d8      aad8"  8b,dPPYba,
// 88P'   "Y8 a8"     "8a 88 ,a8"   88 ,a8"       ""Y8,  88P'   "Y8
// 88         8b       d8 8888[     8888[            "8b 88
// 88         "8a,   ,a8" 88`"Yba,  88`"Yba, Y8,     a88 88
// 88          `"YbbdP"'  88   `Y8a 88   `Y8a "Y888888P' 88
// 88                     88
// 88                     88
// 88                     88
// 88          ,adPPYYba, 88,dPPYba,  ,adPPYba,
// 88          ""     `Y8 88P'    "8a I8[    ""
// 88          ,adPPPPP88 88       d8  `"Y8ba,
// 88          88,    ,88 88b,   ,a8" aa    ]8I
// 88888888888 `"8bbdP"Y8 8Y"Ybbd8"'  `"YbbdP"'
