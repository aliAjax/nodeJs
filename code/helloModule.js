// exports.name="A";
// exports.age="18";
// exports.saynName=function () {
//     console.info("我是孙悟空");
// };

/*
*   exports和module.exports
*       -exprots只能使用.的方式向外暴露
*       -module.exports既可以通过.的形式，也可以直接赋值
*
* */
module.exports={
    name:"猪八戒",
    age:28,
    sayName:function () {
        console.info("我是猪八戒");
    }
}