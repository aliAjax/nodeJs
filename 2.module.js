/*
* 模块化
*   -在node中，一个js文件就是一个模块
*   -在node中，每个js文件中的js代码都是独立运行在一个函数中
*       通过exports向外部暴露变量和方法
* */
console.info("我是一个模块");
var y=20;
exports.x="我是02的";
exports.fn=function () {
    console.info(02);
}