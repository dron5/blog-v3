import { ReactNode } from 'react';

interface IErProps {
  children: ReactNode
}

export function FncErrorBoundary({ children }: IErProps) {
  return (
    <>
      {children}
    </>
  );
}