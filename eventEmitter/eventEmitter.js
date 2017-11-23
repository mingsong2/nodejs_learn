var events = require('events');
var eventEmitter  = new events.EventEmitter();

// 监听器1
var listener1 = function listener1(){
    console.log('监听器 listener1 执行');
}
// 监听器2
var listener2 = function listener2(){
    console.log('监听器 listener2 执行');
}

// 绑定connection时间
eventEmitter.addListener('connection',listern1);
