/**
 * @format
 */

import React, { memo } from 'react';
import { RecoilRoot } from 'recoil';

import { PostApp } from './src/components';

function App() {
  return (
    <RecoilRoot>
      <PostApp />
    </RecoilRoot>
  );
}

export default memo(App);
