import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker'; //第三方相机
import TopNavBar from './topNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import DefaultInfo from '../data/defaultInfo';
import { observer } from 'mobx-react/native';
import Uri from '../data/api';

//image picker options
const photoOptions = {
  //底部弹出框选项
  title:'请选择',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'选择相册',
  quality:0.75,
  allowsEditing:true,
  noData:false,
  storageOptions: {
      skipBackup: true,
      path:'images'
  }
}
const styles = StyleSheet.create({
    panel: {
        flex: 1
    },
    editor: {
    },
    editorText:{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#cdcdcd',
    },
    textarea: {
        flex: 1,
        padding: 0,
        textAlignVertical: 'top'
    },
    imageWrapper: {
        width: 60,
        height: 60,
        borderColor: '#cdcdcd',
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imageHolder: {
        width: 40,
        height: 40
    },
    selectedImage: {
        width: 59,
        height: 59
    },
    otherInfo: {
        marginBottom: 30
    },
    tagsMark: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#cdcdcd',
    },
    otherInfoIcon: {
        color: '#888',
        fontSize: 16,
        width: 25,
    },
    textWrapper: {
        flex: 1,
    },
    otherInfoText: {
        fontSize: 12,
        height: 40,
        padding: 0,
        color: '#888',
    },
    buttonWrapper: {
        width: DefaultInfo.deviceWidth,
        paddingHorizontal: 40,
    }
})
export default class EditPanel extends Component {
  constructor (props) {
    super(props)  
    this.state = {
      initialPosition: '火星',
      lastPosition: null,
      images: ''
    }
  }
  getPos = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          // let initialPosition = JSON.stringify(position);
        this.setState({
          initialPosition: position.coords.longitude + '-' + position.coords.latitude
        })
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }
  formData = {};
  submitHandle = () => {
    if (!this.formData['content']) {
        return false;
    } else {
      this.formData['title'] = this.formData['content'].substr(0, 5) + '~~~';
      if (this.state.images) {
          this.formData['content'] = '![15](' + this.state.images + ')' + this.formData['content'];
      }
      fetch(`${Uri.host}/post`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `title=${this.formData.title}&content=${this.formData.content}&tag=${this.formData.tag}&local=火星`
      })
      .then(response => {
          if (response.ok) {
              return response.json();
          }
      })
      .then(res => {
          if (res.type === 3) {
              DefaultInfo.updateArticle([res.article]);
              DefaultInfo.tabView.goToPage(0);
          }
      })
      .catch(err => {
          console.error(err)  
      })
    }
  } 
  getContent = (text) => {
      this.formData['content'] = text;
  };
  getTags = (text) => {
      this.formData['tag'] = text.replace(/(，)|(\t)|(,)|(-)|(\.)|(:)|(--)|(\s)|(：)|(。)|(\|)/g, ';')
  };
  upLoadImage = (image) => {
      let formData = new FormData();
      let file = {uri: image.uri, type: 'multipart/form-data', name: image.fileName};

      formData.append("images", file);
      fetch(`${Uri.host}/post/${DefaultInfo.user._id}`,{
          method:'POST',
          headers:{
              'Content-Type':'multipart/form-data',
          },
          body:formData,
      })
      .then((response) => response.text() )
      .then((imgUrl)=>{
          this.setState({
              images: imgUrl
          });
          console.log(this.state.images);
      })
      .catch((error)=>{console.error('error',error)});
  };
  cameraAction = () =>{
      ImagePicker.showImagePicker(photoOptions, (response) =>{
          if (response.didCancel){
              return false;
          }
          this.upLoadImage(response);
      })
  };
  render() {
      const {userInfo: {name}} = this.props;
      let images = this.state.images;
      return (
          <View style={styles.panel}>
              <TopNavBar goBackHandle={this.cancelHandle} backHidden={true} backType='cancel' title={name}/>
              <View style={styles.editor}>
                  <View style={styles.editorText}>
                      <TextInput style={styles.textarea} placeholder='说点什么'
                                 multiline={true}
                                 numberOfLines={5}
                                 onChangeText={this.getContent}
                                 underlineColorAndroid="transparent"
                      />
                      <TouchableOpacity style={styles.imageWrapper} onPress={this.cameraAction}>
                          <Image
                              source={!!images ? {uri: Uri.host + images} : require('../img/addImage.png')}
                              style={[styles.imageHolder, !!images && styles.selectedImage]} />
                      </TouchableOpacity>
                  </View>
                  <View style={styles.otherInfo}>
                      <View style={styles.tagsMark}>
                          <Icon name="tags" style={styles.otherInfoIcon} />
                          <TouchableOpacity style={styles.textWrapper}>
                              <TextInput ref="tag" placeholder='添加标签'
                                         onChangeText={this.getTags}
                                         underlineColorAndroid="transparent"
                                         style={styles.otherInfoText}/>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.tagsMark}>
                          <Icon name="map-marker" style={styles.otherInfoIcon} />
                          <TouchableOpacity style={styles.textWrapper} onPress={this.getPos}>
                              <TextInput underlineColorAndroid="transparent"
                                         value={this.state.initialPosition}
                                         editable={false}
                                         numberOfLines={1}
                                         placeholder='添加位置'
                                         style={styles.otherInfoText} />
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
              <View style={styles.buttonWrapper}>
                  <Button
                      onPress={this.submitHandle}
                      title="发布"
                      color="#97cc00"
                      accessibilityLabel="Learn more about this purple button"
                  />
              </View>
          </View>
      )
  }
}
