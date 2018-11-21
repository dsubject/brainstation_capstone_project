import React from 'react';
import { StyleSheet, View } from 'react-native';


import SummerRender from './SummerRender';

export default class Spring extends React.Component {


  render() {

    return (

      <View style={styles.container}>
      {this.props.summer.map((summerCopy, index) => 
      <SummerRender
          key={index}
          index={index}
          summerqueen={summerCopy.summerqueen} 
          mitecheck={summerCopy.mitecheck} 
          supers={summerCopy.supers}
          springharvest={summerCopy.springharvest}
          queenquality={summerCopy.queenquality}
          swarm={summerCopy.swarm}
          toggleSummerChecked={this.props.toggleSummerChecked}
          /> 
        
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