console.log('one event cycle');

setTimeout(function() {
    console.log('different event cycle');
}, 100);

console.log('same cycle');