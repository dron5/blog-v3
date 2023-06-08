import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // Уберу позже, когда будет АПИ
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));