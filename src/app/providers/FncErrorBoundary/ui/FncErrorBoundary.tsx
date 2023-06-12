import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError/ui/PageError';

interface IErProps {
  children: ReactNode
}

export function FncErrorBoundary({ children }: IErProps) {
  return (
    <ErrorBoundary FallbackComponent={PageError}>
      {children}
    </ErrorBoundary>
  );
}