
// Unique filter

widgets.filter('unique', ['_', function(_) {

  return function(collection, key) {
    return _.uniqBy(collection, key);
  };

}]);
