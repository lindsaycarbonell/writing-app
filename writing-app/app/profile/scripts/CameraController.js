angular
  .module('profile')
  .controller('CameraController', function($scope, supersonic) {
    
    $scope.getCamera = function(){
        var options = {
          quality: 50,
          allowEdit: true,
          targetWidth: 300,
          targetHeight: 300,
          encodingType: "png",
          saveToPhotoAlbum: true
        };
        supersonic.media.camera.takePicture(options).then( function(result){
          supersonic.ui.dialog.alert(result);
        });
    };

  });
