/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Animated
} from 'react-native';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  }
}

import { observer } from 'mobx-react/native'
import FooterNav from './components/footerNav'
// import IndexPage from './pages/index'
import News from './pages/news'
import Posts from './pages/posts'
import Articles from './pages/articles'
import UserCenter from './pages/userCenter'
import PostArticle from './pages/postArticle'
import Loading from './pages/loading'
import DefaultInfo from './data/defaultInfo'
import { TabNavigator } from 'react-navigation'
import Uri from './api/index'
const App = TabNavigator({
  Home: {
    screen: Posts
  },
  News: {
    screen: News
  },
  Post: {
    screen: PostArticle
  },
  Articles: {
    screen: Articles
  },
  UserCenter: {
    screen: UserCenter
  }
}, {
  tabBarOptions: {
    activeTintColor: '#0facf3'
  }
})
export default class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loadDone: false,
      fadeAnim: new Animated.Value(1)
    }
  }
  componentDidMount() {
    let articles;
    fetch(Uri.host + Uri.posts)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then((res) => {
        articles = res.articles
        console.log(articles)
        // return fetch(`${Uri.host}/checkLogin`)
        Animated.timing(          // Uses easing functions
          this.state.fadeAnim,    // The value to drive
          { toValue: 0, duration: 1000 }            // Configuration
        ).start();
        setTimeout(() => {
          this.setState({
            articles: articles,
            userInfo: null,
            login: null,
            loadDone: true
          });
        }, 200)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    if (this.state.loadDone) {
      return <App screenProps={{news: this.state.articles}}/>
    } else {
      return <Animated.View style={{ opacity: this.state.fadeAnim, flex: 1 }}>
        <Loading />
      </Animated.View>
    }
  }
}
AppRegistry.registerComponent('hwhapp', () => MyApp)
