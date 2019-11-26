import React from "react";
import { View } from "react-native";
import { MyAppText, textStyles } from "./MyAppText";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  otsikko: (skaala) => {
    const fontSize = textStyles.fontSize * skaala;

    return {
      lineHeight: fontSize * 1,
      fontSize
    };
  }
};

const App = () => (
  <View style={styles.container}>
    <MyAppText 
      style={styles.otsikko(2.5)}
      text="Otsikko 1" 
      />
    <MyAppText
      style={styles.otsikko(2)}
      text="Otsikko 2"
    />
    <MyAppText 
      style={styles.otsikko(1.75)}
      text="Otsikko 3" 
    />
    <MyAppText 
      style={styles.otsikko(1.5)}
      text="Otsikko 4" 
    />
    <MyAppText 
      style={styles.otsikko(1.25)}
      text="Otsikko 5" 
    />  
    <MyAppText 
      text="Leipäteksti" 
    />
    <MyAppText 
      style={{fontStyle: "italic"}}
      text="Kursivoitu" 
    />
    <MyAppText
      style={{fontWeight: "bold"}}
      text="Lihavoitu"
    />
    <MyAppText
      style={{textDecorationLine: "underline"}}
      text="Alaviiva"
    />
    <MyAppText
      text={"\n"}
    />    
  </View>  
);

export default App;
