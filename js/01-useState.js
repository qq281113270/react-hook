// 使用 useState
function Example() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
ReactDOM.render(<Example />, document.getElementById('example'));
