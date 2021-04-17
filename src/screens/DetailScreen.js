import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import LargeText from '../component/LargeText';

const BASE_ULR = 'https://image.tmdb.org/t/p/w500'

const DetailScreen = ({route, navigation}) => {
    const movie = route.params.movie;
    const title = movie.title || movie.name;
    return (
        <View style={{flex: 1}} >
            <Image   
                source={{uri: BASE_ULR+movie.poster_path}}
                resizeMode='contain'
                style={{flex: 1}} 
            />
            <LargeText>{title}</LargeText>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Video')
            }}>
                <Text>Play Video</Text>
            </TouchableOpacity>
            <Text>{movie.overview}</Text>
        </View>
    )
}

export default DetailScreen
