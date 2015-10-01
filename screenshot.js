var Nightmare = require('nightmare');
var path = require('path');

var config = {
  resolution: [1920, 1080],
  src: 'file://' + path.join(__dirname, 'src', 'index.html'),
  dest: path.join(__dirname, 'build', 'title.png')
};


new Nightmare()
  .viewport(config.resolution[0], config.resolution[1])
  .goto(config.src)
  .screenshot(config.dest)
  .run(function(err) {
    if (err) { console.error(err); }
    else { console.log('Generated Screenshot: ', config.dest); }
    process.exit();
  });
