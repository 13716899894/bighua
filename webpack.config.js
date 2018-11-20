// es6和node里面出现exports,意思是暴露、抛出   把当前定义的方法抛出
var path=require("path") // 路径模块
// __dirname 绝对路径      __filename 相对路径
// resolve成功解析
// mode模式（4.0版本出现的）   development开发者模式（开发过程中使用）    production生产模式（线上使用）
module.exports={
    mode:"development",//production
    // 配置入口文件
    entry:"./src/index.js",
    // 配置出口文件
    output:{
        filename:"./bundle.js",
        path:path.resolve(__dirname,"dist")
    }
}