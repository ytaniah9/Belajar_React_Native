import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet } from 'react-native';

export class Settings extends Component {
  render() {
    return (
	<View> 
		<Image
                    style={{width: 120, height: 120,marginLeft:120,marginTop:30}}
                    source={require('/Users/Savana/hai35/haihai35/images/fb.png')}
                />
		
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Email atau Telepon"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 40,flexDirection: 'row',justifyContent: 'space-between'}}
		onPress={() => this.props.navigation.navigate('HomeScreen')} title="Login"
                color="#08298A"
                />
            </View>
    )
  }
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#00ff',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
  }
});


export default Settings;