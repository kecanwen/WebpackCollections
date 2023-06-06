## loader 用于对模块的源代码进行转换
 * loader 可以使你在 import 或"加载"模块时预处理文件
 * loader 类似于其他构建工具中“任务(task)”
 * loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript
 * 将内联图像转换为 data URL
 * loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

## 使用 loader 
* 配置（推荐）：在 webpack.config.js 文件中指定 loader。
* 内联：在每个 import 语句中显式指定 loader。
* CLI：在 shell 命令中指定它们。
