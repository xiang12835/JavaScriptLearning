/* js数组与字符串的相互转换 */


// 一、数组转字符串
// 需要将数组元素用某个字符连接成字符串，示例代码如下：

var a, b, c;
a = new Array(a,b,c,d,e);
b = a.join('-'); //a-b-c-d-e  使用-拼接数组元素
c = a.join(''); //abcde


// 二、字符串转数组
// 实现方法为将字符串按某个字符切割成若干个字符串，并以数组形式返回，示例代码如下：

var s = 'ab+c+de';
var a = s.split('+'); // [ab, c, de]
var b = s.split(''); //[a, b, +, c, +, d, e]
