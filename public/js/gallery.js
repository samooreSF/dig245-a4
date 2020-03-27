let fs = require('fs');

let imageFileNames = fs.readdirSync('./images');

function renderTemplate(contents) {
  return `
<!DOCTYPE html>
<html>
  <style>
    .gallery {
      margin: 10px 50px;
    }
    .gallery img {
      width: 230px;
      padding: 5px;
    }
  </style>
  <head>
    <title>A website!</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <header id="page-header">
      <h1>StoryBoard Rick and Morty</h1>
    </header>
    <div class="gallery">${contents}</div>
    <p>
      Coming soon™.
    </p>
  </body>
</html>
`;
}

function imgTag(src) {
  return `<img src="${src}" alt = "animation"> `;
}

function anchorTag(href, contents) {
  return `<a href="${href}">${contents}</a>`
}

function imgLink(src) {
  return anchorTag(src, imgTag(src));
}

function liTag(contents) {
  return `<li>${contents}</li>\n`;
}

let outputFileName = process.argv[2];

let contents = '';
let substring = '.png';
for (let i = 0; i < imageFileNames.length; i++) {
  if(imageFileNames[i].includes(substring)) {
  contents += imgLink(`images/${imageFileNames[i]}`);
  // console.log(contents);
  }
}

// contents += liTag(imgLink('images/photo_31.jpg'));
// contents += liTag(imgLink('images/photo_443.jpg'));
// contents += liTag(imgLink('images/photo_525.jpg'));

let htmlDocument = renderTemplate(contents);

if (outputFileName === undefined) {
  console.log(htmlDocument);
} else {
  fs.writeFileSync(outputFileName, htmlDocument);
}

// var myFunction = function() {
//   $('#more').load('https://www.dropbox.com/home/SMoore/images);
// };

// var timer =  setInterval(myFunction, 1000); // call every 1000 milliseconds

// process.exit();
