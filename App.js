import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Push Notifications Using Firebase</Text>
      </View>
    )
  }
}
export default App;