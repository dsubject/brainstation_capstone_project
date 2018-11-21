import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

export default class NewHive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pendingName: '',
    }
  }

  componentWillReceiveProps(prevProps, nextProps){
    console.log('next',nextProps)
  } 

  handleSubmit = () => {
    let name = this.state.pendingName;
    this.props.createHive(name);
    this.setState({
      pendingName: ''
    }) 
}

onChange = value => {
  this.setState({
    pendingName: value
  });
}


    render(){
       return (
          <View style = {styles.container}>
          <Card>
            <CardSection>
            <View style={{flex:1}}>
             <TextInput style = {styles.input}
                underlineColor = "transparent"
                placeholder = "Hive Name"
                placeholderTextColor = "white"
                autoCapitalize = "none"
                onChangeText ={this.onChange}
                />
                </View>
            </CardSection>
            <CardSection>
            <View style={{flex:1}}>
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {this.handleSubmit}>
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
             </View>
             </CardSection>
          </Card>
          </View>
       )
    }
 }
 
 const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#ffc943'
    },
    input: {
       margin: 15,
       height: 45,
       borderColor: '#FFA015',
       borderWidth: 1,
       fontSize: 20
    },
    submitButton: {
       backgroundColor: '#FFA015',
       padding: 10,
       margin: 15,
       height: 45,
    },
    submitButtonText:{
       color: 'white',
       textAlign: 'center',
       fontSize: 20
    }
 })