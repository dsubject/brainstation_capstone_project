import React from 'react';
import { StyleSheet, View } from 'react-native';


import FallRender from './FallRender';

export default class Fall extends React.Component {


  render() {

    return (

      <View style={styles.container}>
      {this.props.fall.map((fallCopy, index) => 
      <FallRender
          key={index}
          index={index}
          fallqueen={fallCopy.fallqueen} 
          falltreatments={fallCopy.falltreatments} 
          feedfall={fallCopy.feedfall}
          harvestfall={fallCopy.harvestfall}
          robbing={fallCopy.robbing}
          fallreducers={fallCopy.fallreducers}
          toggleFallChecked={this.props.toggleFallChecked}
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