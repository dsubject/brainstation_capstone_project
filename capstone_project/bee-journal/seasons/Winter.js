import React from 'react';
import { StyleSheet, View } from 'react-native';


import WinterRender from './WinterRender';

export default class Winter extends React.Component {


  render() {

    return (

      <View style={styles.container}>
      {this.props.winter.map((winterCopy, index) => 
      <WinterRender
          key={index}
          index={index}
          insulate={winterCopy.insulate} 
          ventilation={winterCopy.ventilation} 
          enjoy={winterCopy.enjoy}
          toggleWinterChecked={this.props.toggleWinterChecked}
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