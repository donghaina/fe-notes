function ArrayList() {
  var array = [];
  var swap = function (index1,index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };
  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.join();
  };

  this.bubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  }
}

