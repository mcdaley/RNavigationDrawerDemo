//-----------------------------------------------------------------------------
// src/screens/Home.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'
import Settings               from '../../components/Settings/Settings';

class HomeScreen extends Component {
  static navigationOptions = { 
    title:        'Home',
    headerRight:  (
      <Text>Test</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Icon name='ios-home' size={48} color='blue' />
        <Button
          title   = 'Go to Details'
          onPress = { () => this.props.navigation.navigate('Details') }
        />
      </View>
    )
  }
}

// Export the HomeScreen
export default HomeScreen