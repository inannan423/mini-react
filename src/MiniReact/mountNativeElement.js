import mountElement from './mountElement';
import createDOMElement from './createDOMElement';
import unMountNode from "./unMountNode";
export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM);  // 创建新的DOM对象

    // 如果存在旧的DOM对象，就将其替换
    if (oldDOM) {
        unMountNode(oldDOM);
    }

    container.appendChild(newElement);

    let component = virtualDOM.component;
    // 如果组件实例存在，就更新组件实例的DOM对象
    if (component) {
        component.setDOM(newElement);   // 将 DOM 对象存储到组件实例上，作为之后的旧 DOM 对象
    }
}
