let funcStore = {};

funcStore.pwd = require('./pwd.js');
funcStore.ls = require('./ls.js');

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    if (funcStore.hasOwnProperty(cmd)){
        funcStore[cmd]();
    } else {
        process.stdout.write('ERROR INVALID COMMAND');
    }
    process.stdout.write('\nprompt > ');
});

process.stdout.write('prompt > ');


