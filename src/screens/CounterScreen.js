import React, {useState} from 'react';
import { View, StyleSheet,Text , Image,Button} from 'react-native';

const CounterScreen = () => {
   const [counter , setCounter]=useState(0);
return(
    <View> 
      
        
        <Image source={require('../../assets/forest.jpg')} />
        
        <Button title="Increase" onPress={() => {
            // counter++;
            setCounter(counter+1);
        }}/>
       
        <Button title="Decrease" onPress={() => {
            // counter--;
            setCounter(counter-1);
        }}/>

        <Text>CounterScreen{counter}</Text>
         </View>
    );
};

const styles = StyleSheet.create({

});
export default CounterScreen;