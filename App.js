import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Providers
import Navigation from "./src/providers/NavigationProvider";

const App = () => {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
