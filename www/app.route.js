(function () {
    'use strict';
    angular
            .module('beerLocator')
            .config(routeConfig);
    /** @ngInject */
    function routeConfig($urlRouterProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/frontPage');
//        $stateProvider
//                .state('beer', {
//                    url: "/Frontpage",
////                    abstract: true,
//                    cache: true,
//                    templateUrl: "component/home/home.html",
//                    controller: 'loginCtrl'
//                })
    }
})();