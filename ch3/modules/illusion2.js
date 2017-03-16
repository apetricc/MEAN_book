setInterval(function() {
    console.log('Task A');
}, 10);

setInterval(function() {
    while(true) ;
    console.log('Task B');
}, 15);
//if task A were on a separate thread it would continue to
//execute while task B goes into a loop