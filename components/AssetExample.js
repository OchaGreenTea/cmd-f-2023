import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor. Apparently.
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

//css
const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    padding: 50,
  },
  paragraph: {
    margin: 50,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'italic',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
