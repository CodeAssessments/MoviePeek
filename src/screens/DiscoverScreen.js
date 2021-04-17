import React, {useState, useEffect} from 'react'
import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import getMovies from '../utils/getMovies'
import Movie from '../component/Movie'

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

const urls = {
    popularMovies: BASE_URL+'movie/popular?api_key='+API_KEY,
    popularSeries: BASE_URL+'tv/popular?api_key='+API_KEY,
    genreFamily: BASE_URL+'discover/movie?api_key='+API_KEY+'&with_genres=10751',
    genreDocumentary: BASE_URL+'discover/movie?api_key='+API_KEY+'&with_genres=99',
}

const DiscoverScreen = ({navigation}) => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(async () => {
        setPopularMovies(await getMovies(urls.popularMovies));
    }, [])

    return (
        <View>
            <Text style={{fontSize: 20}}>Popular Movies</Text>
            <FlatList 
            data={popularMovies}
            extraData={popularMovies}
            renderItem={({item}) => <Movie item={item} navigation={navigation} />}
            keyExtractor={item => item.id.toString()}
        />
        </View>
    )
}

export default DiscoverScreen
