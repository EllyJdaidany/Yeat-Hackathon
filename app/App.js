import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import {Icon} from 'native-base';

import ResHome from './components/screens/ResHome.js';
import RegScreen from './components/screens/RegScreen.js';
import BankHome from './components/screens/bankHome.js';
import SeeReqFood from './components/screens/seeReqFood.js';
import DonateFood from './components/screens/donateFood.js';
import Categories from './components/screens/category.js';
import ReqFood from './components/screens/ReqFood.js';
import Available from './components/screens/AvailableFood.js';
import test from './components/screens/test.js';
import resStats from './components/screens/resStats.js';
<<<<<<< HEAD
import bankStats from './components/screens/bankStats.js';
=======
import Camera from './components/screens/camera.js';
import FoodAPI from './components/screens/foodAPI.js';
>>>>>>> 4ee9e302a5f98898885e138e866f84c2a8faa2ae

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNav />
    );
  }
}

const DrawerComponent = (props) => (
  <SafeAreaView style={{marginTop: 50, }}>
    <View style={{ height: 250, backgroundColor: '#fffff', flex: 1, }}>
      <Icon type="FontAwesome" name="truck" size={50} style={{color: '#f2f2f2'}} />
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNav = createDrawerNavigator({
  'Bank Home' : BankHome,
  'Restaurant Home': ResHome,
  'Register': RegScreen,
  'See Requested Food' : SeeReqFood,
  'Donate Food' : DonateFood,
  'Donate via category' : Categories,
  'Request Food' : ReqFood,
  'Available Food' : Available,
  'Restaurant Stats' : resStats,
<<<<<<< HEAD
  'Bank Stats' : bankStats,
=======
  'Camera' : Camera,
  'Food API' :FoodAPI,
>>>>>>> 4ee9e302a5f98898885e138e866f84c2a8faa2ae
},{
  contentComponent: DrawerItems,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce93d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
