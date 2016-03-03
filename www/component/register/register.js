(function() {
    'use strict';
    angular.module('beerLocator').controller('registerCtrl', function($scope,$state,timeStorage, ajaxRequest, $ionicLoading) {
        $scope.user = {
            email: '',
            name: '',
            password: '',
            repassword: ''
        }
        $scope.signup = function() {
            if (!$scope.user.name) {
                console.log('please enter user name');
            }
            else if (!$scope.user.email) {
                console.log('please enter email');
            }
            else if (!$scope.user.password) {
                console.log('please enter password');
            }
            else if (!$scope.user.repassword) {
                console.log('please enter re password');
            }
            else if ($scope.user.password == $scope.user.repassword) {
                console.log('ok')
                var data = {
                    'm': $scope.user.email,
                    'm1': $scope.user.password,
                    'm2': $scope.user.name
                };
                var api = 'registration.php';

                var promise = ajaxRequest.send(api, data);
                promise.then(function(data2) {
                    console.log(data2);
                    if (data2.msg == "success") {
                        timeStorage.set('login',data2,100);
                        $state.go('menu.home');
                    }
                    else{
                        console.log('please enter correct');
                    }

                });

            }

            else {
                console.log('please enter same password');
            }
        }
    });
})();