import React, { FC } from 'react';
import './styles/global.scss';

import AppRouter from './routes/AppRouter';

const App: FC = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
