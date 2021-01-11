import React, { Component } from "react";
export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("Error boundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            height: "90vh",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h3>An Error Occured</h3>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
