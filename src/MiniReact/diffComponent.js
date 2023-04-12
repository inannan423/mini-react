import mountElement from './mountElement';

export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
    if (isSameComponent(virtualDOM, oldComponent)) {
        // 如果是同一个组件，进行组件更新
        updateComponent(virtualDOM, oldComponent, oldDOM, container);
    } else {
        // 如果不是同一个组件，删除旧组件，挂载新组件
        mountElement(virtualDOM, container, oldDOM);
    }
}

// 判断是否是同一个组件
function isSameComponent(virtualDOM, oldComponent) {
    // 判断组件的构造函数是否相同，如果相同，说明是同一个组件
    return oldComponent && virtualDOM.type === oldComponent.constructor;
}
