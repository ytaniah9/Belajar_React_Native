import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

export default class Screen extends Component<{}>{
	render() {
		return (
			<View style={styles.container}>
			<StatusBar
			backgroundColor"#1c313a"
			barStyle="light-content"
			/>
			<Routes/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
	}
});