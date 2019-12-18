import React from "react";
import { View, Text, StyleSheet } from "react-native";
const App = () => (
 <View style={styles.container}>
  <Text style={{fontSize: 32, marginTop: 12}}>Heading 1</Text>
  <Text style={{fontSize: 26, marginTop: 12}}>Heading 2</Text>
  <Text style={{fontSize: 22, marginTop: 12}}>Heading 3</Text>
  <Text style={{fontSize: 18, marginTop: 12}}>Heading 4</Text>
  <Text style={{fontSize: 16, marginTop: 12}}>Heading 5</Text>
  <Text>{"\n"}</Text>
  <Text>Paragraph</Text>
  <Text style={{fontStyle: "italic"}}>Italic</Text>
  <Text style={{fontWeight: "bold"}}>Bold</Text>
  <Text style={{textDecorationLine: "underline"}}>Underline</Text>
 </View>
);
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "mintcream" ,
  alignItems: "center",
  justifyContent: "center", 
  padding: 30
 }
});
export default App;
