app.controller('SearchController', ['$scope', '$http', function($scope, $http) {
	$scope.artist = '';
	$scope.getArtists = function() {
		$http.get('https://api.spotify.com/v1/search?q=%22' + $scope.artist + '%22&type=artist')
		.then(function(response) {
			$scope.artists = response.data.artists.items;
			$scope.errorMsg = '';
		}, function(response) {
			$scope.artists = '';
			$scope.errorMsg = response.error.message;
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