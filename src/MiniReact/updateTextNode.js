export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
    if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
        oldDOM.textContent = virtualDOM.props.textContent;
        oldDOM._virtualDOM = virtualDOM;    // 更新旧的虚拟DOM对象，以便下次更新时使用
    }
}
