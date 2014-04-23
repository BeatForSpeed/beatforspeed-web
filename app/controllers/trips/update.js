'use strict';

var songs = [
  '2res3Ptlahsu1kh5XtFhu4',
  '31AyUvMRDvZjyQI1N05lsT',
  '7e5EPkc1TcBoFyTQHanK6G',
  '1iTlOqIrZy8DlvCPJY2sjS'
];

var cur = 0;

module.exports = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (true !== req.body.new) {
    res.send({
      success: true
    });
  } else {
    res.send({
      success: true,
      songID: songs[cur]
    });

    if (++cur >= songs.length) cur = 0;
  }
};
