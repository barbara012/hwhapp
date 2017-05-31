import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    WebView,
    ToastAndroid
} from 'react-native'
import API from '../api'
import DefaultInfo from '../data/defaultInfo'
import MiniLoad from '../components/miniLoading'
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  articleWrapper: {

  }
})

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingShow: true
    }
  }
  static navigationOptions = {
    title: '新闻'
  }
  loadedHandle = () => {
    this.setState({
      loadingShow: false
    })
  }
  render() {
    const { params } = this.props.navigation.state;
    let loading
    if (this.state.loadingShow) {
      loading = <MiniLoad/>
    }
    console.log(API.host + params.path + params.id)
    return (
      <View style={styles.wrapper}>
        <WebView onLoadEnd={this.loadedHandle} style={styles.articleWrapper}
          source={{uri: `${API.host}${params.path}${params.id}`}}
          userAgent='hwh-app'
          onMessage={(event) => {
            if (event.nativeEvent.data === 'true') {
              ToastAndroid.showWithGravity(
                '评论成功',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              )
            }
          }}
          javaScriptEnabled={true}
        />
        {loading}
      </View>
    )
  }
}