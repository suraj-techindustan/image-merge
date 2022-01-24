const express = require('express');
const app = express();
const Port =3000

const {joinImages} =require('join-images') 
const fs = require('fs');
const request = require('request');


const download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body){    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', './images/Upper.jpeg', function(){
  console.log('done');
});


download('https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg', './images/Lower.jpeg', function(){
  console.log('done');
});


const frontImage = './images/Lower.jpeg' || ""
const backImage = './images/Upper.jpeg' || ""


joinImages([frontImage, backImage]).then((img) => {
   
    img.toFile('./result/out.png');
    console.log('image saved')
  });



app.get('/images',(req,res)=>{
  imgDownload()
  console.log("images downloaded");

  imageMerge()
console.log("images merge");


})


app.listen(Port,()=>{console.log("Listening To Port : ",Port)})