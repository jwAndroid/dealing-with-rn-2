/**
 * @format
 */

import React, { memo } from 'react';
import { RecoilRoot } from 'recoil';

import AuthApp from './src/components/AuthApp';

function App() {
  return (
    <RecoilRoot>
      <AuthApp />
    </RecoilRoot>
  );
}

export default memo(App);
