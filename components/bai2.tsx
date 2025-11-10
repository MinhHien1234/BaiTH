import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AverageScore() {
  const [toan, setToan] = useState('');
  const [ly, setLy] = useState('');
  const [hoa, setHoa] = useState('');
  const [trungBinh, setTrungBinh] = useState<number | null>(null);

  const tinhDiem = () => {
    const avg = (Number(toan) + Number(ly) + Number(hoa)) / 3;
    setTrungBinh(avg);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Toán" style={styles.input} keyboardType="numeric" value={toan} onChangeText={setToan}/>
      <TextInput placeholder="Lý" style={styles.input} keyboardType="numeric" value={ly} onChangeText={setLy}/>
      <TextInput placeholder="Hóa" style={styles.input} keyboardType="numeric" value={hoa} onChangeText={setHoa}/>
      <Button title="Tính điểm trung bình" onPress={tinhDiem}/>
      {trungBinh !== null && <Text style={styles.result}>Điểm trung bình: {trungBinh.toFixed(2)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width:'100%', maxWidth:400, padding:16, marginTop:16, backgroundColor:'#fff', borderRadius:12, shadowColor:'#000', shadowOffset:{width:0,height:4}, shadowOpacity:0.3, shadowRadius:4, elevation:5 },
  input:{ borderWidth:1, borderColor:'#ccc', padding:8, borderRadius:8, marginBottom:8 },
  result:{ marginTop:16, fontSize:18, fontWeight:'bold', textAlign:'center' },
});
