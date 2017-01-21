
// Unique array filter

widgets.filter('uniqElements', [function() {

  return function(collection) {
    return _.uniq(collection);
  };

}]);
