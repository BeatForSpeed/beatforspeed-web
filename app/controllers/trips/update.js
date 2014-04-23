'use strict';

var songs = [
  '2res3Ptlahsu1kh5XtFhu4',
  '31AyUvMRDvZjyQI1N05lsT',
  '7e5EPkc1TcBoFyTQHanK6G',
  '1iTlOqIrZy8DlvCPJY2sjS'
];

var cur = 0;

module.exports = function (req, res, next) {
  var result = req.body;
  console.log(req.body.tripToken, req.body.speed);

  // if ("true" !== req.body.new) {
  //   res.send(result);
  // } else {
    result.songID = songs[cur];
    res.send(result);

    if (++cur >= songs.length) cur = 0;
  // }
};
