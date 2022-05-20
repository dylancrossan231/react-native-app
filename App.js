/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import NavComponent from "./components/Navigation/NavComponent";
import store from './redux/store';
import {NativeBaseProvider} from 'native-base'
const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavComponent />
      </NativeBaseProvider>
    </Provider>
  );

};

export default App;
