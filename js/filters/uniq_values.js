
// Unique object value filter

widgets.filter('uniqValues', [function() {

  return function(collection, key) {
    return _.uniqBy(collection, key);
  };

}]);
