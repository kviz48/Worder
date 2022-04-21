import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';

const AppRouter: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
