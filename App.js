import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, styles.largeText]}>San Francisco</Text>
      <Text style={[styles.textStyle, styles.smallText]}>Light Cloud</Text>
      <Text style={[styles.textStyle, styles.largeText]}>32 Degrees</Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  }
});
