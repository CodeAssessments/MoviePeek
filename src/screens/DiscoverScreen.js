import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DiscoverScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Detail')
            }}>
                <Text>Detail</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DiscoverScreen
