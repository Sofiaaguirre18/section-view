import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import Container from "../../../components/layout/Container";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Input from "../../../components/ui/Input";
import Dropdown from "../../../components/ui/Dropdown";
import Button from "../../../components/ui/Button";
import StudentItem from "../../../components/lists/StudentItem";

export default function ClassDetails() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const [open, setOpen] = useState(false);

  const [genderItems, setGenderItems] = useState([
    { label: "All", value: "All" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  // Add gender property for demonstration
  const [students] = useState([
    { id: 1, studentId: "22-32295", name: "Aguirre, Princess Sofia P.", gender: "Female" },
    { id: 2, studentId: "22-33362", name: "San Esteban, Annemory O.", gender: "Female" },
    { id: 3, studentId: "22-32216", name: "Carullo, Andrei", gender: "Male" },
    { id: 4, studentId: "23-31104", name: "Tadeo, Angel Marie M.", gender: "Female" },
  ]);

  const filteredStudents = students.filter(
    (student) =>
      (selectedGender === "All" || student.gender === selectedGender) &&
      (student.name.toLowerCase().includes(searchText.toLowerCase()) ||
        student.studentId.includes(searchText))
  );

  return (
    <Container>
      {/* Header Title */}
      <Stack.Screen
        options={{
          title: "Student List",
        }}
      />

      <Header
        title="ABM K"
        details={["11 - ABM", "AMS 203", "AM Class"]}
      />

      <View style={styles.filtersContainer}>
        {/* Search bar */}
        <View style={styles.searchWrapper}>
          <View style={styles.dropdownContainer}>
            <Input
              style={styles.searchFilter}
              placeholder="Search"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>
        {/* Gender dropdown */}
        <View style={styles.filterGender}>
          <Text style={styles.genderLabel}>Gender:</Text>
          <View style={styles.dropdownContainer}>
            <Dropdown
              open={open}
              value={selectedGender}
              items={genderItems}
              setOpen={setOpen}
              setValue={setSelectedGender}
              setItems={setGenderItems}
              style={styles.genderFilter}
              dropDownContainerStyle={styles.dropdownContainer}
              textStyle={styles.dropdownText}
              placeholder="All"
              zIndex={2000}
              zIndexInverse={2000}
            />
          </View>
        </View>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerNumber}>No.</Text>
        <Text style={styles.headerStudentId}>StudentID</Text>
        <Text style={styles.headerName}>Name</Text>
      </View>

      <FlatList
        data={filteredStudents}
        renderItem={({ item, index }) => (
          <StudentItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.studentList}
        showsVerticalScrollIndicator={false}
      />

      <Footer
        adviserName="Ms. Lei V. Lucman"
        footerText="ABM K - Adviser"
        alignment="right"
      />

      {/* Close Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="CLOSE"
          onPress={() => router.back()}
          style={styles.closeButton}
          textStyle={styles.closeButtonText}
          variant="danger"
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  filtersContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  filterGender: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  genderLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  },
  dropdownContainer: {
    flex: 1,
  },
  searchFilter: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    minHeight: 36,
  },
  genderFilter: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    minHeight: 36,
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#E02B20",
  },
  headerNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#333',
    width: 40,
    textAlign: 'center',
  },
  headerStudentId: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#333',
    width: 100,
    marginHorizontal: 30,
  },
  headerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  studentList: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    backgroundColor: "#f44336",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});