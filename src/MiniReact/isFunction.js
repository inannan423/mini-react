export default function isFunction(vdom) {
    return vdom && typeof vdom.type === 'function';
}
