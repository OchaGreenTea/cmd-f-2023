import React, { createContext, useContext, useState } from 'react';
import {
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Profile = () => {
  return (
    <View>
      <View>
      <Text style = {styles.title}>Profile</Text>
      </View>
<Image
          source={require('../assets/Profile.png')}
          style={styles.banner}
        />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
