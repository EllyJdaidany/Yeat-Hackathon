import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';

export default class RegScreen extends React.Component {
  constructor(props) {
  super(props);
  this.state = { text: "",
                 type: "",
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
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Text style={styles.textInLabel}>Address</Text>
        <TextInput
        underlineColorAndroid='transparent'
          autoCorrect={false}
          style={styles.textIn}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
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
          onPress={this.onPress}
        >
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
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
