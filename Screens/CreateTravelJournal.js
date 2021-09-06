import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreateTravelJournal extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>You Can Add Your Travel Journal Here</Text>
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
  