/*
* call/apply/bind 都是用来改变函数的this指向的
* call 和 apply 的区别在于参数是否是确定个数
* call、apply 和 bind 的区别在于前两者是立即执行的，而后者是返回函数，调用时才执行
* */


var obj = {
  x:80
};

var foo = {
  getX : function () {
    return this.x
  }
};

console.log(foo.getX.call(obj)); // 80
console.log(foo.getX.apply(obj));  // 80
console.log(foo.getX.bind(obj)());   // 80
