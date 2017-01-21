var instaParser = function(photosObject) {
  var dataArray = photosObject.data;
  var returnArray = [];

  dataArray.forEach(function(dataSet) {
    returnArray.push({
      photoUrl: dataSet.images.low_resolution.url,
      instagramUrl: dataSet.link,
      username: dataSet.user.username,
      userUrl: "https://www.instagram.com/" + dataSet.user.username,
      time: getDate(dataSet.created_time),
      likeCount: dataSet.likes.count,
      commentCount: dataSet.comments.count,
      photoFilter: dataSet.filter,
      tags: dataSet.tags
    })
  })

  return returnArray;
};

var getDate = function(epoch) {
  var utcSeconds = parseInt(epoch);
  var date = new Date(0);
  date.setUTCSeconds(utcSeconds);
  return date;
};

var getTags = function(photoData) {
  var tags = [];
  photoData.forEach(function(dataSet) {
    dataSet.tags.forEach(function(tag) {
      tags.push(tag);
    })
  })
  return tags;
}
