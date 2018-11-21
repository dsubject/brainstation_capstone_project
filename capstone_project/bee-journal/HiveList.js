import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions, NavigationActions } from 'react-native-router-flux';
import { Icon, Button } from 'react-native-elements'

import Card from './Card';
import CardSection from './CardSection';


export default class HiveList extends React.Component {

renderHives = () => {
    return this.props.hives.map((hive, index )=>{
      return <CardSection key={hive.name}> 
                
                <TouchableOpacity onPress={() =>{this.props.pleaseWork(index)}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image resizeMode="contain" style={{height: 80}} source={require('./assets/hive6.png')} />
                <Text  style={{fontSize: 25, fontFamily: 'Futura'}} >
                    {hive.name}
                </Text>
                <Icon
                  size={30}
                  name='keyboard-arrow-right' 
                />
                <View style = {{justifyContent: 'flex-end'}}>
                 <Button 
                onPress={() =>{this.props.deleteHive(hive.id)}}
                title='X'
                backgroundColor='#ffc943'
                />
                </View>
                </View>
                </TouchableOpacity>
               
                
              </CardSection>
          });
  }

  render() {
    
    return (
      <View style={
        styles.container
      }>
        <Card>
          {this.renderHives()}
        </Card>
      </View>
    );
  }
}



 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffc943'
  },  
  rowContainer: {
    flexDirection: 'row'
  }
});