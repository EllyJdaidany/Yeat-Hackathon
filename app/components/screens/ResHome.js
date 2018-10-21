import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
import { LinearGradient, Font } from 'expo';

export default class test extends React.Component {
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
            <Icon name="menu" size={24} style={{color: '#f2f2f2'}} onPress={() =>
              this.props.navigation.openDrawer()}/>
          </Left>
        </Header>

        <View style={styles.intro}>
        <LinearGradient
          colors={['#002a4d', '#14568c', '#80c6ff']}
          style={{ height: 150, padding: 15, alignItems: 'center', }}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.head}>
                Welcome back, Panera
              </Text>
            ) : null
          }
            </LinearGradient>
        </View>

      <View style={styles.topLeftBox}>
        <TouchableOpacity
          style={styles.boxElement}
          onPress={() => this.props.navigation.navigate('See Requested Food')}
        >
            <Text style={styles.reqText}>See{"\n"}Requested{"\n"}food</Text>
            <Icon name={"clipboard"} type="FontAwesome"size={24} style={styles.clipboardIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.topRightBox}>
        <TouchableOpacity
          style={styles.boxElement}
          onPress={() => this.props.navigation.navigate('Donate Food')}
        >
          <Text style={styles.donateText}>Donate food</Text>
          <Icon name={"truck"} type="FontAwesome"size={24} style={styles.carIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.botLeftBox}>
      <TouchableOpacity
        style={styles.boxElement}
        onPress={() => this.props.navigation.navigate('Restaurant Stats')}
      >
        <Text style={styles.graphText}>My stats</Text>
        <Icon name={"line-chart"} type="FontAwesome"size={24} style={styles.graphIcon}/>
      </TouchableOpacity>
      </View>

      <View style={styles.botRightBox}>
        <TouchableOpacity
          style={styles.boxElement}
          onPress={() => this.props.navigation.navigate('Business Profile')}
        >
          <Text style={styles.profileText}>My Profile</Text>
          <Icon name={"user"} type="FontAwesome"size={24} style={styles.userIcon}/>
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

  boxElement: {
    backgroundColor: 'rgba(128,198,255,0.1)',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topLeftBox: {
    position: 'absolute',
    borderColor: '#002a4d',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    height: '30%',
    width: '40%',
    marginTop: 250,
    marginLeft: '6%',
  },

  topRightBox: {
    position: 'absolute',
    borderColor: '#002a4d',
    borderBottomWidth: 1,
    height: '30%',
    width: '40%',
    marginTop: 250,
    marginLeft: '49%',
  },


  botLeftBox: {
    position: 'absolute',
    borderColor: '#002a4d',
    borderRightWidth: 1,
    height: '30%',
    width: '40%',
    marginTop: 456,
    marginLeft: '6%',

  },

  botRightBox: {
    position: 'absolute',
    borderColor: '#002a4d',
    borderLeftWidth: 1,
    height: '30%',
    width: '40%',
    marginTop: 456,
    marginLeft: '49%',
  },

  carIcon: {
    color: '#002a4d',
    marginTop: 55,
  },

  clipboardIcon: {
    color: '#002a4d',
    marginTop: 25,
  },

  userIcon: {
    color: '#002a4d',
    marginTop: 60,
  },

  graphIcon: {
    color: '#002a4d',
    marginTop: 60,
  },

  donateText: {
    fontSize: 18,
    color: '#002a4d',
    textAlign: 'center',
    marginTop: '-10%',
    position: 'relative',
  },

  graphText: {
    fontSize: 18,
    color: '#002a4d',
    textAlign: 'center',
    marginTop: '-8%',
    position: 'relative',
  },

  profileText: {
    fontSize: 18,
    color: '#002a4d',
    textAlign: 'center',
    marginTop: '-6%',
    position: 'relative',
  },

  reqText: {
    fontSize: 18,
    color: '#002a4d',
    textAlign: 'center',
    marginTop: '-20%',
    position: 'relative',
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
