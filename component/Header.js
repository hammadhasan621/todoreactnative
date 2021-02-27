import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:25,
        backgroundColor:'coral'
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
});
