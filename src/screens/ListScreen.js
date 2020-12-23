  import React from 'react';
  import { View, StyleSheet , Text ,FlatList} from 'react-native';

  const ListScreen = () => {
      const student = [
        { name: 'Pranav',Marks:'60',key:'1'},
        { name: 'Mrtra',Marks:'60',key:'2'},
         { name: 'Grnesh',Marks:'60',key:'3'},
        { name: 'Br',Marks:'60',key:'4'},
        { name: 'Pranav',Marks:'60',key:'5'},
        { name: 'Mrtra',Marks:'60',key:'6'},
         { name: 'Grnesh',Marks:'60',key:'7'},
        { name: 'Br',Marks:'60',key:'8'},  
        
      ];
      return (<FlatList 
        horizontal 
        data ={student}
        renderItem={({item}) =>{
            return <Text style={styles.textStyle}>{item.name},{item.Marks}</Text>
        }}
          />
      );
  };

  const styles = StyleSheet.create({
         textStyle:{
           marginVertical:50
         }
  });
  export default ListScreen;