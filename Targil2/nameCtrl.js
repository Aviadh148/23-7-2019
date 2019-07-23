module.controller("nameCtrl", NameCtrl)

function NameCtrl($scope) {
    $scope.$watch('_name', function(name){
        if(name === "aviad" || name === "AVIAD" || name === "Aviad"){
            setTimeout(function(){
                alert("That's my name!")
            },100)
        }
    })
}