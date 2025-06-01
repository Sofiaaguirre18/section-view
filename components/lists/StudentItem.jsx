import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentItem = ({ item, index }) => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.numberCell}>{index + 1}</Text>
      <Text style={styles.studentIdCell}>{item.studentId}</Text>
      <Text style={styles.nameCell}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  numberCell: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    width: 20,
    textAlign: 'center',
  },
  studentIdCell: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'monospace',
    width: 100,
    marginLeft: 55,
  },
  nameCell: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    fontWeight: '400',
  },
});

export default StudentItem;