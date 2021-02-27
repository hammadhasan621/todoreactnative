import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function Addtodo({submit}){
    const [text,setText] = useState('')
    
    const submitfunc = () => {
        submit(text)
        setText("")
    }

    return (
        <View>
            <TextInput 
             style={styles.input}
             placeholder="New todo..." 
             value={text}
             onChangeText={(val)=>setText(val)} 
             />
             <Button 
              title="Submit"
              color='coral'
              onPress={submitfunc}    
              />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
  });
