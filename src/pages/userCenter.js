import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    Navigator,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import UserInfo from '../components/userInfo'
import Login from '../components/login'
import { StackNavigator } from 'react-navigation'
const winWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
const Mine = StackNavigator({
  UserCenter: { screen: UserInfo },
  Login: { screen: Login }
})
export default class News extends Component {
  static navigationOptions = {
    tabBarLabel: (tintColor) => {
      return <Text style={{
        color: tintColor.focused ? tintColor.tintColor : '#222',
        textAlign: 'center'
      }}>发现</Text>
    },
    tabBarIcon: (tintColor) => {
      return <Icon name="user-o" style={{ 
        color: tintColor.focused ? tintColor.tintColor : '#222',
        fontSize: 14 
      }} />
    }
  }
  render() {
    return <Mine screenProps={this.props.screenProps} />
  }
}
