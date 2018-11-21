import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Card from '../Card';
import CardSection from '../CardSection';

export default class WinterRender extends React.Component {

myAlerts = () => {
  Actions.seasons()
  }  

  render() {


    return (
      <View style={
        styles.container
      }>
      <Card>
      <CardSection>
      <CheckBox
        title='Insulate hives'
        checked={this.props.insulate}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleWinterChecked(this.props.index, 'insulate')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Check for adequate ventilation'
        checked={this.props.ventilation}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleWinterChecked(this.props.index, 'ventilation')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Sit back and wait for Spring'
        checked={this.props.enjoy}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleWinterChecked(this.props.index, 'enjoy')}
      />
      </CardSection>

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


});