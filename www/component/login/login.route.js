(function () {
    'use strict';
    angular.module('beerLocator').config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $stateProvider
                .state('login', {
                    url: '/login',
//                    views: {'mainView': {
                            templateUrl: 'component/login/login.html',
                            controller: 'loginCtrl'
//                        }}


                });

    });
})();


