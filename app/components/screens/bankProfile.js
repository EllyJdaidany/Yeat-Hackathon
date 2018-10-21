import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity, Image } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
import {LinearGradient, Font} from 'expo';

export default class bankProfile extends React.Component {
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
        <Header style={{paddingTop: 20, height: 80, backgroundColor: '#793698'}}>
          <Left style={{marginLeft: -130,}}>
          <Icon name="arrow-left" type="FontAwesome" size={24} style={{color: '#f2f2f2'}}
          onPress={() => this.props.navigation.navigate('Restaurant Home')}/>
          </Left>
        </Header>

        <View style={styles.intro}>
        <LinearGradient
          colors={['#793698', '#ac68cc', '#d6b4e7']}
          style={{ height: 250, padding: 15, alignItems: 'center', }}>
          <Image
            source={require('../images/feeding.png')}
            style={{height: 120, width: 120, borderRadius: 60,}}
          />
          <View style={styles.centering}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.title}>Feeding America</Text>
            ) : null
          }
          </View>
            </LinearGradient>
        </View>

        <View style={styles.centering}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.topProfile}>Current Address:</Text>
              ) : null
            }
            {
              this.state.fontLoaded ? (
                <Text style={styles.currAdd}>1553 Jackson St, Chicago, Il, 60007</Text>
              ) : null
            }
            <TouchableOpacity
              style={styles.statsBtn}
              onPress={() => this.props.navigation.navigate('Restaurant Stats')}
            >
            {
              this.state.fontLoaded ? (
                <Text style={styles.btnText}>
                  View my stats
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

  title: {
    marginTop: 25,
    fontFamily: 'Roboto-Thin',
    color: '#f2f2f2',
    fontSize: 26,
  },

  btnText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#f2f2f2',
  },

  currAdd: {
    marginTop: 10,
    fontFamily: 'Roboto-Thin',
    color: '#002a4d',
    fontSize: 16,
  },

  cameraIcon: {
    color: '#f2f2f2',
    position: 'absolute',
    marginTop: 75,
    marginLeft: 35,
  },

  topProfile: {
    marginTop: 25,
    fontFamily: 'Roboto-Thin',
    color: '#002a4d',
    fontSize: 22,
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

  statsBtn: {
    marginTop: 65,
    width: '55%',
    height: 60,
    backgroundColor: '#ac68cc',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  intro: {
    height: 250,
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
