import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity, ScrollView, Alert } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';

export default class Categories extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={{paddingTop: 20, height: 80, backgroundColor: '#002a4d'}}>
          <Left style={{marginLeft: -130,}}>
          <Icon name="arrow-left" type="FontAwesome" size={24} style={{color: '#f2f2f2'}}
          onPress={() => this.props.navigation.navigate('Donate Food')}/>
          </Left>
        </Header>
        <ScrollView>
          <View style={styles.center}>
            <Icon size={40} name={"clipboard"} type="FontAwesome" style={styles.clipboardIcon}/>
            <Text style={styles.textHeader}>Select categories</Text>
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
                  'Submission sent',
                  'Thanks for your donation!',
                  [
                    {text: 'OK', onPress: () => this.props.navigation.navigate('Restaurant Home')},
                  ],
                  { cancelable: false }
                )}
            >
              <Text style={styles.btnText}>Submit</Text>
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

  button : {
    width: '90%',
    height: 50,
    marginTop: 25,
    backgroundColor: '#182e42',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#f2f2f2',
    fontSize: 16,
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
