/*
* Buffer(缓冲区)
* 	-Buffer的结构和数组很像，操作的方法也和数组类似
*	-数组中不能存储二进制的文件，而Buffer就是专门用来存储二进制数据
*	-使用buffer不需要引入模块，直接使用即可
*	-在buffer中存储的二进制数据,但是在显示时，都是以16进制的形式显示的
*		-buffer中每个元素的范围是从00-ff（00000000-11111111）
*		-计算机中  一个0或者一个1  我们称为1位（bit）
*		-计算机中  一个0或者一个1  我们称为1位（bit）
*		-8bit=1byte(字节)
*		-1024byte=1kb
*		-buffer中一个元素，占用内存的一个字节
* */

var str="Hello 你好"

//将一个字符串保存到buffer中

var buf=Buffer.from(str);
// console.info(buf.length);  //占用内存的大小 12
// console.info(str.length);  //字符串的长度 8

//创建一个指定大小的buffer
//buffer 构造函数都是不推荐使用的
// var buf2 = new Buffer(10);//10个字节的buffer
//Buffer的大小一旦确定，则不能修改，buffer实际上是对底层内存的直接操作
var buf2=Buffer.alloc(10);
buf2[0]=88;
buf2[1]=255;
buf2[10]=16;
buf2[2]=0xaa;
buf2[3]=256;
//只要数字在控制台或页面中输出一定是10进制
// console.info(buf2[2].toString(16));//转换成16进制的字符串

// for(let i=0;i<buf2.length;i++){
// 		console.info(buf2[i]);
// }

//Buffer.allocUnsafe(size)创建一个指定大小的buffer，但是buffer中可能含有敏感数据

var buf3=Buffer.allocUnsafe(10);
// console.info(buf3);


var buf4=Buffer.from("我是一段文本数据");
// console.info(buf4.toString());//将缓冲区中的数据转换为字符串