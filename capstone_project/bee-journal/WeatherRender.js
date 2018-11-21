import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';

//import Card from '../Card';
//import CardSection from '../CardSection';

export default class Weather extends React.Component {


  render() {
    var icon = this.props.img ? require('./assets/sunny.png') : require('./assets/sunny.png');
    return (
        <View style={
            styles.container
          }>
        <View>
        <Text style={{fontSize: 40, fontFamily: 'Futura', padding: 50}}>{this.props.description}</Text>
        </View>
        <View>
        <Image style={{padding: 50, height: 200, width: 200}} source={icon}/>
        </View>
        <View style={{padding: 50, flexWrap: 'wrap'}}>
        <Text style={{fontSize: 25}}>{this.props.message}</Text>
        </View>
          

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