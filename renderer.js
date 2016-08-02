

angular.module('myApp', [
  'ui.router',
  'app.MainService'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: './templates/main.html'  
      })
      .state('about', {
        url: '/about',
        templateUrl: './templates/about.html'  
      })
      .state('fruits', {
        url: '/fruits',
        templateUrl: './templates/fruits.html',
        controller: 'MainCtrl'
      })
    
  })  
  .controller('MainCtrl', function ($scope, MainService) { 
    $scope.name = 'AngularJS'

    $scope.fruits = MainService.getFruits();
    
  })
  .factory()
  .factory()
  .controller()