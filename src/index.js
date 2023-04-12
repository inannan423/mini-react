
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

MiniReact.render(virtualDOM, root);


console.log(virtualDOM);
