import { observable } from 'mobx';
import { Dimensions } from 'react-native';

const info = observable({
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height,
    rem: Dimensions.get('window').width / 100,
    user: '',
    articles: [],
    tabView: ''
});
info.updateUser = (user) => {
    info.user = user;
};
info.updateArticle = (articles) => {
    let list = info.articles.concat([]);
    info.articles = articles.concat(list);
    if (info.user) {
        info.user.posts += 1;
    }
};
info.setTabView = (tabView) => {
    info.tabView = tabView
};
export default info;