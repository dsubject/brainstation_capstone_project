import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Card from '../Card';
import CardSection from '../CardSection';

export default class SpringRender extends React.Component {

/* myAlerts = () => {
  Actions.summer()
  }  */ 

  render() {


    return (
      <View style={
        styles.container
      }>
      <Card>
      <CardSection>
      <CheckBox
        title='Check hives for Queen'
        checked={this.props.queen}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSpringChecked(this.props.index, 'queen')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Remove entrance reducer'
        checked={this.props.reducer}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSpringChecked(this.props.index, 'reducer')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Take off winter wrapping'
        checked={this.props.covering}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSpringChecked(this.props.index, 'covering')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='If colony is weak, feed'
        checked={this.props.feed}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSpringChecked(this.props.index, 'feed')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Administer Spring treatments'
        checked={this.props.treatments}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSpringChecked(this.props.index, 'treatments')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Split strong colonies'
        checked={this.props.split}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleSpringChecked(this.props.index, 'split')}
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