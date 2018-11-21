import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Home from './Home';
import Seasons from './Seasons';
import Spring from './seasons/Spring';
import Summer from './seasons/Summer';
import Fall from './seasons/Fall';
import Winter from './seasons/Winter';
import HiveList from './HiveList'
import Weather from './Weather'
import NewHive from './NewHive';
import InspectChecklist from './InspectChecklist';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hives: [],
      weather: [{
        /* description: 'Clear Sky',
        message: 'A great day to beekeep!',
        img: true */
      }],
      spring: [
            {
              spring: 'Spring',
              queen: false,
              reducer: false,
              covering: false,
              feed: false,
              treatments: false,
              split: false
            }
          ],
          summer: [
            {
              summer: 'Summer',
              summerqueen: false,
              mitecheck: false,
              supers: false,
              springharvest: false,
              queenquality: false,
              swarm: false
            }
          ],
          fall: [
            {
              fall: 'Fall',
              fallqueen: false,
              falltreatments: false,
              feedfall: false,
              harvestfall: false,
              robbing: false,
              fallreducers: false
            }
          ],
          winter: [
            {
              winter: 'Winter',
              insulate: false,
              ventilation: false,
              enjoy: false
            }
          ],
          currentHive: 0
    }
}

componentWillMount(){
  axios.get('http://192.168.2.15:8080/hives')
  .then(result => {
      this.setState({
          hives: result.data
      });
      console.log('THIS IS RESULTSSSSS', result.data);
  })
  .catch(error => {
      console.log(error);
  });
}

componentDidMount(){
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&id=<api_key>')
  .then(results =>  {
    console.log(results.data.weather[0].description, results.data.weather[0].id);
    let weather = this.state.weather.map((weatherCopy) => {
      if(results.data.weather[0].id <= 622 || results.data.weather[0].id >= 900){
      return {
       description: results.data.weather[0].description,
       message: 'Not a great day to beekeep!',
       img: false
      }
    } else if (results.data.weather[0].id >= 800 && results.data.weather[0].id <= 804) {
      return {
        description: results.data.weather[0].description,
        message: "A great day to beekeep!",
        img: true
       }
    }
    })
    this.setState({
      weather: weather
    })
    console.log(this.state.weather)
  })
  .catch(error => {
    console.log(error);
  });
}

createHive = name => {
  axios.post('http://192.168.2.15:8080/hives', {
        name: name,
        queen: false,
        capped: false,
        uncapped: false,
        laying: false,
        aggressive: false,
        calm: false,
        low: false,
        normal: false,
        thriving: false
  })
  .then(response => {
    this.setState({
      hives: this.state.hives.concat(response.data)
    },  ()=>{
      //console.log(this.state.hives)
      Actions.pop({refresh:{hives:this.state.hives}})
    })
  })
  .catch(error => {
    console.log(error);
  });
}

deleteHive = id => {
  axios.delete('http://192.168.2.15:8080/hives', {data: {id: id}})
  .then(results => {
    console.log('log from delete',results.data);
    this.setState({ hives: results.data }
      ,  ()=>{
        //console.log(this.state.hives)
        Actions.hives()
        Actions.pop({refresh:{hives:this.state.hives}})
      })
  })
  .catch(err => {
    console.log(err)
  })
}

  toggleSpringChecked = (index, prop) =>{
    springCopy = [...this.state.spring];
    console.log(prop)
    springCopy[index][prop] = !springCopy[index][prop]
      this.setState({
        spring: springCopy
    })
  }

  toggleSummerChecked = (index, prop) =>{
    summerCopy = [...this.state.summer];
    console.log(prop)
    summerCopy[index][prop] = !summerCopy[index][prop]
      this.setState({
        summer: summerCopy
    })
  }

  toggleFallChecked = (index, prop) =>{
    fallCopy = [...this.state.fall];
    console.log(prop)
    fallCopy[index][prop] = !fallCopy[index][prop]
      this.setState({
        fall: fallCopy
    })
  }

  toggleWinterChecked = (index, prop) =>{
    winterCopy = [...this.state.winter];
    console.log(prop)
    winterCopy[index][prop] = !winterCopy[index][prop]
      this.setState({
        winter: winterCopy
    })
  }

  pleaseWork = (index) => {
    Actions.checklist()
    Actions.weather()
    Actions.pop({refresh: {hives: this.state.hives, currentHive: index}})
  }

  goBack = () => {
    Actions.pop({refresh: {hives: this.state.hives}})
  }

  renderWeather = () => {
    Actions.weather()
    Actions.hives()
    Actions.pop({refresh: {weather: this.state.weather}})
  }

  renderHives= () => {
    Actions.hives()
    Actions.weather()
    Actions.pop({refresh: {hives: this.state.hives}})
  }

  toggleChecked = (index, prop) =>{
    hivesCopy = [...this.state.hives];
    console.log(prop)
    hivesCopy[index][prop] = !hivesCopy[index][prop]
      this.setState({
        hives: hivesCopy
    })
  }

  myAlerts = () => {
    Actions.newhive()
  }

  render() {
    console.log(this.state.hives, this.state.currentHive)
    return (
      <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main" >
            <Scene
                    renderWeather={this.renderWeather}
                    renderHives={this.renderHives}
                    key="home" title="Home"
                    component={Home}
                    />
            <Scene key="seasons" title="Seasonal Checklist" component={Seasons} />
            <Scene spring={this.state.spring} toggleSpringChecked={this.toggleSpringChecked} key="spring" title="Spring Checklist" component={Spring} />
            <Scene summer={this.state.summer} toggleSummerChecked={this.toggleSummerChecked} key="summer" title="Summer Checklist" component={Summer} />
            <Scene fall={this.state.fall} toggleFallChecked={this.toggleFallChecked} key="fall" title="Fall Checklist" component={Fall} />
            <Scene winter={this.state.winter} toggleWinterChecked={this.toggleWinterChecked} key="winter" title="Winter Checklist" component={Winter} />

            <Scene
                hives={this.state.hives}
                pleaseWork={this.pleaseWork}
                deleteHive={this.deleteHive}
                rightTitle="Add"
                onRight={() =>{this.myAlerts()}}
                key="hives"
                title="Hives"
                component={HiveList}
              />
            <Scene weather={this.state.weather} key="weather" title="Today's Weather" component={Weather} />
            <Scene
                    createHive={this.createHive}
                    key="newhive"
                    title="New Hive"
                    component={NewHive}
                  />
            <Scene
                    hives={this.state.hives}
                    goBack={this.goBack}
                    currentHive={this.state.currentHive}
                    toggleChecked={this.toggleChecked}
                    key="checklist"
                    title="Inspection Checklist"
                    component={InspectChecklist}
                  />
        </Scene>



      </Scene>
    </Router>
    );
  }
}




/*
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffc943',
    alignItems: 'center',
    justifyContent: 'center'
  },
}); */