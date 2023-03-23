import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() { 
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <strong>Ooops... Something went wrong </strong>
    }
    return this.props.children;
  }
}

export default ErrorBoundry;