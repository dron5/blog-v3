import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
// import { classNames } from 'shared/lib/classNames/classNames';

// interface BugButtonProps {
//   className?: string;
// }

export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const toThrowError = ()=> setError(true);
  useEffect(()=>{
    if (error) throw new Error;
  },[error]);
  return (
    <Button onClick={toThrowError}>
      {t('Проверить ErrorBoundary')}
    </Button>
  );
};
