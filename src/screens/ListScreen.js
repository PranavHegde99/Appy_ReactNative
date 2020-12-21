  import React from 'react';
  import { View, StyleSheet , Text ,FlatList} from 'react-native';

  const ListScreen = () => {
      const student = [
        { name: 'Pranav',Marks:'60'},
        { name: 'Mrtra',Marks:'60'},
        { name: 'Grnesh',Marks:'60'},
        { name: 'Br',Marks:'60'},  
        
      ];
      return (<FlatList data ={student}
        renderItem={(element) =>{}}
         />
      );
  };

  const styles = StyleSheet.create({

  });
  export default ListScreen;