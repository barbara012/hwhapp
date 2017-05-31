import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    setWrapper: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    setRight: {
        flex: 1,
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    },
    setText: {
        color: '#333'
    }
});
export default class Set extends Component {
    render() {
        return (
            <View style={styles.setWrapper}>
                <Icon name="cog" style={{color:'#999', marginRight: 10, fontSize: 20}}/>
                <TouchableOpacity style={styles.setRight} onPress={() => {
                    this.props.navigate('UserSet');
                }}>
                    <Text style={styles.setText}>设置</Text>
                    <Icon name="angle-right" style={{color:'#999', fontSize: 14}}/>
                </TouchableOpacity>
            </View>
        );
    }
}