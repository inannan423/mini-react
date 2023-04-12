export default function updateNodeElement (newElement,virtualDom) {
    const newProps = virtualDom.props || {};
    Object.keys(newProps).forEach(propName => {
        const newPropsValue = newProps[propName];
        // 判断是否是事件属性
        if (propName.slice(0,2) === 'on') {
            // 事件名称，事件名是小写 onClick -> click
            const eventName = propName.toLowerCase().slice(2);
            // 为元素添加事件
            newElement.addEventListener(eventName, newPropsValue);
        } else if (propName === 'value' || propName === 'checked') {
            // 如果是 value 或者 checked 属性，直接赋值
            newElement[propName] = newPropsValue;
        } else if (propName !== 'children') {
            // 如果属性名不是 children，就是普通属性，直接赋值
            if (propName === 'className') {
                // 如果属性名是 className，改为 class
                newElement.setAttribute('class', newPropsValue);
            } else {
                newElement.setAttribute(propName, newPropsValue);
            }
        }
    });
}
