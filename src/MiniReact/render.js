/*
* @param {object} virtualDOM 虚拟DOM对象
* @param {object} container 容器
* @param {object} oldDOM 旧的DOM对象
* */

import diff from './diff'

export default function render(virtualDOM, container, oldDOM = container.firstChild){
    diff(virtualDOM,container,oldDOM)   // 判断是否是更新操作
}
