import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const PlayButton = () => {
    return (
            <View style={styles.btnBg}>
                <Text style={{fontSize: 35, color: 'white'}}>&#9654;</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    btnBg: {
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70,
        backgroundColor: "#3FA1F8",
        borderRadius: 100,
        textAlign: 'center'
    },
});

export default PlayButton
