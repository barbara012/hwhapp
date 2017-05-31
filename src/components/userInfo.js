import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';
import UserSet from '../pages/userSet';
import InfoCard from './infoCard';
import { TabNavigator } from 'react-navigation';
const UserInfo = TabNavigator({
      InfoCard: { screen: InfoCard },
      UserSet: { screen: UserSet },
    },
    {
      tabBarOptions: {
          style: {
              backgroundColor: '#97cc00',
          },
      }
    }
)
export default UserInfo