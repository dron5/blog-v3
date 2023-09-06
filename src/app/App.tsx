import { Suspense, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'features/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () =>{
    setIsOpen(true);
    console.log('isOpen :', isOpen);
  };

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={openModalHandler}>456</button>
        <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
          0957349854985354587
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
export default App;
