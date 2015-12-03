var blog = angular.module('blog',['ngRoute']);

    function BlogController($scope){
      $scope.blogs =  [
        {id:1,
        title:'First Blog Post on My New Angular Blog Site',
        post:'Welcome to my blog!!! I have been focusing a lot on JavaScript lately so the following posts might be heavy in JS. Today I am going to talk about .sort()...',
        date:'12/1/15'}
      ]
    };

    blog.controller('BlogController',BlogController);

    blog.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
          controller:'BlogController',
          templateUrl:'home.html'
        })
        .when('/post1',{
          controller:'BlogController',
          templateUrl:'partials/post1.html'
        })
        .otherwise({ redirectTo:'/'});
    });