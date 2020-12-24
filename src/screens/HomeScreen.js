import React from "react";
import { Text, StyleSheet,View,Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  return ( 
    <View style={styles.viewstyle}>
    <Text style={styles.text}>Welcome To First Web Pages</Text>
     <Text style={styles.text}>Sisri</Text>
    <Button onPress={() => props.navigation.navigate('Image')}
    title="NEXT"/>

    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>

    <Button style={styles.Buttonstyle}
    onPress={() => props.navigation.navigate('Counter')} 
    title="Counter"/>
</View>
);
};

const styles = StyleSheet.create({
  viewstyle : {
     borderWidth:3,
     borderColor:'green'
  },
  text: {
    fontSize: 30,
    borderWidth:3,
     borderColor:'blue'
  },
  Buttonstyle: {
    height:80,
    width:100,
    backgroundColor:'red'
  }
 
});

export default HomeScreen;   
