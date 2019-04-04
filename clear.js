// Delete Files
var glob = require('multi-glob').glob;
var fs = require('fs');

// Find files
glob(['**/Thumbs.db', '**/.DS_Store'], function(err, files) {
    if (err) throw err;
    files.forEach(function(item, index, array) {
        console.log(item + ' found');
    });

    // Delete files
    files.forEach(function(item, index, array) {
        fs.unlink(item, function(err) {
            if (err) throw err;
            console.log(item + ' deleted');
        });
    });
});
