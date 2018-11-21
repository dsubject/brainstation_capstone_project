import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
//import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

export default class RenderRadioList extends React.Component {

  /* myAlerts = () => {
    Actions.other()
  } */

  render() {
    return (
      <View style={
        styles.container
      }>
      <Card>
      <CardSection>
      <Text style={{fontSize: 20}}>Temperment:</Text>
      </CardSection>
    <CardSection>
    <CheckBox
        title='Aggressive'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.props.aggressive}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 17}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'aggressive')}
    />
    </CardSection>
    
    <CardSection>
    <CheckBox
        title='Calm'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.props.calm}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 17}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'calm')}
    />
    </CardSection>
    
    <CardSection>
      <Text style={{fontSize: 20}}>Population:</Text>
    </CardSection>
      <CardSection>
      <CheckBox
        title='Low'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.props.low}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 17}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'low')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Normal'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.props.normal}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 17}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'normal')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Thriving'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.props.thriving}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 17}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'thriving')}
      />
      </CardSection>
      
       <CardSection>
        <View style={{flex:1}}>
        <Button
        raised
        right
        onPress={() =>{this.myAlerts()}}
        title='Submit'
        backgroundColor='#FFA015'
        />

        </View>
        </CardSection>

      </Card>
      </View>
    );
  }
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc943'
  }

});