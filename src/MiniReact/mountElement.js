import mountNativeElement from './mountNativeElement';
import isFunction from "./isFunction";
import mountComponent from "./mountComponent";

export default function mountElement(virtualDOM, container, oldDOM) {
    if (isFunction(virtualDOM)) {
        // 如果是类组件或者函数组件
        mountComponent(virtualDOM, container, oldDOM)
    } else {
        // 如果是原生组件
        mountNativeElement(virtualDOM, container, oldDOM);
    }
}

