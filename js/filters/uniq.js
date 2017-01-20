
// Unique filter

widgets.filter('uniq', [function() {

  return function(collection, key) {
    return _.uniqBy(collection, key);
  };

}]);
