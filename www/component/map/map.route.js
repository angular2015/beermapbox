(function() {
    'use strict';
    angular.module('map')
            .config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log('hello');
        $stateProvider
                .state('menu.map', {
                    url: "/menu/map",
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: "component/map/map.html",
                            controller:'mapCtrl'
                        }
                    }
                });
    }
})();