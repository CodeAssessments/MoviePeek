import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Movie from './Movie'
import { useNavigation } from '@react-navigation/native';

const CarouselMovies = ({title, data}) => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{fontSize: 20}}>{title}</Text>
            <FlatList 
            data={data}
            extraData={data}
            renderItem={({item}) => <Movie item={item} navigation={navigation} />}
            keyExtractor={item => item.id.toString()}
        />
        </View>
    )
}

export default CarouselMovies
