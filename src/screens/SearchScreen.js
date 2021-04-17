import React, {useState, useEffect} from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import CarouselMovies from '../component/CarouselMovies'
import getMovies from '../utils/getMovies'

const API_KEY = process.env.TMDB_API_KEY;

const SearchScreen = () => {
    const [searchString, setSearchString] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&page=1&include_adult=false';

    useEffect(async () => {
        setSearchResult(await getMovies(url+'&query='+searchString));
    }, [searchString])
  
    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder={'search'} 
                value={searchString}
                onChangeText={setSearchString}
            />
            {searchResult
            ? <CarouselMovies title={"Search Results"} data={searchResult} />
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 10,
      borderWidth: 1,
      backgroundColor: 'white'
    },
});

export default SearchScreen
