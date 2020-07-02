var fs = require('fs');
var files = fs.readdirSync('/images/');

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<path + img>';
    document.getElementById('image').src = imgStr;
}

function uploadImages() {

let photo = document.getElementById("image-file").files[0];  // file from input
let req = new XMLHttpRequest();
let formData = new FormData();

formData.append("photo", photo);                                
req.open("POST", '/images/image');
req.send(formData);

}