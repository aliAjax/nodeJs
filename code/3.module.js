//在node中，通过require（）函数来引用外部模块
//  require中可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
//  这里的路径，如果使用象对路径，必须以.或者..开头
//使用require引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块

//  -模块分成两大类
//      -核心模块
//          -由node引擎提供的模块
//          -核心模块的标识就是模块的名字
//      -文件模块
//          -由用户自己创建的模块
//          -文件模块的标识就是文件的路径（绝对路径，相对路径）
//              相对路径必须以.或..开头

var module=require("./2.module.js");
console.info(module);

//求和求积例子

var math=require('./math');
console.info(math.add(2,3),math.mul(2,3));