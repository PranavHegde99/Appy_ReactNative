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
      
      

</View>

  );
};

const styles = StyleSheet.create({
  viewstyle : {
     borderWidth:3,
     borderColor:'green',
    //  alignItems:'flex-start'
        alignItems:'center',
    // flexDirection:'row',
    // alignItems:'flex-end',
    // justifyContent:'flex-end',
    // justifyContent:'space-around',
    justifyContent:'space-between',
   
    height:500,
  },
  text: {
    // fontSize: 30,
    borderWidth:3,
     borderColor:'blue',
     height:'auto',
    
  },
  Buttonstyle: {
    height:80,
    width:100,
    backgroundColor:'red',
    // alignItems:'flex-start'
  }
 
});

export default HomeScreen;   
