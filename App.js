import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul'

export default class App extends Component {
  render() {
    return (
      <View>
        <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Judul title="FORM"/>
        <Text>Nama: Yohanna Tania Hartanto </Text>
        <Text>Kelas: XI_RPL 4 </Text>
        <Text>No.Absen: 35 </Text>
        <Image style={{width: 500, height:400}}
        source={require('./cici.jpg')}
        />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});