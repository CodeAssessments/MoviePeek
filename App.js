import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ScreenNavigator from './src/navigation/ScreenNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <ScreenNavigator />
    </SafeAreaView>
  );
};


export default App;
