import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {CalendarList} from 'react-native-calendars';
//import { Actions } from 'react-native-router-flux';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    Actions.checklist()
  } 

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Select a date</Text>
        <CalendarList
          onDayPress={this.onDayPress}
          /* style={styles.calendar} */
          /* hideExtraDays  */
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}}}
        />
      </ScrollView>
    );
  }

/*    onDayPress(day) {
    console.log('do nothing');
  }  */

/*  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }  */
} 

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: '#ffc943',
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#ffc943'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffc943'
  }
});