var example = angular.module('starter', ['ionic', 'ngSanitize']);
 
example.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
 
example.controller("ExampleController", function($scope) {
    $scope.myHTML = 'Want some more information then <a href="https://www.google.com/">Google</a> here';
});