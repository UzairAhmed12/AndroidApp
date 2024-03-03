// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from './pages/login'; // Import the LoginPage component from the appropriate path

const App = () => {
  return (
    <View style={styles.container}>
      {/* Render the LoginPage component */}
      <LoginPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the container occupies the full screen
  },
});

export default App;
