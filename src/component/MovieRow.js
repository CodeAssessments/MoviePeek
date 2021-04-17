import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import LargeText from './LargeText';

const BASE_ULR = 'https://image.tmdb.org/t/p/w500'

const MovieRow = ({item, navigation}) =>{
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
                <View style={styles.textWrapper}>
                    <View style={{flex: 1}}>
                        <LargeText>
                            {title}
                        </LargeText>
                        <Text numberOfLines={8}>{item.overview}</Text>
                    </View>
                    <Text>Rating: {item.vote_average} ({item.vote_count} votes)</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        backgroundColor: '#F7FBFE'
    },
    textWrapper: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        margin: 10
    },
    imageStyle: {
        height: 240,
        width: 160
    }
});

export default MovieRow
