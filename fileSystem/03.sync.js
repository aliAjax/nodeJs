/*
* 
*
* */


//引入fs模块
var fs=require("fs");
//打开文件
fs.open("hello.txt","w",function (err,fd) {
	if(!err){
		// console.info(fd);
		
		//如果没有出错，则写入操作
		
		fs.write(fd,"这是异步写入的内容",function (err) {
			if(!err){
				console.info("写入成功");
			}
			//关闭文件
			fs.close(fd,function (err) {
				if(!err){
					console.info("关闭成功");
				}
			})
		})
	}else {
		console.info(err);
	}
});
//写入文件