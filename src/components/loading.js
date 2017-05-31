import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';
import DefaultInfo from '../data/defaultInfo';
const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  loading: {
    width: DefaultInfo.deviceWidth - 30
  }
})
export default class Loading extends Component {
  render() {
    return (
      <View style={styles.loadingWrapper}>
        <Image style={styles.loading} source={require('../img/loading1.gif')} />
      </View>
    )
  }
}