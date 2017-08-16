


var app=angular.module("app",["ngRoute","ngSanitize"]).config(function($routeProvider){
     $routeProvider.when("/",{
     	templateUrl:"typ/index-list.html",
     	controller:"index-list"
     }).when("/list/:id",{
     	templateUrl:"typ/list.html",
     	controller:"list"
     }).when("/show/:id",{
     	templateUrl:"typ/show.html",
     	controller:"show"
     })
})
app.controller("nav",function($scope,$http){
        $http({
            url:"php/api.php?url=http://news-at.zhihu.com/api/4/themes"
        }).then(function(data){
          $scope.data=data.data.others
        })
})
app.controller("index-list",function($scope,$http){
        $http({
            url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/latest"
        }).then(function(data){
          $scope.data=data.data
          // console.log($scope.data)
        })
})
app.controller("list",function($scope,$http,$routeParams){
        var id=$routeParams.id;
        $http({
              url:"php/api.php?url=http://news-at.zhihu.com/api/4/theme/"+id
        }).then(function(data){
          $scope.data=data.data
          // console.log($scope.data)
        })
})
app.controller("show",function($scope,$http,$routeParams){
        var id=$routeParams.id;
        $http({
             url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/"+id
        }).then(function(data){
          $scope.show=data.data
          console.log($scope.show)
        })
})

