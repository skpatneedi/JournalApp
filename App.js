import React from 'react';
import { StyleSheet, View } from 'react-native';
import Diary from './Screens/Diary'
import Event from './Screens/Event';
import HomeScreen from './Screens/HomeScreen';
import TravelJournal from './Screens/TravelJournal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator()

export default class App extends React.Component{
    render(){  
  return (
    <View>
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Home" 
      screenOptions = {{headerShown:false}}>
        <stack.Screen name = "Home" component = {HomeScreen}/>
        <stack.Screen name = "Diary" component = {Diary}/>
        <stack.Screen name = "Event" component = {Event}/>
        <stack.Screen name = "TravelJournal" component = {TravelJournal}/>
      </stack.Navigator>
    </NavigationContainer>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
