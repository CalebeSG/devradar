import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Warning'
]);

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

export default App;