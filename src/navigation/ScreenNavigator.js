import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DiscoverScreen from "../screens/DiscoverScreen";
import DetailScreen from "../screens/DetailScreen";
import VideoScreen from "../screens/VideoScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const ScreenNavigator = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Discover">
            <Stack.Screen name="Discover" component={DiscoverScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Video" component={VideoScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default ScreenNavigator;