// LoginPage.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can handle login logic, e.g., authenticate user
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <View style={styles.container}>
      {/* Colored View */}
      <View style={styles.coloredView}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Please sign in to your existing account</Text>
      </View>
      
      {/* White View */}
      <View style={styles.whiteView}>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeading}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeading}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*************"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the container occupies the full screen
    flexDirection: 'column',
  },
  coloredView: {
    height: windowHeight / 2 - 100, // Adjusted height to reduce more from the bottom
    backgroundColor: '#FF5733', // Dark orange color
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50, // Round border radius for the top left corner
    borderTopRightRadius: 50, // Round border radius for the top right corner
    overflow: 'hidden', // Ensure the rounded borders are visible
    paddingHorizontal: 20,
    marginTop: -20, // Move the whiteView up by reducing the marginTop
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
  },
  fieldContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left side
    marginTop: 20,
    width: '80%', // Limit width to 80% to align with text inputs
  },
  fieldHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust the color as needed
    marginBottom: 5,
    marginLeft: 5, // Adjust margin to align with text inputs
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#FF5733', // Orange color
    width: '80%', // Match the width of text inputs
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20, // Add some margin to separate from text inputs
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;
