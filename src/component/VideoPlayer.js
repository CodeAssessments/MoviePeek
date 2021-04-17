import React from 'react'
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
    return (
        <Video source={require("../assets/big_buck_bunny.mp4")} 
            style={styles.backgroundVideo} />
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
      height: '100%'
    },
  });

export default VideoPlayer
