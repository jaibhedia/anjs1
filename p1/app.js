angular.module('fullNameApp', [])
    .controller('FullNameController', function($scope) {
        $scope.displayFullName = function() {
            if ($scope.firstName && $scope.lastName) {
                $scope.fullName = $scope.firstName + ' ' + $scope.lastName;
            } else {
                $scope.fullName = '';
            }
        };
    });


