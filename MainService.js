
angular.module('app.MainService', [])

  .factory('MainService', function () {
    var fruits = [
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Orange'},
      {id: 3, name: 'Banana'}
    ];
    return {
      getFruits: function () {
        return fruits;
      }
    }
  })