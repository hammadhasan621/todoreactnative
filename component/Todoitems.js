import React from 'react';
import { TouchableOpacity,Text,StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Todoitems({item,presshandler}){
    return (
        <TouchableOpacity onPress={()=>presshandler(item.id)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333" />
                <Text style={styles.itemtext}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    item: {
      padding:16,
      marginTop:16,
      borderColor:'#bbb',
      borderWidth:1,
      borderStyle:'dashed',
      borderRadius:10,
      flexDirection:'row'
    },
    itemtext:{
        marginLeft:10
    }
  });
