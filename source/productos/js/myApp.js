(function() {
    var app = angular.module("myApp", []);

    app.controller("productsCtrl", ['$scope', '$http', function($scope, $http) {

        $http.get('../assets/data/colores.json').success(function(data){
            $scope.colores = data;
        });
        $http.get('../assets/data/productos.json').success(function(data){
            $scope.productos = data;
        });

        $scope.color = function(i){
            return {'background-color': i.color};
        };

        $scope.busqueda = function (p){
            if(!$scope.query){
                return true;
            }else{
                return (p.nombre.indexOf($scope.query)!=-1 || p.descripcion.indexOf($scope.query)!=-1);
            }
        };
    }]);
})();




