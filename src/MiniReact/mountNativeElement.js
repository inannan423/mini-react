import mountElement from './mountElement';
import createDOMElement from './createDOMElement';
export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM);  // 创建新的DOM对象
    container.appendChild(newElement);
}
