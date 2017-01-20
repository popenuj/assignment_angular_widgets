
//  Instragram controller

widgets.controller('PhotosCtrl', ['$scope', '$window',
  function($scope, $window) {
    $scope.photoData = $window.instaParser($window.instagramResponse);
  }
]);
