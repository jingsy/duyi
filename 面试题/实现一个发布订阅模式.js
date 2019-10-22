// 先来写订阅:

var PubSub = {}; var eventObj = {};
PubSub.subscribe = function (event, fn) {
    eventObj[event] = fn;
}
// 再来写个发布:

PubSub.publish = function (event) {
    if (eventObj[event]) eventObj[event]();
}
// 最后写一个退订:

PubSub.off = function (event, fn) {
    if (eventObj[event]) eventObj[event] = null;
}

PubSub.subscribe('event', function() { console.log('event release');
});
PubSub.publish('event'); 