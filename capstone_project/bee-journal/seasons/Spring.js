import React from 'react';
import { StyleSheet, View } from 'react-native';


import SpringRender from './SpringRender';

export default class Spring extends React.Component {


  render() {

    return (

      <View style={styles.container}>
      {this.props.spring.map((springCopy, index) => 
      <SpringRender
          key={index}
          index={index}
          queen={springCopy.queen} 
          reducer={springCopy.reducer} 
          covering={springCopy.covering}
          feed={springCopy.feed}
          treatments={springCopy.treatments}
          split={springCopy.split}
          toggleSpringChecked={this.props.toggleSpringChecked}
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