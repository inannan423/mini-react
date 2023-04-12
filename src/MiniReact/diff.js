import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
    mountElement(virtualDOM, container, oldDOM);    // 挂载新的DOM对象
}
