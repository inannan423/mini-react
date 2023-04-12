import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

export default function mountNativeElement(virtualDOM) {
    let newElement = null;  // 创建新的DOM对象
    // 如果类型是文本
    if (virtualDOM.type === 'text') {
        newElement = document.createTextNode(virtualDOM.props.textContent);
    } else {
        // 如果类型不是文本,就是一个标签
        newElement = document.createElement(virtualDOM.type);
        // 为元素添加属性
        updateNodeElement(newElement, virtualDOM);
    }

    // 存储旧的虚拟DOM
    newElement._virtualDOM = virtualDOM;

    // 递归地渲染子节点
    virtualDOM.children.forEach(child => mountElement(child, newElement));
    return newElement;
}
