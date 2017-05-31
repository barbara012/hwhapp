import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';
import LoginButton from './loginButton';
import DefaultInfo from '../data/defaultInfo';
import { observer } from 'mobx-react/native';
import Set from './set';
const winWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    wall: {
        width: winWidth,
        height: 200,
        resizeMode: Image.resizeMode.cover
    },
    avatarWrapper: {
        width: 80,
        height: 80,
        padding: 2,
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#fff',
        position: 'absolute',
        left: '50%',
        bottom: -15,
        marginLeft: -40
    },
    infoWrapper: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    userName: {
        fontSize: 18,
        marginBottom: 5,
    },
    otherInfo: {
        width: winWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
        paddingBottom: 20,
    },
    infoItem: {
        fontSize: 12,
        color: '#666',
        marginHorizontal: 15,
    },
    hlw: {
        flex: 1,
        width: winWidth,
        resizeMode: Image.resizeMode.cover,
        opacity: 0.2
    }
});
export default class InfoCard extends Component {
    static navigationOptions = {
        title: '用户中心',
        header: null
    };
    render() {
        const { user } = DefaultInfo;
        let { navigate } = this.props.navigation;
        let infoWrapper;
        console.log('--------------');
        console.log(this.props);
        console.log('--------------');
        if (user) {
            infoWrapper = <View style={styles.infoWrapper}>
                <Text style={styles.userName}>{user.name}</Text>
                <View style={styles.otherInfo}>
                    <Text style={styles.infoItem}>发布文章 <Text style={styles.number}>{user.posts}</Text></Text>
                    <Text style={styles.infoItem}>粉丝 <Text style={styles.number}>10</Text></Text>
                    <Text style={styles.infoItem}>喜欢 <Text style={styles.number}>71</Text></Text>
                </View>
                <Set navigate={navigate}/>
            </View>
        } else {
            infoWrapper = <View style={styles.infoWrapper}><LoginButton navigate={navigate}/></View>;
        }
        return (
            <View style={styles.root}>
                <Image source={require('../img/a2.jpg')} style={styles.wall}>
                    <View style={styles.avatarWrapper}>
                        <Image source={!user ? require('../img/avatar.png') : {uri: user.head} } style={{width: 76, height: 76, borderRadius: 40}}/>
                    </View>
                </Image>
                {infoWrapper}
                <Image style={styles.hlw} source={require('../img/hlw.jpg')}/>
            </View>
        );
    }
}
