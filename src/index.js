import React, { Component } from "react";
import { render } from "react-dom";

import "./styles.css";

const links = [
  {
    title: "first react component"
  }
];
class ErrorBoundary extends Component {
  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({ error: true });
  }

  render() {
    return this.state.error ? (
      <div>Oops there was an error</div>
    ) : (
      this.props.children
    );
  }
}

class App extends Component {
  state = {
    links: null
  };

  componentDidMount() {
    const all = links + 1;
    this.setState({ all });
  }
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic hey!</h2>
        </ErrorBoundary>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
