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
      marginBottom: 12,
      fontWeight: "500",
      fontSize
    };
  }
};

const App = () => (
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
    <MyAppText style={{fontWeight: "bold"}}>
      Lihavoitu
    </MyAppText>
    <MyAppText style={{textDecorationLine: "underline"}}>
      Alaviiva
    </MyAppText>
  </View>
);

export default App;