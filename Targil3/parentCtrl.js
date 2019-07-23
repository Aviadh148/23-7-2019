
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]
    $scope.ord=""
    $scope.edi=""

    $scope.order = function(f){
        $scope.ord= f
    }

    $scope.add = function() {
        if($scope.mod != undefined && $scope.col != undefined && $scope.pri != undefined){
            $scope.devices.push(new Mobile({model: $scope.mod, color: $scope.col, price: $scope.pri}))
        }
    }

    $scope.remove = function(i) {
        $scope.devices.splice(i,1)
    }

    $scope.edit = function() {
        if($scope.edi != undefined && $scope.mod != undefined && $scope.col != undefined && $scope.pri != undefined){
            $scope.devices[parseInt($scope.edi)]= {model: $scope.mod, color: $scope.col, price: $scope.pri}
        }
    }
}
