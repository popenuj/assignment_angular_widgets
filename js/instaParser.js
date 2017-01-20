var instaParser = function(photosObject) {
  var dataArray = photosObject.data;
  var returnArray = []

  this.getDate = function(epoch) {
    var utcSeconds = parseInt(epoch);
    var date = new Date(0);
    date.setUTCSeconds(utcSeconds);
    return date
  }

  dataArray.forEach(function(dataSet) {
    returnArray.push({
      photoUrl: dataSet.images.low_resolution.url,
      username: dataSet.user.username,
      // time: instaParser.getDate(dataSet.created_time),
    })
    console.log(this.instaParser.getDate)
  })

  return returnArray;
};
