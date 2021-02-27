import { StatusBar } from 'expo-status-bar';
import React, { useDebugValue, useEffect, useState } from 'react';
import { Alert, Button, FlatList, Keyboard, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Addtodo from './component/Addtodo';
import Header from './component/Header';
import Todoitems from './component/Todoitems';
import db from './firebase';
import firebase from 'firebase';


export default function App() {
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({"id":doc.id,"text":doc.data().todo})));
    })
  },[])

  const presshandler = (key) => {
    db.collection('todos').doc(key).delete()
  }

  const submit = (text) => {
    if(text.length > 3){
      db.collection('todos').add({
        todo:text,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      setTodos((prev)=>{
        return [
          {text,key:Math.random().toString()},
          ...prev
       ]
      })
    }
    else{
      // alert("Todo must be greater than 3 characters");
      // Alert.alert('Todo must be greater than 3 characters',
      // [{text:"Understood",onPress:()=>console.log('alert closed')}]
      // )
      Alert.alert('Todo must be greater than 3 characters');
    }
  }

  return (
    // <TouchableWithoutFeedback onPress={()=>{
    //   Keyboard.dismiss()
    // }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Addtodo submit={submit}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
              <Todoitems item={item} presshandler={presshandler}/>
            )}
          />
        </View>
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  content:{
    padding:40,
    flex:1    
  },
  list:{
    flex:1,
    marginTop:20,
  }
});
