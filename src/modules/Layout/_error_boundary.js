import PropTypes from "prop-types";
import React from "react";
import { default as ErrorPanel } from "./_error_panel";

export default class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo, error } = this.state;
    const { children, className } = this.props;
    if (errorInfo) {
      // Error path
      return <ErrorPanel error={error} errorInfo={errorInfo} />;
    }
    // Normally, just render children
    return <div className={className}>{children}</div>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};
