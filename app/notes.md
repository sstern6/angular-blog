<!-- First: Search Functionality -->
  -User input and manipulation with 2 way data binding.
  -Blogs: ng-repeat from my initial blogs object from within the controller
    -Alternatives: make database call via request
  -Linking:  Choose to use 2 way data binding instead of using the a href helpers.
    -Being able to pass in parameters is super powerful with respect to event handlers(routes, options, ect)
  -$routeProvider: allows for easy routing to asociate a specific controller and template to that route(even though its SPA)
  -Used an AJAX call to post a comment using 2 way data binding:
    -First had an event handler that called a function on Form Submit, then addNewComment()was called, which called on the comment service and bound $scope.commment to allow the comment to be transferred into the DB.
  -Made a directive from scratch, can be useful for addons or navigation menus.

  ng-model: input data binding
  ng-controller:extract logic from view into controller

<!-- Interesting Topics -->

  -Dependency Injection: ie Using $location and ng-storage($localStorage,$sessionStorage)
  -Promotes modularity and single responsibility -> 2 way data binding.
  -ng-view in index.html allows you to include stylesheets and libraries while keeping the app SPA.
  -Testing in Angular? Jasmine API,other dependencies

