import React, { createContext, useContext, useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text styles={styles.title}>How to Adult</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "600",
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
