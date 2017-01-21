
//  Instragram controller

widgets.controller('PhotosCtrl', ['$scope', '$window',
  function($scope, $window) {
    $scope.currentPage = 1;
    $scope.resultsPerPage = 12;
    $scope.totalPages;
    $scope.photoData = $window.instaParser($window.instagramResponse);
    $scope.getNumberOfPages = function() {
      $scope.totalPages = Math.ceil($scope.photoData.length/$scope.resultsPerPage)
      return new Array($scope.totalPages);
    }
    $scope.tags = $window.getTags($scope.photoData);
    $scope.goPrevious = function() {
      if ($scope.currentPage > 1) { $scope.currentPage -= 1 }
    }
    $scope.goToPage = function($event) {
      $scope.currentPage = $event.target.innerHTML;
    }
    $scope.goNext = function() {
      if ($scope.currentPage < $scope.totalPages) { $scope.currentPage += 1 }
    }
    console.log($scope.results)
  }
]);
