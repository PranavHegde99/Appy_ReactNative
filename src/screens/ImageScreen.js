import React from 'react';
import { View, StyleSheet,Text , Image,Button} from 'react-native';

const ImageScreen = () => {
return(
    <View> 
      
        <Text>Forest</Text>
        <Image source={require('../../assets/forest.jpg')} />
        <Text>Beach</Text>
        <Image source={require('../../assets/beach.jpg')} />
        <Text>Moutain</Text>
        <Image source={require('../../assets/mountain.jpg')} />
    </View>
    );
};

const styles = StyleSheet.create({

});
export default ImageScreen;