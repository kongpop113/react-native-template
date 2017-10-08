import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/SettingScreen';
import { Platform } from 'react-native';
import Colors from '../styles/Colors';

export const AppNavigator = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
        screen: TabNavigator({
            main: { screen: MainScreen },
            setting: { screen: SettingScreen },
        },{
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused }) => {
                  const { routeName } = navigation.state;
                  let iconName;
                  switch (routeName) {
                    case 'main':
                      iconName = Platform.OS === 'ios'
                        ? `ios-home${focused ? '' : '-outline'}`
                        : 'md-home';
                      break;
                    case 'setting':
                      iconName = Platform.OS === 'ios'
                        ? `ios-settings${focused ? '' : '-outline'}`
                        : 'md-settings';
                  }
                  return (
                    <Ionicons
                      name={iconName}
                      size={28}
                      style={{ marginBottom: -3 }}
                      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                  );
                },
              }),        
            lazy: true,
            tabBarPosition: 'bottom',
            tabBarOptions: {
                showLabel: false,
                showIcon: true,
                style: {
                    backgroundColor: Colors.Primary,
                },
                indicatorStyle : {
                    backgroundColor: 'white'
                }
                
            },        
        })
        }
    },{
        navigationOptions: {
        tabBarVisible: false
        },
        lazy: true,
        animationEnabled: false,         
    });
     