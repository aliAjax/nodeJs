
/*
	通过npm下载的包都放在node_modules文件中
	node在使用模块名字来引入模块时，它会首先在当前node_modules中寻找是否含有该模块
		如果有则直接使用，如果没有则在上一级node_modules中寻找
		直到找到磁盘的根目录，如果没有，则会报错
*/
var math=require("math");
var express=require("express");
console.info(math.add(123,456));