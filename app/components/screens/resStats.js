import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity, Image, ScrollView } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
import { LinearGradient, Font } from 'expo';

export default class resStats extends React.Component {
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
        <ScrollView>
        <View style={styles.intro}>
          <LinearGradient
            colors={['#002a4d', '#14568c', '#80c6ff']}
            style={{ height: 150, padding: 15, alignItems: 'center', }}>
              <Image
                source={require('../images/barchart.png')}
                style={{height: 150, width: '100%',resizeMode: 'contain',}}
              />
          </LinearGradient>
        </View>

        <View style={styles.headText}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto-Thin', fontSize: 24, marginTop: 15, }}>
                My stats
              </Text>
            ) : null
          }
        </View>

        <View style={styles.listLabel}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto-Thin', fontSize: 20 }}>
                Overview:
              </Text>
            ) : null
          }
        </View>

        <View style={styles.listStats}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.statLabel}>Amount donated (lbs): </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.stat}>3442.26 lbs</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.statLabel}>Total number of donations: </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.stat}>465</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.statLabel}>Estimated value of donations: </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.stat}>$26,5655.75</Text>
            ) : null
          }
        </View>

        <View style={styles.listLabel}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto-Thin', fontSize: 20 }}>
                Details:
              </Text>
            ) : null
          }
        </View>

        <View style={styles.listStats}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.statLabel}>Amount donated (kg): </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.stat}>3442.26 lbs</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>1865.12 lbs of bread</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>654.12 lbs of vegetables</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>511.00 lbs of sweets</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>412.02 lbs of chicken</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.statLabel}>Total number of donations: </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.stat}>465</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>72 donations within the last 6 months</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>118 donations within the last year</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>312 donations within the last 2 years</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>465 donations within the last 5 years</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.statLabel}>Estimated value of donations: </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.stat}>$26,5655.75</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>Estimated value of bread/lb = {"\n"}$10.00 * 1865.12 = $18651.20</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>Estimated value of vegetablests/lb = {"\n"}$1.00 * 654.12 = $654.12</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>Estimated value of sweets/lb = {"\n"}$1.00 * 511.00 = $511.00</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={styles.subStat}>Estimated value of chicken/lb = {"\n"}$1.00 * 412.02 = $412.02</Text>
            ) : null
          }
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  listLabel: {
    marginLeft: '5%',
    marginTop: '5%',
  },

  statLabel: {
    fontFamily: 'Roboto-Thin',
    fontSize: 16,
    marginLeft: '10%',
  },

  stat: {
    fontFamily: 'Roboto-Thin',
    fontSize: 16,
    color: '#14568c',
    marginLeft: '20%',
  },

  subStat: {
    fontFamily: 'Roboto-Thin',
    fontSize: 16,
    color: '#14568c',
    marginLeft: '25%',
  },

  headText: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  centering: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },

});
