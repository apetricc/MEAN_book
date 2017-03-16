console.log('Starting in ' + process.cwd());

try {
    process.chdir('/home/aj');
} catch (error) {
    console.error('chdir: ' + error.message);
}

console.log('Current working dir is now: ' + process.cwd());
