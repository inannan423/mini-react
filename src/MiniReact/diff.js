import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode";
import createDOMElement from "./createDOMElement";
import unMountNode from "./unMountNode";
import diffComponent from "./diffComponent";

export default function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;    // 获取旧的虚拟DOM对象
    const oldComponent = oldVirtualDOM && oldVirtualDOM.component;    // 获取旧的组件实例，这是在之前在 mountNativeElement 中挂载的
    if (!oldDOM) {  // 如果没有旧的DOM对象，直接渲染
        mountElement(virtualDOM, container, oldDOM);    // 挂载新的DOM对象
    } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== "function") {  // 如果新旧虚拟DOM对象类型不同，直接替换
        // 如果新旧虚拟DOM对象类型不同，直接替换
        const newElement = createDOMElement(virtualDOM);    // 创建新的DOM对象
        oldDOM.parentNode.replaceChild(newElement, oldDOM);    // 替换旧的DOM对象
    }
    // 如果需要更新的是一个组件
    else if (typeof virtualDOM.type === "function") {
        /*
        * virtualDOM 用于获取组件的 props
        * oldDOM 用于获取组件的实例
        * oldComponent 用于获取组件的旧的虚拟DOM对象
        * container 用于获取组件的父容器
        * */
        diffComponent(virtualDOM, oldComponent, oldDOM, container);
    }
    else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {  // 如果新旧虚拟DOM对象类型相同
        // 更新操作,如果是文本类型的节点，只需要更新文本内容
        if (oldVirtualDOM.type === "text") {
            // 更新文本内容,三个参数，将差异更新到旧的DOM对象上（第三个参数）
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
        } else {
            // 更新元素属性
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
        }
        // 递归更新子节点
        virtualDOM.children.forEach((child, index) => {
            diff(child, oldDOM, oldDOM.childNodes[index]);
        });
        // 删除多余的子节点
        const oldChildNodes = oldDOM.childNodes;
        if (oldChildNodes.length > virtualDOM.children.length) {
            for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
                unMountNode(oldChildNodes[i]);
            }
        }
    }
}
