import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if(task.trim() !== ''){
      setTasks(prev => [...prev, task.trim()]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nhập công việc" style={styles.input} value={task} onChangeText={setTask}/>
      <Button title="Thêm" onPress={addTask}/>
      <FlatList
        style={{marginTop:16}}
        data={tasks}
        keyExtractor={(_, index)=>index.toString()}
        renderItem={({item, index})=>(
          <View style={styles.taskRow}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={()=>removeTask(index)}>
              <Text style={styles.delete}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ width:'100%', maxWidth:400, padding:16, marginTop:16, backgroundColor:'#fff', borderRadius:12, shadowColor:'#000', shadowOffset:{width:0,height:4}, shadowOpacity:0.3, shadowRadius:4, elevation:5 },
  input:{ borderWidth:1, borderColor:'#ccc', padding:8, borderRadius:8, marginBottom:8 },
  taskRow:{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:8, borderBottomWidth:1, borderBottomColor:'#eee' },
  delete:{ color:'red', fontSize:18 }
});
