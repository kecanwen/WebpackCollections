require('./a.css');
require('./b.css');
import "./style.css";

console.log('index.js')
const div = document.createElement('div');
div.classList.add('codesplitDemo');

// 现在你可以将这个 div 元素添加到页面中的某个容器中
const container = document.getElementById('container');
container.appendChild(div);