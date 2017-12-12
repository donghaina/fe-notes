function fabonicci(n) {
  var fab = [1, 1];
  for (var i = 2; i < n; i++) {
    fab[i] = fab[i-1]+fab[i-2];
  }
  return fab;
}

console.log(fabonicci(10));

