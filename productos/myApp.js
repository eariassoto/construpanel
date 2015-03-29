(function() {
    var app = angular.module("myApp", []);

    app.controller("productsCtrl", ['$scope', '$http', function($scope, $http) {
        $http.get('./productos.json').success(function(data){
            console.log("got it", data);
            $scope.productos = data;
        });
    }]);
})();




