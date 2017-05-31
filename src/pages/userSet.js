import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import Uri from '../data/api';
import DefaultInfo from '../data/defaultInfo';
import { observer } from 'mobx-react/native';
const styles = StyleSheet.create({
    set: {
        flex: 1,
        backgroundColor: '#EDECE4',
    },
    setItem: {
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 10
    },
    setText: {
        fontSize: 14,
        color: '#333'
    }
});
export default class UserSet extends Component {
    static navigationOptions = {
        header: null
    };
    quit = () => {
        const { navigate } = this.props.navigation;
        fetch(`${Uri.host}/quit`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(res => {
                console.log(res);
                DefaultInfo.updateUser('');
                navigate('InfoCard');
            })
            .catch(err => {
                console.error(err);
            })
    };
    render() {
        return (
            <View style={styles.set}>
                <View style={styles.setItem}>
                    <TouchableOpacity onPress={this.quit}>
                        <Text style={styles.setText}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
