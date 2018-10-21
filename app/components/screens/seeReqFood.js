import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';
import {Font} from 'expo';

export default class SeeReqFood extends React.Component {
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
          <View style={styles.center}>
            <Icon size={40} name={"clipboard"} type="FontAwesome" style={styles.clipboardIcon}/>
            {
              this.state.fontLoaded ? (
                <Text style={styles.textHeader}>
                  Requested Foods
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

  center: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader : {
    marginTop: '25%',
    fontSize: 24,
    color: '#000000',
    fontFamily: 'Roboto-Thin',
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
    backgroundColor: '#698eb8',
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
