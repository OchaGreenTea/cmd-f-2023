import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Finances = () => {
  return (
    <ScrollView vertical>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>Finances</Text>
        </View>

        <View style={styles.options}>
          <TouchableOpacity>
            <Text>Concept 1</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Concept 2</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Concept 3</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Concept 4</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Finances;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
});
