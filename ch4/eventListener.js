var counter = new Counter();

counter.on('start', function() {
    console.log('start event');
});

counter.on('count', function(count) {
    console.log('count = ' + count);
});

counter.start();