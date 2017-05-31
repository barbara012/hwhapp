import React, { Component } from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react/native'
import DefaultInfo from '../data/defaultInfo'
import NewsList from '../components/articlesList'
import ArticleDetail from './articleDetail'
import Article from '../components/article'
import { StackNavigator } from 'react-navigation'
const NewsPage = StackNavigator({
  NewsList: { screen: NewsList },
  ArticleDetail: { screen: ArticleDetail }
})
export default class News extends Component {
  static navigationOptions = {
    tabBarLabel: (tintColor) => {
      return <Text style={{
        color: tintColor.focused ? tintColor.tintColor : '#222',
        textAlign: 'center'
      }}>IT资讯</Text>
    },
    tabBarIcon: (tintColor) => {
      return <Icon name="newspaper-o" style={{
        color: tintColor.focused ? tintColor.tintColor : '#222',
        fontSize: 14
      }} />
    }
  }
  render() {
    return <NewsPage screenProps={this.props.screenProps}/>
  }
}
