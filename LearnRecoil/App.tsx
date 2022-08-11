/**
 * @format
 */

import React, { memo } from 'react';
import { RecoilRoot } from 'recoil';

import { TodoApp } from './src/components';
// import AuthApp from './src/components/AuthApp';

function App() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
}

export default memo(App);
