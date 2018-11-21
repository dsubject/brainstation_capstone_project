import React from 'react';
import { StyleSheet, View } from 'react-native';


import RenderChecklist from './RenderChecklist';

export default class InspectChecklist extends React.Component {


  render() {
   

    return (

      <View style={styles.container}>
      {this.props.hives.filter((foundhive, i) => {
        return this.props.currentHive === i;
      }).map((hive, index)=> {
      return <RenderChecklist
          key={index}
          index={this.props.currentHive}
          name={hive.name} 
          queen={hive.queen} 
          capped={hive.capped}
          uncapped={hive.uncapped}
          laying={hive.laying}
          aggressive={hive.aggressive} 
          calm={hive.calm}
          low={hive.low}
          normal={hive.normal}
          thriving={hive.thriving}
          toggleChecked={this.props.toggleChecked}
          goBack={this.props.goBack}
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