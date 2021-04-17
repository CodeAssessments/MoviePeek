import React, {useState, useEffect} from 'react'
import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import axios from 'axios'

const API_KEY = process.env.TMDB_API_KEY;

const DiscoverScreen = ({navigation}) => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(async () => {
        const list = await getMovieList();
        setPopularMovies(list)
    }, [])

    const getMovieList = () => {
        return axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY)
        .then(res => res.data.results)
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Detail')
            }}>
                <Text>Detail</Text>
                <FlatList 
                data={popularMovies}
                extraData={popularMovies}
                renderItem={({item}) => <Text>{item.title}</Text>}
                keyExtractor={item => item.id.toString()}
            />
            </TouchableOpacity>
        </View>
    )
}

export default DiscoverScreen
