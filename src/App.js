/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};



export default App;
