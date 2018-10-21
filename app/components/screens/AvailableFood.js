import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity, ScrollView, Alert } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
import { LinearGradient, Font } from 'expo';

export default class Available extends React.Component {

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
            onPress={() => this.props.navigation.navigate('Bank Home')}/>
          </Left>
        </Header>
        <ScrollView>
          <View style={styles.center}>
            <Icon size={40} name={"clipboard"} type="FontAwesome" style={styles.clipboardIcon}/>
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'Roboto-Thin', fontSize: 24, marginTop: 75, }}>
                  Food items currently available:
                </Text>
              ) : null
            }
          </View>
          <View style={styles.alignList}>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Bread</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Sweets</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Cheese</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Beef</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Soup</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Chicken</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Salad</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Potatos</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Fish</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Pasta</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Pork</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Eggs</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Tofu</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.catName}>Rice</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert(
                  'Request sent',
                  'We will contact you when food is on the way!',
                  [
                    {text: 'OK', onPress: () => this.props.navigation.navigate('Bank Home')},
                  ],
                  { cancelable: false }
                )}
            >
              <Text style={styles.btnText}>Request</Text>
            </TouchableOpacity>
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

  button : {
    width: '90%',
    height: 50,
    marginTop: 25,
    backgroundColor: '#793698',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#f2f2f2',
    fontSize: 16,
  },

  center: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader : {
    marginTop: '25%',
    fontSize: 24,
    color: '#000000',
  },

  clipboardIcon: {
    marginTop: -25,
    color: '#182e42',
    position: 'absolute',
  },

  listItem : {
    width: '90%',
    height: 45,
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: '#c18eda',
    flexDirection: 'row',
    alignItems: 'center',
  },

  alignList: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  catName : {
    marginTop: 15,
    marginLeft: 10,
    color: '#f2f2f2',
    fontSize: 16,
  },

});
