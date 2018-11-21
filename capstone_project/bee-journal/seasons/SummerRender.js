import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Card from '../Card';
import CardSection from '../CardSection';

export default class SpringRender extends React.Component {

/* myAlerts = () => {
  Actions.seasons()
  }   */

  render() {


    return (
      <View style={
        styles.container
      }>
      <Card>
      <CardSection>
      <CheckBox
        title='Check hives for Queen'
        checked={this.props.summerqueen}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSummerChecked(this.props.index, 'summerqueen')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Do a mite check'
        checked={this.props.mitecheck}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSummerChecked(this.props.index, 'mitecheck')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Stop feeding'
        checked={this.props.supers}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSummerChecked(this.props.index, 'supers')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Harvest Spring honey'
        checked={this.props.springharvest}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSummerChecked(this.props.index, 'springharvest')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Check Queen quality'
        checked={this.props.queenquality}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSummerChecked(this.props.index, 'queenquality')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Check for signs of swarming'
        checked={this.props.swarm}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSummerChecked(this.props.index, 'swarm')}
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