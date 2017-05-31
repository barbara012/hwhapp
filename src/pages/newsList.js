import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react/native'
import DefaultInfo from '../data/defaultInfo'
import Article from '../components/article'
export default class News extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { news } = this.props.screenProps
    const { navigate } = this.props.navigation
    const list = news.map((article) => {
      return <Article article={article} navigate={navigate} key={article._id} />
    })
    return <View>
      <ScrollView>{list}</ScrollView>
    </View>
  }
}
