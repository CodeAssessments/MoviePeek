import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DetailScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Video')
            }}>
                <Text>Video</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailScreen
