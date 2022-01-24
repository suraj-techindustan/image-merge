// const fs = require('fs');
// const request = require('request');


// const download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){    
//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };

// download('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', '../images/Upper.jpeg', function(){
//   console.log('done');
// });


// download('https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg', '../images/Lower.jpeg', function(){
//   console.log('done');
// });


// exports.module = download