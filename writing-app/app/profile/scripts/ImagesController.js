angular
  .module('profile')
  .controller('ImagesController', function($scope, supersonic) {
    $scope.image = [{
        src: 'app/profile/images/profile.png'
    }];
  });
