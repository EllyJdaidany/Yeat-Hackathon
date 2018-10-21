import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';

export default class BankHome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={{paddingTop: 20, height: 80, backgroundColor: '#793698'}}>
          <Left style={{marginLeft: -130,}}>
            <Icon name="menu" size={24} style={{color: '#f2f2f2'}} onPress={() =>
              this.props.navigation.openDrawer()}/>
          </Left>
        </Header>

        <View style={styles.intro}>
          <View style={styles.centering}>
            <Text style={styles.head}>Welcome back, Feeding America</Text>
          </View>
        </View>

        <View style={styles.centering}>
          <TouchableOpacity
            style={styles.donateBtn}
            onPress={() => this.props.navigation.navigate('Request Food')}
          >
          <Icon size={50} name="car" style={styles.carIcon}/>
          <Text style={styles.donateText}>Request food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.reqBtn}
            onPress={() => this.props.navigation.navigate('Available Food')}
          >
          <Icon name={"clipboard"} type="FontAwesome"size={24} style={styles.clipboardIcon}/>
          <Text style={styles.reqText}>See Available food</Text>
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

  carIcon: {
    color: '#f2f2f2',
    position: 'absolute',
    marginTop: 77,
    marginLeft: 85,
  },

  clipboardIcon: {
    color: '#f2f2f2',
    marginTop: 75,
    position: 'absolute',
    marginLeft: 35,
  },

  donateText: {
    fontSize: 24,
    color: '#f2f2f2',
    marginTop: 75,
    marginLeft: 115,
  },

  reqText: {
    fontSize: 24,
    color: '#f2f2f2',
    marginTop: 75,
    marginLeft: 75,
  },

  reqBtn: {
    marginTop: 15,
    width: '90%',
    height: 180,
    backgroundColor: '#c18eda',
  },

  donateBtn: {
    marginTop: 15,
    width: '90%',
    height: 180,
    backgroundColor: '#c18eda',
  },

  intro: {
    height: '25%',
    backgroundColor: '#793698',
  },
  centering: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },
  head: {
    color:'#f2f2f2',
    fontSize: 22,
    marginTop: '12.5%',
    fontFamily: 'Roboto',
  },

});
