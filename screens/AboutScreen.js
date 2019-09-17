import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class AboutScreen extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This is a test
        </Text>
        <Text style={styles.text}>
          This is a different test
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#393939',

  }
});