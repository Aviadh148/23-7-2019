module.controller("calcCtrl", CalcCtrl)

function CalcCtrl($scope) {
    $scope._first= 0
    $scope._action= '+'
    $scope._second= 0
    $scope._result= 0
    $scope.result = function (){
    switch($scope._action){
        case '+':
            $scope._result= $scope._first + $scope._second
            break
        case '-':
                $scope._result= $scope._first - $scope._second
                break
        case '*':
                $scope._result= $scope._first * $scope._second
                break
        case '/':
                $scope._result= $scope._first / $scope._second
                break;    
        default:
                $scope._result= "error"
                break; 
    }
}
}