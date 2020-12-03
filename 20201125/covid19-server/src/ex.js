var arr = ['eat', 'tea', 'tan', 'ate', 'nat', "bat"];//定义arr数组内容
var ar = [];                                     //定义str为空字符串
var li = new Array();                               //定义数组li
let a = -1, b = -1;                                  //定义a,b的初值，为二维数组做准备
for (let i = 0; i < arr.length; i++) {
    a++;
    li[i] = new Array();            //定义一维数组li[]
    for (let j = 0; j < arr.length; j++) {
        //将arr数组的每一个字符串转换成字符串数组，分隔并排序，再转换成字符串，进行判断
        if (arr[i].split("").sort().toString() === arr[j].split("").sort().toString()) {
            b++;                                //使b的值等于相同字符串的长度
            li[a][b] = arr[j];                  //将有相同字母的字符放进二维数组li[][]
        } else {             //！！！如果arr[i]中的字符不等于ar[j]的字符，就将arr[j]放进数组ar。目的是清除已经判断过的数组内容
            ar.push(arr[j]);
        }
    }
    //！！通过判断数组长度，重新定义arr的内容
    if (arr.length >= ar.length) {
        arr.splice(0, arr.length);          //使arr数组内容清空
        //将ar中的内容存放进arr中
        for (let k = 0; k < ar.length; k++) {
            arr[k] = ar[k];
        }
    }
    b = -1;
}
console.log(li);
