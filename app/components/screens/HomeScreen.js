import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header style={{paddingTop: 20, height: 80, backgroundColor: '#e1bee7'}}>
        <Left style={{marginLeft: -130,}}>
          <Icon name="menu" size={24} onPress={() => this.props.navigation.openDrawer()}/>
        </Left>
      </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
