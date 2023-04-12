import diff from "./diff";
export default class Component {
    constructor(props = {}) {
        this.props = props;
    }
    setState(state) {
        // setState 实际上是对状态进行合并
        this.state = Object.assign({}, this.state, state);
        let virtualDOM = this.render(); // 获取最新的虚拟 DOM
        // 获取旧的虚拟 DOM 进行比对
        let oldDOM = this.getDOM();
        let container = oldDOM.parentNode;
        diff(virtualDOM, container, oldDOM);
    }

    // 用于设置组件的 DOM 对象，保存 dom 对象是为了方便后续的更新操作
    // 在 mountNativeElement 中调用
    setDOM(dom) {
        this._dom = dom;
    }

    getDOM() {
        return this._dom;
    }
}
