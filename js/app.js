
// Widgets app

var widgets = angular.module('widgets', []);

// Widgets controller

widgets.controller('RestaurantCtrl', ['$scope',
  function($scope) {
    $scope.restaurants = [];

    $scope.processForm = function(form) {
      var restaurantData = {};
      restaurantData.name = form.name;
      restaurantData.foodType = form.foodType;
      restaurantData.imageUrl = form.imageUrl;
      $scope.restaurants.push(restaurantData);
    }

    $scope.deleteRestaurant = function(restaurant) {
      for (var i = 0; i < $scope.restaurants.length; i++) {
        if ($scope.restaurants[i] === restaurant) {
          $scope.restaurants.splice(i, 1);
          return;
        }
      }
    }
  }
]);
