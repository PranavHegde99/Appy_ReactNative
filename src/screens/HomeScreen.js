import React from "react";
import { Text, StyleSheet,View,Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  return ( 
    <View>
    <Text style={styles.text}>Welcome To First Web Pages</Text>
    <Text style={styles.text}>Sisri</Text>
    <Button  
    // style={styles.button1}
    onPress={() => props.navigation.navigate('Components')}
    title="NEXT"/>
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button1:{
    fontSize: 30,
    width: 7,
    color:"green"
  }  
});

export default HomeScreen;   
