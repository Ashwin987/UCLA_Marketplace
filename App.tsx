import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen'; // Make sure you have this screen in the 'screens' folder

// Create a stack navigator
const Stack = createStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        {/* Welcome Screen */}
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} // Optional: Hide the header bar
        />
        {/* You can add more screens here later */}
        {/* For example: */}
        {/* <Stack.Screen name="AnotherScreen" component={AnotherScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
