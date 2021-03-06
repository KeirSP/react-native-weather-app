import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Platform, 
  KeyboardAvoidingView, 
  View, 
  ImageBackground,
  ActivityIndicator,
  StatusBar 
 } from 'react-native';
import SearchInput from './components/SearchInput';
import { fetchLocationId, fetchWeather, fetchBackground } from './utils/api'


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
      source: 'https://images.unsplash.com/photo-1592229127216-2b90ca9cd13d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
    }
  }

  componentDidMount() {
    this.handleUpdateLocation("San Francisco")
  }

  handleUpdateLocation = async city => {
    if (!city) return;
    
    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, temperature, weather } = await fetchWeather(
          locationId,
        );
        const uri = await fetchBackground(weather);

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
          source: uri
        })

      } catch (e) {
        this.setState({
          loading: false,
          error: true
        })
      }
    })

  }

  render () {
    const { loading, error, location, weather, temperature, source } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source = {{uri : source}}
          //refactor this to use an unsplash source API call
          style = {styles.imageContainer}
          imageStyle = {styles.image}
          >

          <View style = {styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="white" size="large"/>

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.textStyle, styles.smallText]}>
                    Could not load weather, please try a different location.
                  </Text>
                )}
                {!error && (
                  <View>
                    <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
                    <Text style={[styles.textStyle, styles.smallText]}>{weather}</Text>
                    <Text style={[styles.textStyle, styles.largeText]}>{`${Math.round(temperature)}°`}</Text>
                  </View>      
                )}
              </View>
            )}

            <SearchInput placeholder='Search any city!' onSubmit = {this.handleUpdateLocation} />
          </View>

        </ImageBackground>
      </KeyboardAvoidingView>
    );
}
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
})
