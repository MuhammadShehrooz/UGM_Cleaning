import React, { ReactNode } from "react";
import Page404 from "./components/Page404";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("An unexpected error occurred:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Page404 />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
