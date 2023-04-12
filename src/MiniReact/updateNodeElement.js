export default function updateNodeElement (newElement,virtualDom,oldVirtualDom = {}) {
    const newProps = virtualDom.props || {};
    // 获取旧的属性对象
    const oldProps = oldVirtualDom.props || {};
    Object.keys(newProps).forEach(propName => {
        // 获取新的属性值
        const newPropsValue = newProps[propName];
        // + 获取旧的属性值
        const oldPropsValue = oldProps[propName];
        // + 更新
        if (newPropsValue !== oldPropsValue) {
            // 判断是否是事件属性
            if (propName.slice(0,2) === 'on') {
                // 事件名称，事件名是小写 onClick -> click
                const eventName = propName.toLowerCase().slice(2);
                // 为元素添加事件
                newElement.addEventListener(eventName, newPropsValue);

                // + 移除旧的事件
                if (oldPropsValue) {
                    // 移除旧的事件
                    newElement.removeEventListener(eventName, oldPropsValue);
                }

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
        }

        // 判断属性被删除的情况
        Object.keys(oldProps).forEach(propName => {
            const newPropsValue = newProps[propName];
            // 值不存在则说明属性被删除
            if (!newPropsValue) {
                // 判断是否是事件属性
                if (propName.slice(0,2) === 'on') {
                    // 事件名称，事件名是小写 onClick -> click
                    const eventName = propName.toLowerCase().slice(2);
                    // 移除旧的事件
                    newElement.removeEventListener(eventName, oldPropsValue);
                }
                // 这里就不用讨论 value 和 checked 了，因为这两个属性可以被 removeAttribute 删除
                else if (propName !== 'children') {
                    // 如果属性名不是 children，就是普通属性，直接赋值
                    if (propName === 'className') {
                        // 如果属性名是 className，改为 class
                        newElement.removeAttribute('class');
                    } else {
                        newElement.removeAttribute(propName);
                    }
                }
            }
        })

    });
}
