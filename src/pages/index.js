import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native'
import { StackNavigator } from 'react-navigation'
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#EDECE4'
    }
})
import ArticleList from '../components/articleList'
import ArticleDetail from './articleDetail'
const Index = StackNavigator({
    ArticleList: { screen: ArticleList },
    ArticleDetail: { screen: ArticleDetail }
});
export default Index
