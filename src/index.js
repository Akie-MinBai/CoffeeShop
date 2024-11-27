// 导入React库
import React from 'react';
// 导入ReactDOM库
import ReactDOM from 'react-dom/client';
// 导入App组件
import App from './App';
// 导入Provider组件
import { Provider } from 'react-redux'
// 导入store
import store from './store'
// 设置root元素的高度和宽度为窗口的高度和宽度
document.getElementById('root').style.height = window.innerHeight+'px';
document.getElementById('root').style.width = window.innerWidth+'px';
// 创建root元素
const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染App组件，并将store作为props传递给Provider组件
root.render(<Provider store={store}><App /></Provider>);