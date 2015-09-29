angular
  .module('editor')
  .controller('IndexController', function($scope, supersonic) {
    var deferred = $q.defer();
    var dependencies =
    [
        'jquery-2.1.4.min.js',
        'annotator-full.min.js'
    ];
 

    
    // Load the dependencies
    $script(dependencies, function()
    {
        // all dependencies have now been loaded by so resolve the promise
        $rootScope.$apply(function()
        {
            deferred.resolve();
        });
    });
    
    return deferred.promise;
    
    
});

//$(function(){
//  $( "body" ).bind( "taphold", tapholdHandler );
//    
//  
//function tapholdHandler( event ){
//    event.preventDefault();
//      throw new Error("taphold");
//    }
    //});


//    $("body").bind('taphold', function(event) {
//        event.preventDefault();
//        throw new Error("taphold");
//    });



    jQuery(function ($) {
        $('#content').annotator();     
        throw new Error("annotator runs");
    });