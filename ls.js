const fs = require('fs');

// let getFiles = fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//         throw err
//     } else {
//         process.stdout.write(files.join('\n'))
//         process.stdout.write('prompt > ')
//     }
// });

let ls = process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    if (cmd === 'ls'){
        process.stdout.write(
            fs.readdir('./', 'utf8', (err, files) => {
                if (err) {
                    throw err
                } else {
                    process.stdout.write(files.join('\n'))
                    process.stdout.write('prompt > ')
                }
            })
        );
    }
    process.stdout.write('\nprompt > ');
});

module.exports = ls;