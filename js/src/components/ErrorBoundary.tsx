/**
 * ErrorBoundary - React component to catch and display errors gracefully
 * 
 * Wraps components to prevent entire app crashes from component errors.
 * Displays user-friendly error message with optional debugging info.
 */

import * as React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  override render(): React.ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div
          style={{
            padding: '20px',
            margin: '10px',
            border: '2px solid #ef4444',
            borderRadius: '8px',
            backgroundColor: '#fee',
          }}
        >
          <h2 style={{ color: '#dc2626', margin: '0 0 10px 0' }}>
            ⚠️ Something went wrong
          </h2>
          <details style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
            <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>
              <strong>Error details</strong>
            </summary>
            <div style={{ marginTop: '10px' }}>
              <p>
                <strong>Message:</strong> {this.state.error?.message}
              </p>
              {this.state.error?.stack && (
                <div>
                  <strong>Stack trace:</strong>
                  <pre
                    style={{
                      fontSize: '12px',
                      overflow: 'auto',
                      backgroundColor: '#f5f5f5',
                      padding: '10px',
                      borderRadius: '4px',
                    }}
                  >
                    {this.state.error.stack}
                  </pre>
                </div>
              )}
              {this.state.errorInfo && (
                <div>
                  <strong>Component stack:</strong>
                  <pre
                    style={{
                      fontSize: '12px',
                      overflow: 'auto',
                      backgroundColor: '#f5f5f5',
                      padding: '10px',
                      borderRadius: '4px',
                    }}
                  >
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              )}
            </div>
          </details>
          <button
            onClick={this.handleReset}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
