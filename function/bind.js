var bar = function () {
  console.log(this.x);
};

var foo = {
  x: 3
};

bar(); // undefined
/*
* 当 func 被创建的时候， this 会指向 foo, 那么this.x = foo.x
* */
var func = bar.bind(foo);
func(); // 3


/*
* 多次bind 无效
* */

var sed = {
  x: 4
};

var func = bar.bind(foo).bind(sed);
func(); // 3

var fiv = {
  x: 5
};

var func = bar.bind(foo).bind(sed).bind(fiv);
func(); //3

