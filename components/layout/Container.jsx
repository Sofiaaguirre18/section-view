import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const Container = ({ children, backgroundColor = '#fff', barStyle = 'dark-content' }) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={barStyle} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;