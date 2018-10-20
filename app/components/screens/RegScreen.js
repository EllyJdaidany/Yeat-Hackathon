import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {Header, Left, Right, Icon} from 'native-base';

export default class RegScreen extends React.Component {
  constructor(props) {
  super(props);
  this.state = { text: 'Useless Placeholder' };
}
  render() {
    return (
      <View style={styles.container}>
      <Header style={{paddingTop: 20, height: 80, backgroundColor: '#e1bee7'}}>
        <Left style={{marginLeft: -130,}}>
          <Icon name="menu" size={24} onPress={() => this.props.navigation.openDrawer()}/>
        </Left>
      </Header>
        <View style={styles.centering}>
          <Text style={styles.headText}>Food</Text>
        </View>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  centering: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headText: {
    fontSize: 24,
    justifyContent: 'center',
    marginTop: 50,
  }
});
