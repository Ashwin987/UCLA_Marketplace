import React from 'react';
import 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
import OptionsScreen from './OptionsScreen';
import SchoolSelectionScreen from './SchoolSelectionScreen';
import WelcomeScreen from './WelcomeScreen';
import ServiceListingsScreen from './ServiceListingsScreen';
import BuySellScreen from './BuySellScreen';
import EventTicketsScreen from './EventTicketsScreen';
import PostListingScreen from './PostListingScreen';
import SellScreen from './SellScreen';

import SellTicketsScreen from './SellTicketsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingsProvider } from './ListingsContext'; // Import the provider

const Stack = createStackNavigator();

const App = () => {
  return (
    <ListingsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SchoolSelectionScreen" component={SchoolSelectionScreen} />
          <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
          <Stack.Screen name="ServiceListingsScreen" component={ServiceListingsScreen} />
          <Stack.Screen name="BuySellScreen" component={BuySellScreen} />
          <Stack.Screen name="EventTicketsScreen" component={EventTicketsScreen} />
          <Stack.Screen name="PostListingScreen" component={PostListingScreen} />
          <Stack.Screen name="SellScreen" component={SellScreen} />
          <Stack.Screen name="SellTicketsScreen" component={SellTicketsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListingsProvider>
  );
};

export default App;
