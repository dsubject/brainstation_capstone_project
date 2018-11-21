import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Card from '../Card';
import CardSection from '../CardSection';

export default class FallRender extends React.Component {

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
        title='Check hives for Queen'
        checked={this.props.fallqueen}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleFallChecked(this.props.index, 'fallqueen')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Do Fall treatments'
        checked={this.props.falltreatments}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleFallChecked(this.props.index, 'falltreatments')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='If colonies are weak, combine or feed'
        checked={this.props.feedfall}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleFallChecked(this.props.index, 'feedfall')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Harvest honey'
        checked={this.props.harvestfall}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleFallChecked(this.props.index, 'harvestfall')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Check for signs of robbing'
        checked={this.props.robbing}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleFallChecked(this.props.index, 'robbing')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Put on reducers in late Fall'
        checked={this.props.fallreducers}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleFallChecked(this.props.index, 'fallreducers')}
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