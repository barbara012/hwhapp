import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    footerNav: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopColor: '#cdcdcd',
        borderTopWidth: StyleSheet.hairlineWidth
    },
    navItem: {
        width: 60,
        alignItems: 'center',
    },
    postItem: {
        height: 30,
        backgroundColor: '#97cc00',
        borderRadius: 30,
        justifyContent: 'center',
    },
    navItemIcon: {
        color: '#afafaf',
        fontSize: 22
    },
    text: {
        color: '#afafaf',
        fontSize: 10,
    },
    active: {
        color: '#333',
        fontWeight: '500'
    },
    postIcon: {
        color: '#fff',
        fontSize: 20,
    },
});
export default class TabItem extends Component {
    render() {
        const {tabTexts, tabIconNames, activeTab, index, goToPage}  = this.props;
        let textDesc;
        let tabItemStyle = [styles.navItem];
        let tabItemTextStyle = [styles.navItemIcon];
        if (tabTexts[index]) {
            textDesc = <Text style={[styles.text,activeTab === index && styles.active]}>{tabTexts[index]}</Text>;
        } else {
            tabItemStyle = tabItemStyle.concat(styles.postItem);
            tabItemTextStyle.push(styles.postIcon);
        }
        if (activeTab === index) {
            tabItemTextStyle.push(styles.active);
        }
        return (
            <TouchableOpacity style={tabItemStyle} onPress={() => {
                goToPage(index);
            }}>
                <Icon name={tabIconNames[index]}
                    style={tabItemTextStyle}/>
                {textDesc}
            </TouchableOpacity>
        );
    }
};