app.factory('artistAlbums', ['$http', '$routeParams', function($http) {
  console.log($routeParams.name);
  return $http.get('https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR/albums?market=US&limit=50')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);