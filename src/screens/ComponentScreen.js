import React from 'react';
import {Text, StyleSheet,View  } from 'react-native';
 

const ComponentScreen = () => {
    const pranav = 'Bye There!'
    return (
    <View>
        <Text style={styles.textStyle}>Welcome page1</Text>
        <Text>{pranav}</Text>
        </View>
    );
};    
const styles = StyleSheet.create({
    textStyle:{
        
        fontSize:20,
        textAlign:'left',
        color:'blue'

    
    }
});
export default ComponentScreen;