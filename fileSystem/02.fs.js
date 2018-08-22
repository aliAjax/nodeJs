/*
*
* 	文件系统（File System）
* 			-简单来说就是通过Node来操作系统中的文件
* 			-使用文件系统，需要先引入fs模块，fs是核心模块，直接引入
* 			-可选择同步和异步
*
*
* 	同步文件的写入
*
* 		-手动操作的步骤
* 			1.打开文件
* 				fs.openSync(path,flags[,mode])
* 					-path要打开文件的路径
* 					-flags打开文件要做的操作的类型
* 						r 只读的
* 						w 可写的
*					-mode 设置文件的操作权限，一般不传
*				返回值：
*					-该方法会返回以一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
*					
*
*
*
* */

var fs=require("fs");
//打开文件
var fd = fs.openSync("hello.txt","w");
// console.info(fd);
//写入内容
fs.writeSync(fd,"hahaha~~~~");
//关闭文件
fs.closeSync(fd);

