import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
      
	      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
	      <Text style={styles.welcome}>Bienvenue !</Text>
	      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
	      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('Myfirstapp', () => FlexDimensionsBasics);