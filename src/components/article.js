import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ArticleDetail from '../pages/articleDetail'
import Tag from './tag'
import API from '../api'
import DefaultInfo from '../data/defaultInfo'
const styles = StyleSheet.create({
    articleWrapper: {
      backgroundColor: '#fff',
      borderBottomColor: '#efefef',
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    contentWrapper: {
      width: DefaultInfo.rem * 70,
      paddingLeft: DefaultInfo.rem * 4,
      paddingRight: DefaultInfo.rem * 2
    },
    avatarWrapper: {
      width: 20,
      height: 20,
      borderRadius: 10
    },
    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    author: {
      color: '#999',
      fontSize: 12,
      marginHorizontal: 5
    },
    date: {
      color: '#999',
      fontSize: 12
    },
    content: {
      lineHeight: 20,
      marginBottom: 5
    },
    cover: {
      width: DefaultInfo.rem * 27,
      height: DefaultInfo.rem * 20,
      paddingRight: 15,
      borderRadius: 2
    },
    otherWrapper: {
      flexDirection: 'row'
    }
});
export default class Article extends Component {
  gotoDetail = () => {
    const {navigate, article: {_id, author, title, path} } = this.props;
    navigate('ArticleDetail', {
        id: _id,
        author: author,
        title: title,
        path: path,
    })
  }
  render() {
    let {article: {title, content, author, created_at, imgUrl, avatar, tag}} = this.props
    let tags = tag.map(tag => {
      return <Tag key={tag} tag={tag} />
    })
    content = content.replace(/\s/g, '').substr(0, 45)
    let avatarUrl
    if (avatar) {
      avatarUrl = { uri: API.host + avatar}
    } else {
      avatarUrl = require('../img/avatar.png')
    }
    console.log(avatarUrl)
    return (
      <TouchableOpacity style={styles.articleWrapper} onPress={this.gotoDetail}>
        <View style={styles.contentWrapper}>
          <View style={styles.titleWrapper}>
            <Image style={styles.avatarWrapper} source={avatarUrl} />
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.date}>{created_at}</Text>
            {/*<Text numberOfLines={1} style={styles.title}>{title}</Text>*/}
          </View>
          <Text style={styles.content}>{title}</Text>
          <View style={styles.otherWrapper}>
            {tags}
          </View>
        </View>
        <Image style={styles.cover} source={{ uri: API.host + imgUrl }} />
    </TouchableOpacity>
    )
  }
}