import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
} from 'react-native';
const styles = StyleSheet.create({
    formInput: {
        height: 45,
        padding: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cfcfcf'
    }
});
export default class Input extends Component {
    getValue = (text) => {
        text = text.trim();
        const {inputName, setValue} = this.props;
        setValue({[inputName]: text});
    };
    render() {
        return (
            <View style={styles.formInputWrapper}>
                <TextInput
                    style={styles.formInput}
                    underlineColorAndroid='transparent'
                    secureTextEntry={this.props.secureTextEntry}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#cfcfcf"
                    onChangeText={this.getValue}
                />
            </View>
        );
    }
}