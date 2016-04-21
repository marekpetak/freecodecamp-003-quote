(function() {
  'use strict';

  angular
    .module('App', [])
    .controller('AppController', ['$scope', 'DataService',
      function($scope, DataService) {
        $scope.quote = {
          text: 'empty text',
          author: 'empty'
        };

        $scope.newQuote = function() {
            DataService.getQuote(function(data, error) {
              if(error){
                console.log(error);
              }
              else {
                $scope.quote = data;
              }
            });
        }
      }
    ])
    .service('DataService', [
      function() {
        var _dataServiceFactory = {};

        function _getQuote(callback) {
          var test = {
            text: "bla bla bla bla bla bla bla bla bla",
            author: "Humpty Dumpty"
          }

          if(callback){
            callback(test, null);
          }
        }

        _dataServiceFactory.getQuote = _getQuote;

        return _dataServiceFactory;
      }
    ]);

})();
