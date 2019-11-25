import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'}
          }>
          <Image    
            style={{height: 160}}
            source={require('./assets/images/mobiilikuva.png')}
          />
          <Image 
            style={{height: 300, width: 400 }}
            resizeMode='contain'
            source={{ uri: 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
          />
          <Image 
            style={{height: 250, width: 400 }}
            resizeMode='contain'
            source={{ uri: 'https://images.unsplash.com/photo-1548403119-4f9f60f7c064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' }}
          />
        </View>
    );
  }
}
