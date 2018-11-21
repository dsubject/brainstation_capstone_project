import React from 'react';
import { StyleSheet, View } from 'react-native';


import RenderRadioList from './RenderRadioList';

export default class InspectRadio extends React.Component {


  render() {


    return (

      <View style={styles.container}>
      {this.props.hives.filter((foundhive, i) => {
        return this.props.currentHive === i;
      }).map((hive, index)=> {
      return <RenderRadioList
            key={index}
            index={this.props.currentHive}
            name={hive.name} 
            aggressive={hive.aggressive} 
            calm={hive.calm}
            low={hive.low}
            normal={hive.normal}
            thriving={hive.thriving}
            toggleChecked={this.props.toggleChecked}
          />}
        )}
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

