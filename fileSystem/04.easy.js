/*
* 简单文件写入
* */
var fs=require("fs");
//异步
fs.writeFile("hello3.txt","这是异步",function (err) {
	if(!err){
		console.info("写入成功");
	}
});



//同步
fs.writeFileSync("hello4.txt","这是同步")