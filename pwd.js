module.exports = pwd;


const pwd = function () {
    
    
    process.stdin.on('data', (data) => {
    
    const cmd = data.toString().trim();
    
    if (cmd === 'pwd'){
        
        process.stdout.write(__dirname);
        
    }
    
    process.stdout.write('\nprompt > ');
}) 
}