import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';
import DefaultInfo from '../data/defaultInfo';
const styles = StyleSheet.create({
    loadingWrapper: {
        width: DefaultInfo.deviceWidth,
        height: DefaultInfo.deviceHeight,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10
    },
    loading: {
        width: 80,
        height: 80,
        borderRadius: 5,
    }
});
export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loadingWrapper}>
                <Image style={styles.loading} source={require('../img/loading_mini.gif')} />
            </View>
        )
    }
}