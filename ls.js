const fs = require('fs');

let getFiles = function() {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err
        } else {
            //process.stdout.write('\n')
            process.stdout.write(files.join('\n'))
            //process.stdout.write('\n')
            process.stdout.write('\nprompt > ')
        }
    });
}

module.exports = getFiles;