
import MiniReact from './MiniReact';

const root = document.getElementById('root');

const virtualDOM = (
    <div className="container">
        <h1>Mini React</h1>
        <h2>Hello World</h2>
        <h3>(This is a subtitle)</h3>
            <input type="text" value="Hi" />
        你好
        {2==1 && <h3>2==1</h3>}
        {2==2 && <h3>2==2</h3>}
        <button onClick={() => alert('Hi')}>Click me</button>
    </div>
);

// MiniReact.render(virtualDOM, root);

// const Demo = () => {
//     return (
//         <div>
//             <h1>Mini React</h1>
//         </div>
//     )
// }
//
// const Hello = (props) => {
//     return <div>
//         <h1>{props.title}</h1>
//         <Demo />
//     </div>
// }

// MiniReact.render(<Hello title="Hello" />, root);

// class Nihao extends MiniReact.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div>
//             <h1>
//                 {this.props.title}
//             </h1>
//         </div>
//     }
// }
//
// MiniReact.render(<Nihao title="你好呀！" />, root);

const vdom = (
    <div className="container">
        <h1 data-title="hello">你好</h1>
        <span>Mini React</span>
        <button onClick={() => alert('Hi')}>Click me</button>
        <h1>1</h1>
    </div>
);

const modifiedVdom = (
    <div className="container">
        <h3 data-title="world">你好</h3>
        <input type="text" value="Hi" />
        <button onClick={() => alert('你好')}>Click me</button>
    </div>
);

const vdom1 = (
    <div className="container">
        <h1 data-title="hello">你好</h1>
        <span>Mini React</span>
        <button onClick={() => alert('Hi')}>Click me</button>
    </div>
);

MiniReact.render(vdom, document.getElementById('root'));

setTimeout(() => {
    MiniReact.render(vdom1, document.getElementById('root'));
}, 3000);
