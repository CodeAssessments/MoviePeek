import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import VideoPlayer from './src/component/VideoPlayer';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <VideoPlayer />
    </SafeAreaView>
  );
};


export default App;
