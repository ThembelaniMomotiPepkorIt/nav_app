angular.module('starter.controllers', ['ionic', 'ngCordova'])

/*
.controller('NavCtrl',function($scope, $ionicLoading, $compile){
	var myLatLng;
	function initialize(){

		navigator.geolocation.getCurrentPosition(function(position){
			
			var myLat = position.coords.latitude;
			var myLong = position.coords.longitude
			console.log(myLat);
			console.log(myLong);
			
			mapCenter = new google.maps.LatLng(myLat, myLong);

			console.log(mapCenter);
			
			var mapOptions = {
				center : mapCenter,
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById("map"), mapOptions);

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Your Pos'
			});


			$scope.map = map;
			console.log(map);
		})
	}
	//google.maps.event.addDomListener(window, 'load', initialize);
	ionic.Platform.ready(initialize);
	
});
*/



.controller('NavCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 	var myLat = position.coords.latitude;
	var myLong = position.coords.longitude
	console.log(myLat);
	console.log(myLong);
    
    var latLng = new google.maps.LatLng(myLat, myLong);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 	
 	google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 		var marker = new google.maps.Marker({
 			map: $scope.map,
 			animation: google.maps.Animation.DROP,
 			position : latLng
 		});
 	})

  }, function(error){
    console.log("Could not get location");
  });
})



