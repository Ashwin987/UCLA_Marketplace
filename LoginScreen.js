import React from 'react';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator } from 'react-native';

function LoginScreen({ route, navigation }) {
  const { url } = route.params; // Only `url` is passed to this screen initially

  const handleNavigationStateChange = (navState) => {
    // For UCR login
    if (navState.url.includes('https://portal.ucr.edu/uPortal/f/home-student/normal/render.uP')) {
      navigation.navigate('OptionsScreen', { selectedSchool: 'UCR' }); // Explicitly pass 'UCR' as selectedSchool
    }
    // For UCLA login
    if (navState.url.includes('https://myucla.it.ucla.edu/StudentWebMVC/app/admission/home/')) {
      navigation.navigate('OptionsScreen', { selectedSchool: 'UCLA' }); // Explicitly pass 'UCLA' as selectedSchool
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: url }}
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState
        renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
      />
    </View>
  );
}

export default LoginScreen;