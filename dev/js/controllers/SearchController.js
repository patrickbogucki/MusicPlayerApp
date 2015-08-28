app.controller('SearchController', ['$scope', '$http', function($scope, $http) {
	$scope.artist = '';
	$scope.getArtists = function() {
		return $http.get('https://api.spotify.com/v1/search?q=%22' + $scope.artist + '%22&type=artist')
         .success(function(data) {
           $scope.artists = data.artists.items;
           $scope.errorMsg = '';
         })
         .error(function(err) {
         	$scope.artists = '';
           $scope.errorMsg = err.error.message;
         });
	};


	$scope.remove = function($event) {
		// console.log($index);
		// $scope.artists.splice($index, 1);
		 console.log(event.target.className);

	};

	function hi() {
		console.log('hi');
	}

}]);