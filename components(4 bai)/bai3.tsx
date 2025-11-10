// components/RandomColor.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RandomColor() {
  const [color, setColor] = useState('#3498db');

  const randomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Button title="Đổi màu" onPress={randomColor}/>
      <Text style={{marginTop:16, color:'#fff', fontWeight:'bold'}}>Màu hiện tại: {color}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ width:'100%', maxWidth:400, padding:16, marginTop:16, borderRadius:12, shadowColor:'#000', shadowOffset:{width:0,height:4}, shadowOpacity:0.3, shadowRadius:4, elevation:5, justifyContent:'center', alignItems:'center' }
});
