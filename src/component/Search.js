import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Search = () => {
    return (
        <TextInput style={styles.input} placeholder={'search'}>
            
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor: 'white'
    },
});

export default Search
