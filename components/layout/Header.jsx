import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title, subtitle, details = [] }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
      {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
      {details.length > 0 && (
        <View style={styles.textContainer}>
          {details.map((detail, index) => (
            <Text key={index} style={styles.txt}>{detail}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 8,
  },
  textContainer: {
    marginTop: 20,
    gap: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 14,
  },
});

export default Header;