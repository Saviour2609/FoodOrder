
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Src/Screen/HomeScreen';
import { LandingScreen } from './Src/Screen/LandingScreen';

import { Provider } from 'react-redux';
import { store } from './Src/Redux/store';



import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { SearchScreen } from './Src/Screen/SearchScreen';
// import { RestaurantScreen } from './Src/Screen/RestaurantScreen';
// import { FoodDetailScreen } from './Src/Screen/FoodDetailScreen';
// import { CartScreen } from './Src/Screen/CartScreen';
// import { LoginScreen } from './Src/Screen/LoginScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




const switchNavigator = createSwitchNavigator({


  landingStack: {
    screen: createStackNavigator({
      Landing: LandingScreen,
      // search address screen
    }, {
      defaultNavigationOptions: {
        headerShown: true
      }
    }),

  },

  homeStack: createBottomTabNavigator({
    home: {
      screen: createStackNavigator({
        HomePage: HomeScreen,

      }, {
        defaultNavigationOptions: {
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./Src/Images/home_icon.png') : require('./Src/Images/home_n_icon.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

    // Home tab Icon
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./Src/Images/offer_icon.png') : require('./Src/Images/offer_n_icon.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },

    // Home tab Icon
    Cart: {
      screen: createStackNavigator({
      
        CartPage: HomeScreen,

      }, {
        defaultNavigationOptions: {
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./Src/Images/cart_icon.png') : require('./Src/Images/cart_n_icon.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    // Home tab Icon
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen,

      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused == true ? require('./Src/Images/account_icon.png') : require('./Src/Images/account_n_icon.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    }

  })

});


const AppNavigation = createAppContainer(switchNavigator);
export default function App() {
  return (
  <Provider store={store}>
// <AppNavigation />
//  </Provider>//
    //  <AppNavigation/>

  );
}



const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
    // tintColor:'blue'
  }
});