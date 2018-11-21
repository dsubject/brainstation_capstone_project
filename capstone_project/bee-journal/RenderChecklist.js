import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

export default class RenderChecklist extends React.Component {

myAlerts = () => {
  Actions.radio()
  }  

  render() {


    return (
      <View style={
        styles.container
      }>
      <Card>
      <CardSection>
      <CheckBox
        title='Queenright'
        checked={this.props.queen}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'queen')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Capped Honey'
        checked={this.props.capped}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'capped')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Uncapped Honey'
        checked={this.props.uncapped}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'uncapped')}
      />
      </CardSection>
      <CardSection>
      <CheckBox
        title='Laying Workers'
        checked={this.props.laying}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}
        uncheckedColor='white'
        checkedColor='black'
        onPress={()=>this.props.toggleChecked(this.props.index, 'laying')}
      />
      </CardSection>

    <CardSection>
      <Text style={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}>Population:</Text>
    </CardSection>
      <CardSection>
      <CheckBox
        title='Low'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.props.low}
        containerStyle={{backgroundColor: '#ffc943', borderWidth: 0}}
        textStyle={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}
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
        textStyle={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}
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
        textStyle={{fontSize: 20, color: '#75553F', fontFamily: 'Futura'}}
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
        onPress={() =>{this.props.goBack()}}
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
    flexGrow: 1,
    backgroundColor: '#ffc943'
  },  


});