import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DetailScreen = ({route, navigation}) => {
    const movie = route.params.movie;
    const title = movie.title || movie.name;
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Video')
            }}>
                <Text>{title}</Text>
                <Text>Play Video</Text>
                <Text>{movie.overview}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailScreen
