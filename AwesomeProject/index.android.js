import React, { Component } from 'react';
import { Alert, AppRegistry, View, Text, Button } from 'react-native';
import { Camera } from 'react-native-camera';
import message from './wickedService';
import CamComponent from './app/camComponent'

export default class FlexDirectionBasics extends Component {
  _onPressButton() {
    Alert.alert('Button pressed');
  }

  _onBarCodeRead(data) {
    Alert.alert(JSON.stringify(data));
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 350, height: 50, backgroundColor: 'powderblue', flexDirection:'row'}}>
          <Text style={{fontSize: 40, borderColor: 'green', borderWidth:2}}>{message}</Text>
          <Button onPress={this._onPressButton} title='press it bitch' />
        </View>
        <View style={{width: 350, height: 50, backgroundColor: 'powderblue', flexDirection:'row'}}>
          <CamComponent onBarCodeRead={_onBarCodeRead} />
        </View>
      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => CamComponent);