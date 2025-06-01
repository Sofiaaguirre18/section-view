import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SectionCard = ({ section, onPress, showDivider = false }) => {
  return (
    <View>
      <TouchableOpacity style={styles.sectionCard} onPress={onPress}>
        <Text style={styles.sectionName}>{section.name}</Text>
        <Text style={styles.sectionAdviser}>
          Adviser: {section.adviser}
        </Text>
      </TouchableOpacity>
      {showDivider && <View style={styles.cardDivider} />}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#7D7C7C',
  },
  sectionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  sectionAdviser: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#C4C4C4',
    marginLeft: 16,
    marginRight: 16,
  },
});

export default SectionCard;