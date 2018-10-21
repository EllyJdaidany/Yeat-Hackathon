import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
//import DeviceInfo from 'react-native-device-info';

export default class RegScreen extends React.Component {
  constructor(props) {
  super(props);
  this.state = { name: "",
                 address: "",
                 type: "restaurants",
               };
}
  render() {
    return (
      <View style={styles.container}>
      <Header style={{paddingTop: 20, height: 80, backgroundColor: '#61c5ec'}}>
        <Left style={{marginLeft: -130,}}>
          <Icon name="menu" size={24} onPress={() => this.props.navigation.openDrawer()}/>
        </Left>
      </Header>
        <View style={styles.centering}>
          <Text style={styles.headText}>Food</Text>

        <Text style={styles.textInLabel}>Name</Text>
        <TextInput
        underlineColorAndroid='transparent'
          autoCorrect={false}
          style={styles.textIn}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />

        <Text style={styles.textInLabel}>Address</Text>
        <TextInput
        underlineColorAndroid='transparent'
          autoCorrect={false}
          style={styles.textIn}
          onChangeText={(address) => this.setState({address})}
          value={this.state.address}
        />

        <Text style={styles.textInLabel}>Type of business</Text>
        <Picker
          selectedValue={this.state.type}
          style={styles.textIn}
          onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
          <Picker.Item label="Restaurant" value="restaurants" />
          <Picker.Item label="Food Bank" value="foodBank" />
        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.sendData()}
        >
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  sendData(){
    console.log("Send Data:", this.state.name );
    fetch('http://demonhacks-1.appspot.com/api/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'uuid': '1'
      },
      body: JSON.stringify({
        name: this.state.name,
        address: this.state.address,
        type: this.state.type == "restaurants" ? true : false
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      console.log(this.state.type);

      if(this.state.type == "restaurants"){
        this.props.navigation.navigate('Restaurant Home');
      }
      else {
        this.props.navigation.navigate('Bank Home');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }






}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  centering: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textIn : {
    width: '80%',
    height: 40,
    borderColor: '#61c5ec',
    borderWidth: 1,
  },

  textInLabel: {
    position: 'relative',
    marginTop: 25,
    fontSize: 16,
  },

  button : {
    width: '80%',
    height: 50,
    marginTop: 25,
    backgroundColor: '#2f395c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#f2f2f2',
    fontSize: 16,
  },

  headText: {
    fontSize: 24,
    justifyContent: 'center',
    marginTop: 50,
  }
});
