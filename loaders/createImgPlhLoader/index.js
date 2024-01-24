// Jimp 是一个用于图像处理的纯 JavaScript 库。 用于读取、处理和导出图像文件
var Jimp = require("jimp");
// loader-utils 是一个用于编写 Webpack Loader 的实用工具库。它提供了一些常用的工具函数，用于处理 Loader 的参数、路径、查询字符串等。
var loaderUtils = require("loader-utils");
//可以将二进制数据转换为数据 URI的库  数据以 Base64 编码的形式嵌入到 URL 中
var Datauri = require('datauri');

var path = require('path');

/***
 * source 代表源文件的内容 字符串 或者 二进制
 * map 源文件的映射 表示源文件和转换后文件的对应关系的对象
 *  */ 
module.exports = function (source, map) {
  // 获取当前正在处理图片源文件的绝对路径
  var originalImage = path.resolve(this.resource)
  //用于向 Webpack 声明当前 Loader 依赖的文件。它告诉 Webpack，如果依赖的文件发生了变化，当前 Loader 需要重新执行
  this.addDependency(originalImage);

  Jimp.read(originalImage).then(function (image) {
    // loaderUtils.interpolateName函数  根据指定的模板规则生成新的文件名
    var extension = loaderUtils.interpolateName(this, '.[ext]', {});//.ext 不是一个具体的文件后缀，而是一个通用的占位符，表示文件的扩展名
    // 获取图片高宽
    var size = {
      width: image.bitmap.width,
      height: image.bitmap.height
    };

    image.scaleToFit(image.bitmap.width, image.bitmap.height)    // 占位图像和源图像尽量高宽一致
      .quality(60)    // 60表示图像的质量，通常介于0到100之间
    
      // getBuffer 是 Jimp 提供的一个方法，用于获取图像的缓冲区数据
    image.getBuffer(Jimp.MIME_JPEG, function (err, result) {
      // format 方法传入图像的文件扩展名 extension 和图像的缓冲区数据 result，将其转换为数据 URI,通过 .content 获取数据 URI 的内容
      var dataUri = new Datauri().format(extension, result).content;
      // 处理后的数据 URI 和图像的尺寸信息组装成一个模块导出对象
      // callback 是一个回调函数，用于将处理后的结果返回给调用者。
      // callback 函数接受三个参数，分别是错误对象 err、生成的模块代码字符串和源映射对象 map。
      callback(null, "module.exports = " + JSON.stringify({
        dataUri: dataUri,
        size: size
      }) + ";", map);
    }.bind(this));
  }.bind(this)).catch(function (err) {
    console.log(err);
  });
}