import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";

export default function mountComponent(virtualDOM, container) {
    let nextVirtualDOM = null;  // 下一个要渲染的虚拟 DOM
    // 判断是类组件还是函数组件
    if(isFunctionComponent(virtualDOM)) {
        // 函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM);
    } else {
        // 类组件
        nextVirtualDOM = buildClassComponent(virtualDOM);
    }
    if (isFunction(nextVirtualDOM)) {
        // 如果是函数，就继续渲染
        mountComponent(nextVirtualDOM, container);
    } else {
        // 如果不是函数，就渲染原生组件
        mountNativeElement(nextVirtualDOM, container);
    }
}

function buildFunctionComponent(virtualDOM) {
    // virtualDOM.type 就是函数组件本身，可以进行调用
    return virtualDOM.type(virtualDOM.props || {});
}

function buildClassComponent(virtualDOM) {
    // 实例化构造函数
    const component = new virtualDOM.type(virtualDOM.props || {});
    return component.render();
}
