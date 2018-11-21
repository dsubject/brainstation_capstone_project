import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends React.Component {

 goToHives = () => {
    Actions.hives()
  }

  goToSeasons = () => {
    Actions.seasons()
  }

  goToWeather = () => {
    Actions.weather()
  }

  render() {
    return (
        <View style={
            styles.container
          }>
          <TouchableOpacity onPress={() =>{this.props.renderHives()}}>
            <View style={{padding: 10}}>
              <Image resizeMode="contain" source={require('./assets/hive6.png')} />
              <Text style={{alignSelf: 'center', fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}>My Hives</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{this.goToSeasons()}}>
            <View style={{padding: 10}}>
              <Image resizeMode="contain" source={require('./assets/checklist.png')} />
              <Text style={{alignSelf: 'center', fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}>Seasonal</Text>
              <Text style={{alignSelf: 'center', fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}>Checklist</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{this.props.renderWeather()}}>
            <View style={{padding: 10}}>
              <Image resizeMode="contain" source={require('./assets/weather.png')} />
              <Text style={{alignSelf: 'center', fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}>Today's</Text>
              <Text style={{alignSelf: 'center', fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}>Weather</Text>
            </View>
            </TouchableOpacity>

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