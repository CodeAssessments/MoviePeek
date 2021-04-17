import React from 'react'
import { Text, StyleSheet  } from 'react-native'

const LargeText = props => {
    return(
        <Text style={{ ...styles.largeText, ...props.style }}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    largeText: {
      fontSize: 20,
    }
});

export default LargeText
