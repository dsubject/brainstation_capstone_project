import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';

import WeatherRender from './WeatherRender';

export default class Weather extends React.Component {


  render() {
    return (
        <View style={styles.container}>
        {this.props.weather.map((weatherCopy, index) => 
        <WeatherRender
            key={index}
            index={index}
            description={weatherCopy.description} 
            message={weatherCopy.message}
            img={weatherCopy.img}
            />
          
        )}
    </View>
    );
  }
}

 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffc943',
      alignItems: 'center',
      justifyContent: 'center'
    },


});