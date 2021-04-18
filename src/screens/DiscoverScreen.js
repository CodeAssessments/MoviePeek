import React, {useState, useEffect} from 'react'
import { Button, ScrollView, Text } from 'react-native'
import getMovies from '../utils/getMovies'
import CarouselMovies from '../component/CarouselMovies'

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

const urls = {
    popularMovies: BASE_URL+'movie/popular?api_key='+API_KEY,
    popularSeries: BASE_URL+'tv/popular?api_key='+API_KEY,
    genreFamily: BASE_URL+'discover/movie?api_key='+API_KEY+'&with_genres=10751',
    genreDocumentary: BASE_URL+'discover/movie?api_key='+API_KEY+'&with_genres=99',
}

const DiscoverScreen = ({navigation}) => {
    //First screen the view sees
    //4 hooks for results to update FlatList when received data
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const [genreFamily, setGenreFamily] = useState([]);
    const [genreDocumentary, setGenreDocumentary] = useState([]);

    useEffect(async () => {
        //sets button with a link to search screen in header/navbar
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('Search')}
                    title='&#128269;'
                    color='#fff'
                />
            ),
            headerStyle: {},
        });
        //calls async getMovies util and updates hooks with results
        setPopularMovies(await getMovies(urls.popularMovies));
        setPopularSeries(await getMovies(urls.popularSeries));
        setGenreFamily(await getMovies(urls.genreFamily));
        setGenreDocumentary(await getMovies(urls.genreDocumentary));
    }, [])

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#E1E2E6'}}>
            <CarouselMovies title={"Popular Movies"} data={popularMovies} />
            <CarouselMovies title={"Popular TV Series"} data={popularSeries} />
            <CarouselMovies title={"Family Movies"} data={genreFamily} />
            <CarouselMovies title={"Documentary"} data={genreDocumentary} />
        </ScrollView>
    )
}

export default DiscoverScreen
