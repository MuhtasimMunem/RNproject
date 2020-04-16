/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView horizontal={true}
      pagingEnabled={true}
      style={styles.container}>
      <View style={styles.outer}>
        <Text style={styles.innerText}>Here is my app</Text>
      </View>
      <View style={[styles.outer,styles.red]}>
        <Text style={styles.innerText}>Best Platform for Online Videos</Text>
      </View>
      <View style={[styles.outer,styles.green]}>
        <Text style={styles.innerText}>Available in Android and iOS</Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  outer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,

  },

  red:{
    backgroundColor: '#E44236',
  },

  green:{
    backgroundColor: '#2ecc72',
  },
  innerText:{
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
