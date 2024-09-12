import React from 'react';
import 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
import SchoolSelectionScreen from './SchoolSelectionScreen';
import WelcomeScreen from './WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        />
        {/* Login Screen */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        {/* School Selection Screen */}
        <Stack.Screen
          name="SchoolSelectionScreen"
          component={SchoolSelectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
