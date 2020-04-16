import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Superman from './component/Superman'
import Red from './component/Red'
import Blue from './component/Blue'
import Green from './component/Green'
export default function App() {
  return (
    <View style={styles.container}>
      <Red />
      <Blue />
      <Green />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
