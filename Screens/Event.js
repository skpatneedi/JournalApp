import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Event extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>You Can View Your Events Here</Text>
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
  