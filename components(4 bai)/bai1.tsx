// components/Card.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.job}>Front-end Developer</Text>
      <Text style={styles.contact}>✉️ nguyenvana@example.com</Text>
      <Text style={styles.contact}>📞 0901234567</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    marginTop: 16,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  job: { fontSize: 16, color: 'gray', marginBottom: 12 },
  contact: { fontSize: 14, color: '#333' },
});
