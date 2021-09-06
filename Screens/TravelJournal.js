import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TravelJournal extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>You Can View Your Travel Journal Here</Text>
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
  });
  