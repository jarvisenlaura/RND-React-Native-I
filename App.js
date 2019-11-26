import React from "react";
import { Text, View, ScrollView } from "react-native";
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
    
    <ScrollView>
      <Text style={{fontSize: 30}}>Iljettävä Imulima-rock</Text>
      <Text 
        style={{color:'brown'}}>
        {"\n"}
        Iljettävä Imulimanäyte {"\n"}
        leipoi kakun joss'on myrkkysienitäyte. {"\n"}
        Säilytti sen kellarissa jäissä {"\n"}
        tarjotakseen Herbertille häissä. {"\n"}
        {"\n"}
        Oi ei! Oi ei!{"\n"}
        {"\n"}
        Törkein vieras koko kakun nieli: {"\n"}
        paisui polla ja mustui kieli. {"\n"}
        Herbertille tuli paha mieli, {"\n"}
        kun kiitoksen sijaan {"\n"}
        vieraat röyhtäili ja pieri.{"\n"}
        {"\n"}
        Oi ei! Oi ei!{"\n"}
      </Text> 
      <Text style={{fontSize: 26, fontStyle: "italic"}}>
      Laura Ruohonen, Yökyöpeli 
      {"\n"}
      {"\n"}
      </Text>
    </ScrollView> 
  </View>  
);

export default App;
