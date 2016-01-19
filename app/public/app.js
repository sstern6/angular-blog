var blog = angular.module('blog',['ngRoute'])

// Basic Directive for home button
  angular.module('blog').directive('nav', function () {
    return {
        restrict:'CE', //Class and Elements
        templateUrl: 'nav.html'
    };
});

    function BlogController($scope,$location,commentService){
      $scope.blogs =  [
        {id:1,
        subject:'JavaScript',
        score: 0,
        title:'First Blog Post on My New Angular Blog Site',
        post:'Welcome to my blog!!! I have been focusing a lot on JavaScript lately so the following posts might be heavy in JS. Today I am going to talk about .sort()...',
        date:'12/1/15'},
        {id:2,
        subject:'JavaScript',
        score:0,
        title:'Javascript',
        post:'blah blah blah',
        date:'1/17/16'},
        {id:3,
        title:'Ruby',
        score:0,
        subject:'Ruby',
        post:'blah blah blah',
        date:'1/17/16'},
        {id:4,
        title:'SQL Server',
        score:0,
        subject:'SQL',
        post:'blah blah blah',
        date:'1/17/16'}

      ],
      $scope.addNewComment = function(){
          commentService.addComment($scope.comment)
      },

      $scope.focus = function($event){
        var id = $event.target.id;
      },

      $scope.go = function(path){
        $location.path(path)
      }
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


// Factory/Service for inclusion in a specifc controller to add functionality
    blog.service('commentService',function($http){

      var addComment = function(comment){
        $http({
          method:"post",
          url:'/',
          data:{"comment":comment}
        })
      }

      return({
        addComment:addComment
      });
    })









