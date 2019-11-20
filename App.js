import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
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
      marginBottom: 12,
      fontWeight: "500",
      fontSize
    };
  }
};

const App = () => (
  <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
          <MyAppText style={styles.otsikko(2.5)}>
            Otsikko 1
          </MyAppText>
          <MyAppText style={styles.otsikko(2)}>
            Otsikko 2
          </MyAppText>
          <MyAppText style={styles.otsikko(1.75)}>
            Otsikko 3
          </MyAppText>
          <MyAppText style={styles.otsikko(1.5)}>
            Otsikko 4
          </MyAppText>
          <MyAppText style={styles.otsikko(1.25)}>
            Otsikko 5
          </MyAppText>
          <MyAppText style={styles.otsikko(1)}>
            Otsikko 6
          </MyAppText>
          
          <MyAppText>
            {"\n"}
          </MyAppText>

          <MyAppText>
            Leipäteksti
          </MyAppText>
          <MyAppText style={{fontStyle: "italic"}}>
            Kursivoitu
          </MyAppText>
          <MyAppText style={{fontWeight: "bold"}}>
            Lihavoitu
          </MyAppText>
          <MyAppText style={{textDecorationLine: "underline"}}>
            Alaviiva
          </MyAppText>
          <MyAppText>
            {"\n"}
          </MyAppText>
          <MyAppText>
            <MyAppText>Kun teksti useammalla rivillä on kääritty isomman Text-</MyAppText>
            <MyAppText>komponentin sisään, sen juokseminen riviltä toiselle sujuu paremmin.</MyAppText>
          </MyAppText>
          <MyAppText>
            {"\n"}
          </MyAppText>
          <View>
            <MyAppText>Kun teksti useammalla rivillä on kääritty isomman View-komponentin </MyAppText>
            <MyAppText>sisään, rivivaihdot ei suju yhtä hyvin.</MyAppText>
          </View>
          <MyAppText>
            {"\n"}
          </MyAppText>
          <MyAppText style={styles.otsikko(2)}>Iljettävä Imulima-rock </MyAppText>
          <MyAppText>Iljettävä Imulimanäyte </MyAppText>
          <MyAppText>leipoi kakun josson myrkkysienitäyte. </MyAppText>
          <MyAppText>Säilytti sen kellarissa jäissä </MyAppText>
          <MyAppText>tarjotakseen Herbertille häissä. </MyAppText>
          <MyAppText>
            {"\n"}
          </MyAppText>
          <MyAppText>Oi ei! Oi ei! </MyAppText>
          <MyAppText>
            {"\n"}
          </MyAppText>
          <MyAppText>Törkein vieras koko kakun nieli: </MyAppText>
          <MyAppText>paisui polla ja mustui kieli. </MyAppText>
          <MyAppText>Herbereille tuli paha mieli, </MyAppText>
          <MyAppText>kun kiitoksen sijaan </MyAppText>
          <MyAppText>vierat röyhtäili ja pieri.</MyAppText>
          <MyAppText>
            {"\n"}
          </MyAppText>
          <MyAppText>Oi ei! Oi ei! </MyAppText>
          <MyAppText>
            {"\n"}
          </MyAppText>
          <MyAppText style={{fontStyle: "italic"}}>Laura Ruohonen, Yökyöpeli </MyAppText>
          <MyAppText>
            {"\n"}
          </MyAppText>
        </View>  
      </ScrollView> 
    </SafeAreaView> 
);

export default App;
