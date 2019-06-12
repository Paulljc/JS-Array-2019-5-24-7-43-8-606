// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(Array.isArray(a))
console.log(Array.isArray(b))

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
let newarr = []
a.forEach(item => {
  item = item * 2;
  newarr.push(item)
});
console.log(newarr);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function a(param) {
  var str = "";
  switch (param) {
    case 1:
      str = colors.join(" ");
      console.log(str);
      break;
    case 2:
      str = colors.join("+");
      console.log(str);
      break;
    case 3:
      str = colors.join(",");
      console.log(str);
      break;
    default:
  }
}
a(1);
a(2);
a(3);

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b) {
    return b - a;
})
console.log(a);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function maxElement(arr) {
  let elm,
    num = 1;
  let obj = arr.reduce(function(arr, val) {
    arr[val] ? arr[val]++ : (arr[val] = 1);
    if (arr[val] > num) {
      elm = val;
      num++;
    }
    return arr;
  }, {});
  return elm;
}
console.log(maxElement(a));
