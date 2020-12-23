import React from 'react';
import { View, StyleSheet,Text , Image,Button} from 'react-native';

const ImageScreen = () => {
return(
    <View> 
      
        <Text>Image Screen</Text>
        <ImageScreen title="Forest" imageSource={require('../../assets/forest.jpg')} />
        <ImageScreen title="Beach" imageSource={require('../../assets/beach.jpg')} />
        <ImageScreen title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
        <Button  
    // style={styles.button1}
    onPress={() => props.navigation.navigate('ListScreen')}
    title="NEXT"/>
    </View>
    );
};

const styles = StyleSheet.create({

});
export default ImageScreen;