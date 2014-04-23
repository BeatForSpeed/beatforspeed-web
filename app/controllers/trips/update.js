'use strict';

var songs = [
  '2res3Ptlahsu1kh5XtFhu4',
  '31AyUvMRDvZjyQI1N05lsT',
  '7e5EPkc1TcBoFyTQHanK6G',
  '1iTlOqIrZy8DlvCPJY2sjS'
];

var cur = 0;

module.exports = function (req, res, next) {  
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