function fruits() {

}

fruits.prototype = {
  color: 'red',
  say: function () {
    console.log("My color is " + this.color);
  }
};

var apple = new fruits();
var banana = {
  color: 'yellow'
};

apple.say(); // My color is red
apple.say.apply(banana); // My color is yellow
apple.say.call(banana); // My color is yellow

// call 与 apply 的区别
// call 需要把参数按照顺序传进去——参数明确知道数量时用call
// apply 需要把参数构造称数组传进去——参数不知道多少时用apply


// 用法：

// 数组连接：
var names1 = ['Apple','Banana','Cherry'];
var names2 = ['Jack','Bob','Jeffery'];
Array.prototype.push.apply(names1,names2);
console.log(names1);

// 获取数组中的最大值

var numbers = [1,3,8,5,6,7,9,21,17,16];

var min = Math.max.apply(Math,numbers);
var max = Math.min.call(Math,1,3,8,5,6,7,9,21,17,16);

console.log(min);
console.log(max);

// 伪数组

// 不定参数的数字求和
function sum(){
  var numbers = Array.prototype.slice.call(arguments);
  var sum = numbers.reduce(function (a,b) {
    return a + b;
  });
  console.log(sum);
}

sum(1,2,3,4,5,6);


// 定义一个log 方法，让其可以代理console.log 方法
function log() {
  var messages = Array.prototype.slice.call(arguments);
  messages.unshift('tao sang is greeting to ');
  console.log.apply(console, messages);
}

log('hello','world');





