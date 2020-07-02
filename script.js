var fs = require('fs');
var files = fs.readdirSync('/images/');

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<path + img>';
    document.getElementById('image').src = imgStr;
}

