import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SectionHeader = ({ title }) => {
  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 12,
    color: '#333',
    backgroundColor: '#fff',
  },
  divider: {
    height: 2,
    backgroundColor: '#E02B20',
  },
});

export default SectionHeader;