import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const BASE_ULR = 'https://image.tmdb.org/t/p/w500'

const Movie = ({item, navigation}) =>{
    const title = item.title || item.name;
    return(
        <TouchableOpacity onPress={() => {
            navigation.navigate('Detail', {
              movie: item
            })
        }}>
            <View style={styles.wrapper}>
                <Image
                    source={{uri: BASE_ULR+item.poster_path}}
                    style={styles.imageStyle} 
                />
                <Text numberOfLines={1}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 320, 
        width: 200, 
        margin: 10,
        backgroundColor: '#F7FBFE'
    },
    imageStyle: {
        height: 300,
        width: 200
    }
});

export default Movie
