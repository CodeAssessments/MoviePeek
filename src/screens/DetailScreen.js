import React from 'react'
import { Text, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native'
import LargeText from '../component/LargeText';
import PlayButton from '../component/PlayButton';

const BASE_ULR = 'https://image.tmdb.org/t/p/w500'

const DetailScreen = ({route, navigation}) => {
    const movie = route.params.movie;
    const title = movie.title || movie.name;
    return (
        <View style={{flex: 1}} >
            <ImageBackground   
                source={{uri: BASE_ULR+movie.poster_path}}
                style={{flex: 1}} 
            >
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => {
                    navigation.navigate('Video')
                }}>
                        <PlayButton />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={{margin: 10}}>
                <LargeText>{title}</LargeText>
                <Text>{movie.overview}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        position: "absolute", 
        bottom: -30, 
        right: 20
    },
});

export default DetailScreen
