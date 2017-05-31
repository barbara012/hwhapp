import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    root: {
      flex: 1
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center'
    },
    postIcon: {
      color: '#0facf3',
      fontSize: 15
    }
})
import Icon from 'react-native-vector-icons/FontAwesome'
import EditPanel from '../components/editPanel'
import Login from '../components/login'
import DefaultInfo from '../data/defaultInfo'
import { observer } from 'mobx-react/native'
export default class PostArticle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: DefaultInfo.user
    }
  }
  static navigationOptions = {
    tabBarLabel: null,
    tabBarIcon: (tintColor) => {
      return <View ><Icon name="genderless" style={styles.postIcon} /></View>
    }
  }
  render() {
    if (DefaultInfo.user) {
      return (
        <View style={styles.root}>
          <EditPanel userInfo={DefaultInfo.user} />
        </View>
      )
    } else{
      return (
        <View style={styles.root}>
          <Login />
        </View>
      )
    }
  }
}
