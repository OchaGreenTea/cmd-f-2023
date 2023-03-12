import React, { createContext, useContext, useState } from 'react';
import {
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = () => {
   
  
  return (
    <View style={styles.container}>
      <Text style = {styles.titleText}>How to Adult</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/HomeScreenLogo.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}  onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner: {
    height: 600,
    width: 600,
    marginBottom: 150,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: '100%',
    backgroundColor: '#16166B',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  titleText:{
    fontSize: 50,
    fontWeight: '600',
    color: 'black',
    alignItems: 'center',
  }
});
