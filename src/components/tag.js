import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ToastAndroid
} from 'react-native'
import DefaultInfo from '../data/defaultInfo'
import { observer } from 'mobx-react/native'
import Input from './textInput'
import MiniLoading from './miniLoading'
import Uri from '../data/api'
const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#aaa',
    marginRight: 5,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 2
  }
})
export default class Login extends Component {
  render() {
    return <View style={styles.tag}>
      <Text style={{color: '#fff', fontSize: 10}}>{this.props.tag}</Text>
    </View>
  }
}