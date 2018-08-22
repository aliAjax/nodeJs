var fs=require("fs");
var ws=fs.createWriteStream("hello3.txt");

//监听流的open和close事件
/*
* on()
* 	--可以为对象绑定一个事件
*
* once(事件字符串，回调函数)
* 	--为对象绑点个一个一次性事件，该事件将会在触发一次以后自动失效
* */
ws.once("open",function () {
	console.info("流打开了···");
})


ws.write("通过流写入");
ws.write("监听");
ws.write("流写入");
ws.write("通过流写入");
ws.write("通过流写入");
ws.write("写入");

//关闭流
// ws.close();//第一句write写入后直接关掉
ws.end();

ws.once("close",function () {
	console.info("流关闭了···");
})