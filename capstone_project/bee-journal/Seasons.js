import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends React.Component {
    //<View style={{flex: 1, flexDirection: 'row'}}>


  render() {
    return (
        <View style={
            styles.container
          }>
          
          <TouchableOpacity onPress={() =>{Actions.spring()}}>
            <View  style={{padding: 1}} >
              <Image resizeMode="contain" source={require('./assets/raindrop.png')} />
               <Text style={{alignSelf: 'center', fontSize: 20}}></Text> 
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{Actions.summer()}}>
            <View style={{padding: 1}} >
              <Image resizeMode="contain" source={require('./assets/sun.png')} />
               <Text style={{alignSelf: 'center', fontSize: 20}}></Text> 
            </View>
            </TouchableOpacity>
          
          
    
        
            <TouchableOpacity onPress={() =>{Actions.fall()}}>
            <View  style={{padding: 1}} >
              <Image resizeMode="contain" source={require('./assets/fall.png')} />
               <Text style={{alignSelf: 'center', fontSize: 20}}></Text> 
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{Actions.winter()}}>
            <View style={{padding: 1}} >
              <Image resizeMode="contain" source={require('./assets/snowflake.png')} />
               <Text style={{alignSelf: 'center', fontSize: 20}}></Text> 
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
      justifyContent: 'center',
      
    },


  /*   containertwo: {
      flex: 1,
      backgroundColor: '#ffc943',
      //alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      //flexDirection: 'column'
    },
    containerthree: {
      flex: 1,
      backgroundColor: '#ffc943',
      //alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      //flexDirection: 'column'
    } */


});

 

