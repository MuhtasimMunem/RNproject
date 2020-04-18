/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class MyForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="Username"
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
           <Text style={styles.buttonText}>Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input:{
    borderRadius: 25,
    color: '#2F363F',
    height: 40,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingLeft: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonContainer:{
    backgroundColor: '#45CE30',
    height: 35,
    borderRadius: 25,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    textAlign: 'center',
    fontWeight: 'bold',
    color:'#fff',
  },
});
