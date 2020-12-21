import React from 'react';
import { Text, StyleSheet ,View } from 'react-native';

const First = () => {
    const var1 = 'hegde'
    return (
        <View>
            <Text style={styles.textStyle}>Welcome To First Web Pages</Text>
            <Text style={styles.hedder}>{var1}</Text>
        </View>
        
        );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        textAlign:'center',
        color:'blue'
    },
    hedder: {
        fontSize:40,
        // fontFamily:'arial',
        color:'green'
    }
});
export default First;