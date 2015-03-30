(function() {
    var app = angular.module("myApp", []);

    app.controller("productsCtrl", ['$scope', '$http', function($scope, $http) {

        $http.get('./colores.json').success(function(data){
            $scope.colores = data;
        });
        $http.get('./productos.json').success(function(data){
            $scope.productos = data;
        });

        $scope.color = function(i){
            return {'background-color': i.color};
        }
    }]);
})();




