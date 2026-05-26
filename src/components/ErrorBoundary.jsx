import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-50 px-6">
          <div className="text-center max-w-md">
            <h1 className="font-display text-3xl font-bold text-brand-800 mb-4">
              Ops, algo deu errado
            </h1>
            <p className="text-gray-600 mb-6">
              Desculpe pelo inconveniente. Tente recarregar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
