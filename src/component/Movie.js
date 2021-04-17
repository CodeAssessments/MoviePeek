import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Movie = ({item, navigation}) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', {
                movie: item
            })
        }}>
            <Text>{item.title || item.name}</Text>
        </TouchableOpacity>
    )
}

export default Movie
