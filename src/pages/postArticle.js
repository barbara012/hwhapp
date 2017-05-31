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
      width: 35,
      height: 35,
      backgroundColor: '#000',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 6
    },
    postIcon: {
      flex: 1,
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center'
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
    tabBarLabel: () => {
      return <Text></Text> 
    },
    tabBarIcon: (tintColor) => {
      return <View style={styles.iconWrapper}><Icon name="compass" style={styles.postIcon} /></View>
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
