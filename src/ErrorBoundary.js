import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <h2>OOPS!</h2>;
    }
    return this.props.children;
  }
}
