function getSevenCol(arr){
  var n = 0;
  for (var i = 0; i < arr.length; i++) {
    while(arr[i] !== 0){
      var dig = arr[i] % 10;
      arr[i] = Math.trunc(arr[i]/10);
      if(dig === 7)
        n++;
    }
  }
  return n;
}

function  arrToStr(arr){
  var str = "";
  var start = 0;
  var end = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
      str += arr[end--];
    }else{
      str += arr[start++];
    }
  }
  return str;
}

console.log(getSevenCol([1, 7, 4, 77, 73])); // 4
console.log(arrToStr(["a", "b", "c", "d", "e", "f"])); // "afbecd"
