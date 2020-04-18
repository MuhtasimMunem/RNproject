/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MyForm from './MyForm'
export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior = "padding" style={styles.container}>
        <View style={styles.logocontainer}>
        <Image
        style={styles.logo}
        source={require('./images/lcologo.png')}
        />
        <Text style={styles.title}> A Simple Login Window
        </Text>
        </View >
          <View style={styles.MyForm}>
            <MyForm />
          </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#2B2B52',
    width: Dimensions.get('window').width,

  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 100,
    width: 100,
  },

  title:{
    color: '#fff',
  },
  MyForm:{
    flex:1,
  },

});
