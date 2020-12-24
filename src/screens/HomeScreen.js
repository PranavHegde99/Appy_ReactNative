import React from "react";
import { SafeAreaView,AppRegistry,Text, StyleSheet,View,Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


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

   
<Text> </Text>
        <Button 
          color="#ff5c5c"
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <View style={ {width:"50%"} }>
        <Button   onPress = { () => { console.log("Button pressed!") } } title="Read later" />
        <Button   onPress = { () => { console.log("Button pressed!") } } title="Read later" />
      </View>
      <Text>
        
      </Text>
        
      

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
