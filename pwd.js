let pwd = process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    if (cmd === 'pwd'){
        process.stdout.write(__dirname);
    }
    process.stdout.write('\nprompt > ');
});

module.exports = pwd;