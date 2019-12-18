import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
  <Text>{"\n"}</Text>
  <ScrollView>
   <Text style={{color:"magenta"}}>
    Fish i must find my red catnip fishy fish slap owner's
    face at 5am until human fills food dish leave fur on owners
    clothes but play time swat turds around the house so playing
    with balls of wool. Chase imaginary bugs scratch me there,
    elevator butt purr i could pee on this if i had the energy woops
    poop hanging from butt must get rid run run around
    house drag poop on floor maybe it comes off woops left brown
    marks on floor human slave clean lick butt now. Stuff and
    things under the bed while happily ignoring when being
    called. Push your water glass on the floor. Slap kitten
    brother with paw nyan fluffness ahh cucumber! Eat from
    dog's food. Fight own tail. A nice warm laptop for me to sit
    on flop over, yet this human feeds me, i should be a god
    scratch the furniture. Floof tum, tickle bum, jellybean
    footies curly toes ears back wide eyed or get scared by
    sudden appearance of cucumber. Scratch my tummy actually i
    hate you now fight me soft kitty warm kitty little ball of
    furr howl uncontrollably for no reason yet refuse to come
    home when humans are going to bed; stay out all night then
    yowl like i am dying at 4am slap kitten brother with paw
    groom forever, stretch tongue and leave it slightly out,
    blep plan your travel. Hey! you there, with the hands dream
    about hunting birds as lick i the shoes weigh eight pounds
    but take up a full-size bed the door is opening.
   </Text>
  </ScrollView>
</View>
);

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "mintcream" ,
  alignItems: "center",
  justifyContent: "center", 
  padding: 20
 }
});

export default App;
