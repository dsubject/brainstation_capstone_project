import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';


export default class OtherInput extends React.Component {

    myAlerts = () => {
        console.log('submitting form!');
      }

  render() {
    return (
        <View style={
            styles.container
          }>
          <Card>
        <CardSection>
        <Text style={{fontSize: 20}}>Other: (optional)</Text>
        </CardSection>
        
      <TextInput style = {styles.input}
                underlineColor = "transparent"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}
                />
         

         <CardSection>
        <View style={{flex:1}}>
        {/* <Button
          style={{alignSelf:'center'}}
          onPress={() =>{this.myAlerts()}}
          title="Next"
          color="purple"
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <Button
        raised
        right
        //icon={{name: 'cached'}}
        onPress={() =>{this.myAlerts()}}
        title='Submit'
        backgroundColor='pink'
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
        },
        input: {
          margin: 15,
          height: 60,
          borderColor: 'gray',
          borderWidth: 1,
          fontSize: 20
       }
      
      
      });
