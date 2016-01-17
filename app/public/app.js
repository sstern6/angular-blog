var blog = angular.module('blog',['ngRoute'])

    function BlogController($scope,$location,commentService){
      $scope.blogs =  [
        {id:1,
        subject:'JavaScript',
        title:'First Blog Post on My New Angular Blog Site',
        post:'Welcome to my blog!!! I have been focusing a lot on JavaScript lately so the following posts might be heavy in JS. Today I am going to talk about .sort()...',
        date:'12/1/15'},
        {id:2,
        subject:'JavaScript',
        title:'Javascript',
        post:'blah blah blah',
        date:'1/17/16'},
        {id:3,
        title:'Ruby',
        subject:'Ruby',
        post:'blah blah blah',
        date:'1/17/16'},
        {id:4,
        title:'SQL Server',
        subject:'SQL',
        post:'blah blah blah',
        date:'1/17/16'}

      ],
      $scope.addNewComment = function(){
          commentService.addComment($scope.comment)
      }

      $scope.focus = function($event){
        var id = $event.target.id;
      }

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


    blog.service('commentService',function($http,$q){

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

    // angular.module('homeDirective',[])
    // .controller('homeDirectiveController',['$scope','$location',function($scope){
    //   $scope.phrases = {
    //     one:"hello"
    //   }

    // }])
    // .directive('goHome',function(){
    //   return{
    //     template:"{{phrases.one}}"
    //   }
    // })








