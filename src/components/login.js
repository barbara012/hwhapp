import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ToastAndroid
} from 'react-native'
import DefaultInfo from '../data/defaultInfo'
import { observer } from 'mobx-react/native'
import Input from './textInput'
import MiniLoading from './miniLoading'
import Uri from '../data/api'
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputControl: {
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  textInput: {
    marginBottom: 60,
  },
  buttonWrapper: {
    width: DefaultInfo.deviceWidth,
    paddingHorizontal: 40,
    marginTop: 50
  }
})
export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loadingShow: false
      }
  };
  static navigationOptions = {
      title: '登录'
  }
  submitHandle = () => {
      let navigation = this.props.navigation;
      if(Object.keys(this.formData).length > 1) {
          this.setState({
             loadingShow: true
          })
          fetch(`${Uri.host}/login`,{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: `username=${this.formData.username}&password=${this.formData.password}`
          })
          .then(response => {
              if (response.ok) {
                  return response.json();
              }
          })
          .then(res => {
              this.setState({
                  loadingShow: false
              });
              if (res.type === 3) {
                  DefaultInfo.updateUser(res.user);
                  if (navigation) {
                      navigation.goBack();
                  }
                  ToastAndroid.showWithGravity(
                      '登录成功',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                  )
              } else if (res.type === 1) {
                  ToastAndroid.showWithGravity(
                      '用户不存在',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                  )
              } else {
                  ToastAndroid.showWithGravity(
                      '密码错误',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                  )
              }
          })
          .catch(err => {
              this.setState({
                  loadingShow: false
              });
              ToastAndroid.showWithGravity(
                  '请求出错',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER,
              )
          })
      }
  };
  formData = {};
  setValue = (data) => {
      Object.assign(this.formData, data);
  }
  render() {
      let loading;
      if (this.state.loadingShow) {
          loading = <MiniLoading/>
      }
      return <View style={styles.root}>
          <View style={styles.inputControl}>
              <View style={{marginBottom: 20}}>
                  <Input
                      placeholder="用户名"
                      inputName="username"
                      setValue={this.setValue}
                      secureTextEntry={false}/>
              </View>
              <View>
                  <Input
                      placeholder="密码"
                      inputName="password"
                      setValue={this.setValue}
                      secureTextEntry={true}/>
              </View>
          </View>
          <View style={styles.buttonWrapper}>
              <Button
                  onPress={this.submitHandle}
                  title="登录"
                  color="#97cc00"
                  accessibilityLabel="Learn more about this purple button"
              />
          </View>
          {loading}
      </View>
  }
}