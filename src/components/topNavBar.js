import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd'
    },
    backIcon: {
        fontSize: 26,
        color: '#333'
    },
    headerTitle: {
        width: 200,
        fontSize: 16,
        color: '#333',
        flexWrap: 'nowrap',
        textAlign: 'center'
    },
    hide: {
        color: 'transparent'
    }
});

export default class LoginButton extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={this.props.goBackHandle}>
                    <Icon style={[styles.backIcon, this.props.backHidden && styles.hide]} name="angle-left"/>
                </TouchableOpacity>
                <Text numberOfLines={1} style={styles.headerTitle}>{this.props.title}</Text>
                <Text style={styles.hide}>o</Text>
            </View>
        );
    }
}
