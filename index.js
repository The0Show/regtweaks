console.clear()

var Image = require('ascii-art-image');
const cliProgress = require('cli-progress');
 
var image = new Image({
    filepath: './Icon1.ico',
    alphabet:'variant4'
});

image.write(function(err, rendered){
    console.log(rendered);
    console.log('Registry Tweaks')
})