const React = require("react");
const ReactDOM = require("react-dom");
import "./index.css";
import Battle from "./components/Battle";
import Popular from "./components/Popular";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
