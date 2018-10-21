import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
import {LinearGradient, Font} from 'expo';

export default class DonateFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    fontLoaded: false,
  };
}

async componentDidMount() {
await Font.loadAsync({
  'Roboto-Thin': require('../fonts/Roboto-Thin.ttf'),
});

this.setState({ fontLoaded: true });
}
  render() {
    return (
      <View style={styles.container}>
        <Header style={{paddingTop: 20, height: 80, backgroundColor: '#002a4d'}}>
          <Left style={{marginLeft: -130,}}>
          <Icon name="arrow-left" type="FontAwesome" size={24} style={{color: '#f2f2f2'}}
          onPress={() => this.props.navigation.navigate('Restaurant Home')}/>
          </Left>
        </Header>

        <View style={styles.intro}>
        <LinearGradient
          colors={['#002a4d', '#14568c', '#80c6ff']}
          style={{ height: 150, padding: 15, alignItems: 'center', }}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.head}>
                {"Donate to Y'eat"}
              </Text>
            ) : null
          }
            </LinearGradient>
        </View>

        <View style={styles.centering}>
          <TouchableOpacity
            style={styles.donateBtn}
            onPress={() => this.props.navigation.navigate('Camera')}
          >
          <Icon size={50} name="camera" style={styles.cameraIcon}/>
          {
            this.state.fontLoaded ? (
              <Text style={styles.donateText}>
                {"Donate via camera"}
              </Text>
            ) : null
          }
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.reqBtn}
            onPress={() => this.props.navigation.navigate('Donate via category')}
          >
          <Icon name={"clipboard"} type="FontAwesome" size={24} style={styles.clipboardIcon}/>
          {
            this.state.fontLoaded ? (
              <Text style={styles.reqText}>
                {"Donate via list selection"}
              </Text>
            ) : null
          }
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

  donateBtn: {
    marginTop: 15,
    width: '90%',
    height: 180,
    backgroundColor: '#14568c',
  },

  cameraIcon: {
    color: '#f2f2f2',
    position: 'absolute',
    marginTop: 75,
    marginLeft: 35,
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
    marginTop: 72,
    marginLeft: 75,
    fontFamily: 'Roboto-Thin',
  },

  reqText: {
    fontSize: 24,
    color: '#f2f2f2',
    marginTop: 72,
    marginLeft: 75,
    fontFamily: 'Roboto-Thin',
  },

  reqBtn: {
    marginTop: 15,
    width: '90%',
    height: 180,
    backgroundColor: '#14568c',
  },
  intro: {
    height: 150,
    backgroundColor: '#002a4d',
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
    fontFamily: 'Roboto-Thin',
  },

});
