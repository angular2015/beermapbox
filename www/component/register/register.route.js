(function () {
    'use strict';
    angular.module('beerLocator').config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $stateProvider
                .state('register', {
                    url: '/register',
//                    views: {'mainView': {
                            templateUrl: 'component/register/register.html',
                            controller: 'registerCtrl'
//                        }}


                });

    });
})();


