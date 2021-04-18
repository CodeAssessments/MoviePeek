import React, {useState, useEffect} from 'react'
import { View, TextInput, StyleSheet, Text, FlatList } from 'react-native'
import getMovies from '../utils/getMovies'
import MovieRow from '../component/MovieRow'
import LargeText from '../component/LargeText'

const API_KEY = process.env.TMDB_API_KEY;

const SearchScreen = ({navigation}) => {
    //hook for text input and search result
    const [searchString, setSearchString] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&page=1&include_adult=false';

    //every time the text input is updated run new search with the text and set result hook which updates FlatList 
    useEffect(async () => {
        setSearchResult(await getMovies(url+'&query='+searchString));
    }, [searchString])

    const ResultList = () => {
        //component to render if we have received a result from the search
        return (
            <View>
                <LargeText style={{marginHorizontal: 10}}>Search Results</LargeText>
                <FlatList 
                    data={searchResult}
                    extraData={searchResult}
                    renderItem={({item}) => <MovieRow item={item} navigation={navigation} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
  
    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder={'search'} 
                value={searchString}
                onChangeText={setSearchString}
            />
            {searchResult
            ? <ResultList />
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
