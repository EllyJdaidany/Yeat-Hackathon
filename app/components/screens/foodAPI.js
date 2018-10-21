import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
import { LinearGradient, Font } from 'expo';

export default class foodAPI extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      fontLoaded: false,
      qty: "",
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
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 15,}}>
          <Image
             source={require('../images/pasta.jpg')}
             style={{height: 350, width: '90%', resizeMode: 'contain'}}
           />
         </View>
        <View style={styles.headText}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto-Thin', fontSize: 22, marginTop: 15, textAlign: 'center',}}>
                Choose the most appropriate category
              </Text>
            ) : null
          }
        </View>

        <View style={styles.centering}>
          <TouchableOpacity style={styles.listItem}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto', fontSize: 16, textAlign: 'center', color:'#f2f2f2',}}>
                Pasta
              </Text>
            ) : null
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto', fontSize: 16, textAlign: 'center', color:'#f2f2f2',}}>
                Bread
              </Text>
            ) : null
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto', fontSize: 16, textAlign: 'center', color:'#f2f2f2',}}>
                Cereal
              </Text>
            ) : null
          }
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
          {
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Roboto', fontSize: 16, textAlign: 'center', color:'#f2f2f2',}}>
                Beef
              </Text>
            ) : null
          }
          </TouchableOpacity>

          <View style={styles.headText}>
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'Roboto-Thin', fontSize: 22, marginTop: 15, textAlign: 'center',}}>
                  Enter the quantity
                </Text>
              ) : null
            }
          </View>

          <TextInput
            style={{height: 40, width: '90%', borderColor: '#14568c', borderWidth: 1, marginTop: 5}}
            underlineColorAndroid='transparent'
            autoCorrect={false}
            onChangeText={(qty) => this.setState({qty})}
            value={this.state.qty}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert(
                'Submission sent',
                'Thanks for your donation!',
                [
                  {text: 'Yeat', onPress: () => this.props.navigation.navigate('Restaurant Home')},
                ],
                { cancelable: false }
              )}
          >
            <Text style={{fontFamily: 'Roboto', fontSize: 16, textAlign: 'center', color:'#f2f2f2'}}>Submit</Text>
          </TouchableOpacity>

        </View>
        <View style={{height: 350, backgroundColor: '#f2f2f2'}}>
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

  listItem: {
    width: '90%',
    height: 45,
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: '#14568c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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

  button : {
    width: '90%',
    height: 50,
    marginTop: 25,
    backgroundColor: '#002a4d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  centering: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },

});
