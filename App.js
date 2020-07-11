import React from 'react';
import { StyleSheet, Text, Platform, KeyboardAvoidingView, View, ImageBackground } from 'react-native';
import SearchInput from './components/SearchInput'


export default function App() {
  
  const location = "San Francisco"

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        source = {require('./assets/rainybg.jpg')}
        style = {styles.imageContainer}
        imageStyle = {styles.image}
        >

        <View style = {styles.detailsContainer}>
          <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
          <Text style={[styles.textStyle, styles.smallText]}>{}</Text>
          <Text style={[styles.textStyle, styles.largeText]}>32 Degrees</Text>
          <SearchInput placeholder='Search any city!' />
        </View>

      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
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
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  }
});
