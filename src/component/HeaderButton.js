import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

const HeaderButton = () => {
    return (
        <Button
            onPress={() => alert('This is a button!')}
            title='&#128269;'
            color='#fff'
        />
    )
}

export default HeaderButton
