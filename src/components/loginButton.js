import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import Login from '../components/login';
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 3,
        backgroundColor:　'#97cc00'
    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    }
});

export default class LoginButton extends Component {
    gotoLogin = () => {
        const { navigate} = this.props;
        navigate('Login')
    };
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={this.gotoLogin}>
                    <Text style={styles.buttonText}>登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
