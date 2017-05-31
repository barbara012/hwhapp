'use strict';
import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import TabItem from './tabItem';
const styles = StyleSheet.create({
    tabContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        height: 50,
        borderTopColor: '#cfcfcf',
        borderTopWidth: StyleSheet.hairlineWidth,
    }
});
export default class FooterNav extends Component {
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合
        tabTexts: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    };
    render() {
        return (
            <View style={styles.tabContainer} >
                {
                   this.props.tabs.map((tab, index) => {
                       return <TabItem
                           index={index}
                           {...this.props}
                           key={index} />
                   })
                }
            </View>
        );
    }
};