(function () {
    'use strict';
    angular.module('map')
            .controller('mapCtrl', mapController);

    function mapController() {
        // Provide your access token
        var accessToken = L.mapbox.accessToken = 'pk.eyJ1IjoicmF2aTkxNjIiLCJhIjoiY2lrd2o4MTU3MDBranU0bTN1ZnZ2YnlrbCJ9.iJxpx4f9mFOKBLN12YIcPw';
        // Create a map in the div #map
        var Map = L.mapbox.map('map', 'mapbox.streets');
    }
})();

