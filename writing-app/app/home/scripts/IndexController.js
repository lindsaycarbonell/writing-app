angular
  .module('home')
  .controller('IndexController', function($scope, supersonic) {
        Parse.initialize("qLzYhfH37DNpbtCeUttsGO6yEaT6dVRNpy10gZzK", "DxpkbfCURfqlJ6Faq2ZxRbxvhl37dIFeykVDzm38");
    
$scope.submit = function() {
      supersonic.logger.info("loaded function");
          var user = new Parse.User();
            user.set("username", $scope.username);
            user.set("password", $scope.password);
            user.set("email", $scope.email);

            // other fields can be set just like with Parse.Object
            user.set("phone", "650-555-0001");

            supersonic.logger.info(user);
            user.signUp(null, {
              success: function(user) {
                // Hooray! Let them use the app now.
                supersonic.logger.info("user added");
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                supersonic.logger.error("Error: " + error.code + " " + error.message);
              }
    });

    }

$scope.testDataConnection = function(){
      supersonic.logger.info("data connect started.");
      var TestObject = Parse.Object.extend("TestObject");
      //supersonic.logger.info(TestObject);
      var testObject = new TestObject();
        testObject.save({foo: "bar"}).then(function(object) {
          supersonic.logger.info("data connect worked.");
});
    }

$scope.createUser = function(){

      var user = new Parse.User();
        user.set("username", "Name 2");
        user.set("password", "my pass");
        user.set("email", "email2@example.com");

        // other fields can be set just like with Parse.Object
        user.set("phone", "650-555-0001");

        user.signUp(null, {
          success: function(user) {
            // Hooray! Let them use the app now.
            supersonic.logger.info("user added");
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            supersonic.logger.error("Error: " + error.code + " " + error.message);
          }
        });




    }

            
            

  });
