import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import Load from '../components/loading'
const styles = StyleSheet.create({
  loadWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default class Loading extends Component {
  render() {
    return (
      <View style={styles.loadWrapper}>
       <Load />
      </View>
    )
  }
}
