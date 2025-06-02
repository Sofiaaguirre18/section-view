import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Button from '../../components/ui/Button';

export default function Student() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header Title */}
      <Stack.Screen
        options={{
          title: "Student Tools",
        }}
      />

      {/* Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Quick access to your student tools:</Text>
      </View>

      <View style={styles.optionsContainer}>
        {/* Find my section */}
        <Button
          title="View Section"
          onPress={() => router.push('/sections/SectionList')}
          style={styles.optionButton}
          textStyle={[styles.optionText, { color: '#000' }]}
        />

        {/* Answer Survey */}
        <Text style={styles.stemLabelText}>For STEM students only.</Text>
        <Button
          title="Answer Survey"
          onPress={() => router.push('/sections/SpecializationForm')}
          style={styles.optionButton}
          textStyle={[styles.optionText, { color: '#000' }]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 20,
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '500',
  },
  optionsContainer: {
    padding: 20,
    gap: 20,
  },
  optionButton: {
    borderRadius: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: '20%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    borderLeftWidth: 6,
    borderLeftColor: "#B92F2F",
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  surveyOptionContainer: {
    flexDirection: 'column',
  },
  stemLabelText: {
    fontSize: 12,
    color: '#B92F2F',
    marginTop: 20,
    marginHorizontal: '5%',
  },
});