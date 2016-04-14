app.controller('Route', function($scope, $ionicSideMenuDelegate, $rootScope, $ionicBackdrop, $state, $localstorage) {

  $scope.$watch(function(){return $state.current.name;}, function(v){
    $scope.view(v);
  });

  alert('ola');

});
