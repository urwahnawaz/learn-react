//ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById("root"))

const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"

const element = <h1 className="header"> This is JSX</h1>


ReactDOM.render(element, document.getElementById("root"))