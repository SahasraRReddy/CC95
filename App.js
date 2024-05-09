import React, { Component } from 'react'
import {View} from 'react-native'
import HomeScreen from './screens/HomeScreen' 
import Rumble from './screens/Rumble'
import StackNavigator  from './navigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component{
  render(){

    return(
     <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
      
    )
  }
}
