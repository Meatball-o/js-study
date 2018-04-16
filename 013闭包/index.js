/**
 * Created by 丸子 on 2017/11/6.
 */
function wai() {
  var a=1;
  return function(){
    a=a+1;
    return a;
  }
}
var nei=wai();

console.log(nei());
console.log(nei());

