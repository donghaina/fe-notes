function recursive(n) {
  if(n<=1){
    return 1;
  }else{
    // console.log(n+'*'+recursive(n-1),n*recursive(n-1));
    return n*recursive(n-1);
  }
}

console.log(recursive(5));