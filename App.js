import React from 'react';
import { StyleSheet, Text, Platform, KeyboardAvoidingView, ImageBackground } from 'react-native';
import SearchInput from './components/SearchInput'


export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      <ImageBackground
        source = {require('./assets/rainybg.jpg')}
        style = {styles.imageContainer}
        imageStyle = {styles.image} 
      />

      <Text style={[styles.textStyle, styles.largeText]}>San Francisco</Text>
      <Text style={[styles.textStyle, styles.smallText]}>Light Cloud</Text>
      <Text style={[styles.textStyle, styles.largeText]}>32 Degrees</Text>  

      <SearchInput placeholder='Search any city!' />

    </KeyboardAvoidingView>
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
