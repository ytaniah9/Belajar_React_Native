import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
 
export default class HomeScreen extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Text>Open up Navigasi.js to start working on your app!</Text>
			</View>
			);
		}
	}
 
const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifContent: 'center',
	},
});