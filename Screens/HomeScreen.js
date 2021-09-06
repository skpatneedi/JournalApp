import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
            <ImageBackground source = {require('../assets/bg3.jpg')} style = {styles.backgroundImage }>   
            <TouchableOpacity 
                  style = {styles.button}
                  onPress={() => this.props.navigation.navigate("Diary")}>
                  <Text style = {styles.buttonText}>
                      Diary
                  </Text>
                  <Image source = {require('../assets/diary.png')} style = {styles.iconImage}></Image>
              </TouchableOpacity>
              <TouchableOpacity 
                  style = {styles.button}
                  onPress={() => this.props.navigation.navigate("TravelJournal")}>
                  <Text style = {styles.buttonText}>
                  Travel        
                  </Text>
                  <Text style = {styles.buttonTextJournal}>
                  Journal       
                  </Text>
                  <Image source = {require('../assets/travel.png')} style = {styles.iconImage}></Image>
              </TouchableOpacity>
              <TouchableOpacity 
                  style = {styles.button}
                  onPress={() => this.props.navigation.navigate("Event")}>
                  <Text style = {styles.buttonText}>
                      Event
                  </Text>
                  <Image source = {require('../assets/date1.png')} style = {styles.iconImage}></Image>
              </TouchableOpacity>
             
              </ImageBackground>
          </View>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
      flex:0.25,
      marginLeft:50,
      marginRight:50,
      marginTop:50,
      borderRadius:30,
      backgroundColor:'white',
      justifyContent:'center'

  },
  buttonText:{
      flex:1,
      flexDirection:"row",
      fontSize:35,
      width:300,
      fontWeight:'bold',
      color:'black',
      marginTop:20,
      paddingLeft:30,
  },
  buttonTextJournal:{
      fontSize:35,
      fontWeight:'bold',
      color:'black',
      paddingLeft:30,
  },
  backgroundImage:{
      flex:1,
      resizeMode:'cover'
  },
  iconImage:{
      position:'absolute',
      height:100,
      width:100,
      resizeMode:'contain',
      right:20,
      top:-0
     }
});
