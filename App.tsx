import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all screens
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
import MovingHelpScreen from './MovingHelpScreen';
import EventCleanupScreen from './EventCleanupScreen';
import TutoringScreen from './TutoringScreen';
import TutoringDetailsScreen from './TutoringDetailsScreen';
import OtherScreen from './OtherScreen';
import EventCleanupDetailsScreen from './EventCleanupDetailsScreen';
import MovingHelpDetailsScreen from './MovingHelpDetailsScreen';
import OtherDetailsScreen from './OtherDetailsScreen'; // Import the new screen
import { ListingsProvider } from './ListingsContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ListingsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          {/* All screens should be wrapped as Stack.Screen */}
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
          <Stack.Screen name="MovingHelp" component={MovingHelpScreen} /> 
          <Stack.Screen name="EventCleanup" component={EventCleanupScreen} /> 
          <Stack.Screen name="Tutoring" component={TutoringScreen} />
          <Stack.Screen name="TutoringDetails" component={TutoringDetailsScreen} />
          <Stack.Screen name="Other" component={OtherScreen} />
          <Stack.Screen name="EventCleanupDetails" component={EventCleanupDetailsScreen} />
          <Stack.Screen name="MovingHelpDetails" component={MovingHelpDetailsScreen} />
          <Stack.Screen name="OtherDetails" component={OtherDetailsScreen}  /> 
        </Stack.Navigator>
      </NavigationContainer>
    </ListingsProvider>
  );
};

export default App;
