import React, { useState } from 'react';

import {
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
//html

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>How to adult!</Text>

      <ScrollView vertical>
        <View style={styles.layout}>
          <Box color="yellow" />
          <Box color="green" />
          <Box color="blue" />
        </View>

        <Button title="Profile page" onPress={() => navigate('profile')} />

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            source={{
              uri: 'https://www.edarabia.com/wp-content/uploads/2020/02/little-flower-academy-vancouver-canada.jpg',
            }}
            style={styles.images}
          />
        </View>

        <Text style={{ fontSize: 16 }}>
          Press to <Text style={{ fontWeight: 'bold' }}>Start</Text>
        </Text>
      </ScrollView>

  <View
    style={{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 16,
    }}>
<Text style={{ marginVertical: 10, marginHorizontal: 100 }}>
  {' '}
  {name ? `Welcome ${name}!` : 'What is your name?'}{' '}
</Text>

<TextInput
  style={{ padding: 20, backgroundColor: '#f5f5f5' }}
  onChangeText={(text) => setName(text)}></TextInput>
  </View>
</View>
  );
}

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const Box = (props) => (
  // Move a box `View` component here
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'beige',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  images: {
    width: 100,
    height: 100,
    margin: 100,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 1.3,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0.3 },
  },
  layout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#e5e5e5',
  },
});