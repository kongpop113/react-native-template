import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import { AppNavigator } from './navigators/AppNavigator';
import AppWithNavigationState from './navigators/navigator';

import store from './store';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends React.Component {

  state = { isReady: false };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      //Roboto: require("native-base/Fonts/Roboto.ttf"),
      //Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      //Arial: require('./assets/fonts/arial.ttf'),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (     
      <Provider store={store}>
        <View style={styles.container}>
          <MyStatusBar backgroundColor="#465F7D" barStyle="light-content" />
          <AppWithNavigationState  />
        </View>
      </Provider>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
