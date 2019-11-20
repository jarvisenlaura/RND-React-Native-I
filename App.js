import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View 
      style={{
        width: 200,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'flex-start'
      }}>
      <View style={{backgroundColor: 'blue', height: 80, width: 60}}/>
      <View style={{backgroundColor: 'red', height: 90, width: 60}}/>
      <View style={{backgroundColor: 'green', height: 80, width: 80}}/>
      <View style={{backgroundColor: 'black', height: 120, width: 60}}/>
      <View style={{backgroundColor: 'orange', height: 80, width: 60}}/>
      <View style={{backgroundColor: 'pink', height: 80, width: 120}}/>
      <View style={{backgroundColor: 'yellow', height: 80, width: 60}}/>
    </View> 
  )
}

export default App;
