import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ adviserName, footerText, alignment = 'right' }) => {
  const alignmentStyle = alignment === 'center' ? 'center' : 'right';
  
  return (
    <View style={styles.footer}>
      <Text style={[styles.adviserName, { textAlign: alignmentStyle }]}>
        {adviserName}
      </Text>
      <Text style={[styles.footerText, { textAlign: alignmentStyle }]}>
        {footerText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'flex-end',
    paddingVertical: 15,
    marginRight: 18,
  },
  adviserName: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 18,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    marginRight: 30,
  },
});

export default Footer;